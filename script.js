// script.js

// Método simples: Adicionando um título ao site
document.body.insertAdjacentHTML('afterbegin', '<h1 id="titulo">Loja Virtual</h1>');

// Método complexo: Criando um elemento para o produto
const produto = document.createElement('div');
produto.id = 'produto';

const nome = document.createElement('h2');
nome.textContent = 'Câmera Digital X200';

const descricao = document.createElement('p');
descricao.textContent = 'Resolução de 24MP, Zoom Óptico de 10x, Gravação 4K.';

const preco = document.createElement('p');
preco.textContent = 'Preço: R$ 1.800,00';

// Adicionando elementos ao produto
produto.appendChild(nome);
produto.appendChild(descricao);
produto.appendChild(preco);

// Inserindo o produto na página
document.body.appendChild(produto);
