import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { gzipSync } from 'node:zlib'

const root = fileURLToPath(new URL('./dist/', import.meta.url))
const port = Number(process.env.PORT || 4173)
const mime = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.svg': 'image/svg+xml'
}
const headers = {}
for (const line of (await readFile(path.join(root, '_headers'), 'utf8')).split(/\r?\n/)) {
  const match = line.match(/^\s+([\w-]+):\s*(.+)$/)
  if (match) headers[match[1]] = match[2]
}

const server = createServer(async (request, response) => {
  const fail = status => {
    response.writeHead(status, { ...headers, 'Content-Type': 'text/plain; charset=utf-8' })
    response.end(status === 405 ? 'Método indisponível.' : 'Página não encontrada.')
  }
  if (!['GET', 'HEAD'].includes(request.method)) return fail(405)
  try {
    const url = new URL(request.url, 'http://localhost')
    const pathname = decodeURIComponent(url.pathname)
    if (pathname.split(/[\\/]/).some(part => part.startsWith('.') || part === '_headers' || part.includes(':'))) return fail(404)
    let file = path.join(root, pathname)
    const relative = path.relative(root, file)
    if (relative.startsWith('..') || path.isAbsolute(relative)) return fail(404)
    if ((await stat(file)).isDirectory()) {
      if (!pathname.endsWith('/')) {
        response.writeHead(308, { ...headers, Location: url.pathname + '/' + url.search })
        return response.end()
      }
      file = path.join(file, 'index.html')
    }
    let data = await readFile(file)
    const type = mime[path.extname(file)]
    if (!type) return fail(404)
    const result = { ...headers, 'Content-Type': type, 'Cache-Control': 'no-cache', Vary: 'Accept-Encoding' }
    if (/text|javascript|xml/.test(type) && /\bgzip\b/.test(request.headers['accept-encoding'] || '')) {
      data = gzipSync(data)
      result['Content-Encoding'] = 'gzip'
    }
    result['Content-Length'] = data.length
    response.writeHead(200, result)
    response.end(request.method === 'HEAD' ? undefined : data)
  } catch {
    fail(404)
  }
})

server.listen(port, '127.0.0.1', () => console.log('Prévia local em http://127.0.0.1:' + port + '/'))
