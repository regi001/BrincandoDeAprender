function carregar(url) {
    $.get(url, function (pagina) {
        $("#conteudo").html(pagina);
    });
}
