function selectImage() {
    document.getElementById('imageInput').click();
}

function displayImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function() {
        const imageSrc = reader.result;
        document.getElementById('profileImage').src = imageSrc;
        document.getElementById('fileName').style.display = 'none';
    }

    reader.readAsDataURL(file);
}

function nick(){
    var nome = window.prompt("Digite seu nome aqui!");
    var resultado = document.getElementById("n_nome").value;

    document.getElementById("n_nome").innerHTML = resultado;
}