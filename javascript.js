function preencherDetalhesDoProduto() {
    document.getElementById('produto').textContent = "Produto: " + produtoSelecionado.nome;
    document.getElementById('preco').textContent = "Preço: " + produtoSelecionado.preco;
    document.getElementById('quantidade').textContent = "Quantidade: " + produtoSelecionado.quantidade;
  }

  function gerarImagemExemplo() {
    var imagemExemplo = "img/QRCODE.jpg";
    var qrcodeElement = document.getElementById("qrcode");

    qrcodeElement.innerHTML = '<img src="' + imagemExemplo + '" alt="Imagem Exemplo">';
  }

  function confirmarCompra(event) {
    event.preventDefault();

    var endereco = document.getElementById('endereco').value;
    var email = document.getElementById('email').value;
    var numeroCartao = document.getElementById('numeroCartao').value;
    var cvc = document.getElementById('cvc').value;

    if (endereco === "" || email === "" || numeroCartao === "" || vencimento === "" || cvc === "") {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    // Exibir mensagem de confirmação
    alert("Compra confirmada! Detalhes enviados para o email: " + email);

    // Restaurar o formulário após a confirmação
    document.getElementById('formCompra').reset();
    document.getElementById('qrcode').innerHTML = '';
  }

  function voltarPagina() {
    window.location.href = "index.html"; // Substitua "pagina-anterior.html" pela URL da página desejada
  }

  // Chamar a função para preencher os detalhes do produto assim que a página for carregada
  preencherDetalhesDoProduto();

  function n_cel(){
    var numcel = document.getElementById("ncel").value.length;

    if(numcel == 2){
        document.getElementById("ncel").value = "(" + document.getElementById("ncel").value + ") ";
    } else if(numcel == 9){
        document.getElementById("ncel").value = document.getElementById("ncel").value + "-";
    }
}

function n_vencimento(){
    var numctele = document.getElementById("nvenc").value.length;

    if(numctele == 2){
        document.getElementById("nvenc").value = document.getElementById("nvenc").value + "/";
    } 
}

function numcatao(){
    var numcart = document.getElementById("ncatao").value.length;

    if(numcart == 4){
        document.getElementById("ncatao").value = document.getElementById("ncatao").value + " ";
    } else if(numcart == 9){
        document.getElementById("ncatao").value = document.getElementById("ncatao").value + " ";
    }else if(numcart == 14){
      document.getElementById("ncatao").value = document.getElementById("ncatao").value + " ";
    }
}