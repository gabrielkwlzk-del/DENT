# Bella Harmonizze Clínica Odontológica

Site institucional estático em português. A pasta `dist/` contém a entrega para hospedagem. Fotografias, fontes e scripts são servidos localmente.

## Prévia

Com Node.js instalado, execute `npm run build` e `npm run dev`. Abra o endereço informado pelo servidor. A lista de confirmações da clínica fica em `/README/`.

## Conteúdo

Edite os serviços, dúvidas, depoimentos recebidos e pendências em `content.json`. Preencha os dados verificados em `clinic.json` e reconstrua as páginas. A contagem de avaliações só aparece após a confirmação. O link provisório abre uma pesquisa no Maps pelo nome e endereço da clínica. A seção de depoimentos usa a ficha da clínica enquanto a autorização estiver pendente.

Antes da divulgação pública, conclua a revisão profissional, inclusive da identificação dos responsáveis e do registro da pessoa jurídica. A galeria institucional contém somente espaços de reserva. Consulte a orientação do CFO indicada em `/README/` antes de considerar qualquer uso de imagens de pacientes.

## Hospedagem

Para Netlify, use o arquivo `netlify.toml`. A configuração publica somente `dist/` e aplica os cabeçalhos de segurança de `dist/_headers`. Não copie arquivos do WordPress para esta entrega.

O endereço canônico considera o domínio final bellaharmonizze.com. O mapa é o único conteúdo incorporado de terceiros e carrega ao entrar na área de localização. A avaliação de desempenho inicial exclui a transferência posterior do iframe do Google.
