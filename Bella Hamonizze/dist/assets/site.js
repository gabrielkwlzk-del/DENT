const select = selector => document.querySelector(selector)
const dialog = select('#mobile-nav')
const trigger = select('.menu')
trigger.addEventListener('click', () => {
  dialog.showModal()
  trigger.setAttribute('aria-expanded', 'true')
  document.body.style.overflow = 'hidden'
})
dialog.querySelector('.close').onclick = () => dialog.close()
dialog.querySelectorAll('a').forEach(link => link.addEventListener('click', () => dialog.close()))
dialog.addEventListener('close', () => {
  document.body.style.overflow = ''
  trigger.setAttribute('aria-expanded', 'false')
})
const onScroll = () => {
  select('header').classList.toggle('scrolled', scrollY > 8)
  document.body.classList.toggle('deep', scrollY > 400)
}
onScroll()
addEventListener('scroll', onScroll, {passive:true})
const banner = select('.cookies')
try { banner.hidden = localStorage.getItem('bella-privacy') === 'essential' } catch {banner.hidden=false}
banner.querySelector('button').onclick = () => {
  try {localStorage.setItem('bella-privacy','essential')} catch {}
  banner.hidden=true
}
select('.reset')?.addEventListener('click', () => {banner.hidden=false;banner.querySelector('button').focus()})
select('[data-year]').textContent=new Date().getFullYear()
document.querySelectorAll('.compare input').forEach(range => range.oninput = () => range.parentElement.style.setProperty('--split',range.value+'%'))
const map=select('[data-map]')
function loadMap(){
  if(!map || map.querySelector('iframe'))return
  const iframe=document.createElement('iframe')
  iframe.title='Localização da Bella Harmonizze em Criciúma'
  iframe.loading='lazy'
  iframe.referrerPolicy='no-referrer-when-downgrade'
  iframe.src=map.dataset.map
  map.replaceChildren(iframe)
}
map?.querySelector('button').addEventListener('click',loadMap)
if('IntersectionObserver' in window){
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(!entry.isIntersecting)return
    if(entry.target===map)loadMap()
    else entry.target.classList.add('arrived')
    observer.unobserve(entry.target)
  }),{threshold:.05})
  document.querySelectorAll('main .section').forEach(section=>observer.observe(section))
  if(map)observer.observe(map)
}
