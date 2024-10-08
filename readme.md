Como ligar a api:

1° no terminal digite 'node backend.js' para ligar o backend

2º depois inicie o golive server no arquivo 'index.html'


Descrição:

A api é composta por 7 elementos principais( backend.js, frontend.js, jois.js, data.json, provdata.json, index.html, style.css) 

Joi.js contem a autoshema para validar os inputs entre o frontend e o backend

O backend.js é o api por si, ele inicia em localhost 5000, ele vai de início transmitir a ultima tabela de items contida no arquivo data.json na local /products.

Alem disso em products/newlist/ aceita metodos 'get' e 'post'. No 'post' ele recebe pedaços de lista que vão compor a nova tabela, no 'get ele envia para o frontend o estado atual da lista essa lista é gravada e provdata/json

Por ultimo no caminho '/' ele lê a lista em 'provdata.json', copia ela para 'data.json' e por ultimo limpa provdata.json para uso futuro

No frontend ele pega 'data.json' e quando pedido 'provdata.json' e envia para index.html além disso ele pega os inputs de index.html os formata e envia para o backend.js, por ultimo quando o botão 'atualiza a tabela antiga 
'

No index.html ele carrega 'data.json' em forma de tabela providencia os inputs de texto 'title' e 'description' e o input de número 'quantity' ele é estilizado por style.css