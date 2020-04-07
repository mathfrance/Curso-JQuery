var frase = $(".frase").text();
var numPalavras = frase.split(" ").length;
var tamanhoFrase = $("#tamanho-frase");
tamanhoFrase.text(numPalavras);

var campo = $(".campo-digitacao");
campo.on("input", function() {
    var quantidadePalavras = campo.val().split(/\S+/).length - 1;
    $("#contador-palavras").text(quantidadePalavras);

    var quantidadeCaracteres = campo.val().length;
    $("#contator-caracteres").text(quantidadeCaracteres);
})