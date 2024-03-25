const sidebarButton = document.getElementById('sidebarButton');
const sidebar = document.getElementById('sidebar');
const closeButton = document.getElementById('closeButton');

sidebarButton.addEventListener('click', function() {
  sidebar.classList.add('open');
  sidebarButton.classList.add('hidden');
});

closeButton.addEventListener('click', function() {
  sidebar.classList.remove('open');
  sidebarButton.classList.remove('hidden');
});


var cartItems = [];

    function adicionarAoCarrinho1() {
      var produto = {
        imagem: 'img/casa.jpg',
        nome: 'Produto 1',
        tipo: document.getElementById('tipo-produto1').value,
        preco: document.getElementById('preco-produto1').innerText,
        quantidade: document.getElementById('quantidade-produto1').value
      };
      cartItems.push(produto);
      alert('Produto 1 adicionado ao carrinho!');
    }

    function adicionarAoCarrinho2() {
      var produto = {
        imagem: 'img/cheiro.png',
        nome: 'Produto 2',
        tipo: document.getElementById('tipo-produto2').value,
        preco: document.getElementById('preco-produto2').innerText,
        quantidade: document.getElementById('quantidade-produto2').value,
      };
      cartItems.push(produto);
      alert('Produto 2 adicionado ao carrinho!');
    }

    function exibirCarrinho() {
      var cartDiv = document.getElementById('cart');
      cartDiv.innerHTML = '';

      var total = 0;

      for (var i = 0; i < cartItems.length; i++) {
        var item = cartItems[i];

        var productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
          <img src="${item.imagem}" alt="${item.nome}">
          <div>
            <div class="conteiner">
            <h3>${item.nome}</h3>
            <p>Tipo: ${item.tipo}</p>
          </div>
          <div>
            <p>Preço: R$ ${item.preco}</p>
            <p>Quantidade: ${item.quantidade}</p>
            <button onclick="removerDoCarrinho(${i})"><i class="bx bx-x"></i> Remover</button>
          </div>
        `;

        cartDiv.appendChild(productDiv);

        total += parseFloat(item.preco) * parseInt(item.quantidade);
      }

      var totalDiv = document.createElement('div');
      totalDiv.className = 'total';
      totalDiv.innerHTML = `<h3>Valor Total: R$ ${total.toFixed(2)}</h3>`;
      cartDiv.appendChild(totalDiv);

      var confirmButton = document.createElement('button');
      confirmButton.innerText = 'Confirmar Compra';
      confirmButton.onclick = confirmarCompra;
      cartDiv.appendChild(confirmButton);

      var backButton = document.createElement('button');
      backButton.innerText = 'Voltar';
      backButton.onclick = voltar;
      cartDiv.appendChild(backButton);
    }

    function removerDoCarrinho(index) {
      cartItems.splice(index, 1);
      exibirCarrinho();
    }

    function confirmarCompra() {
      if (cartItems.length === 0) {
        alert('Não há produtos no carrinho para confirmar a compra!');
      } else {
        alert('Compra confirmada! Obrigado por comprar conosco!');
        cartItems = [];
        window.location.href = "endereco.html";
      }
    }

    function voltar() {
      var cartDiv = document.getElementById('cart');
      cartDiv.innerHTML = '';
    }

    function verCarrinho() {
      exibirCarrinho();
    }