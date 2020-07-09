alert("Funcionou!");

function consultaCep(){
    var cep = document.getElementById("cep").value;
    console.log(cep);
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
            alert(response.logradouro);
            document.getElementById("logradouro").innerHTML = response.logradouro;
            document.getElementById("bairro").innerHTML = response.bairro;
            document.getElementById("localidade").innerHTML = response.localidade;
            document.getElementById("uf").innerHTML = response.uf;
            $(".cep").show();
        }
    })
}

$(function(){
    $(".cep").hide();
});