$(function () {
    const sablon = $("#table-sablon .sablon-section")
    new Ajax().getAjax("http://localhost:3000/termek", "", "#admin-table", TermekAdmin, sablon)
    $(window).on("termekTorles", (event) => {
        let termek = event.detail.id
        let del = "http://localhost:3000/termek/" + termek
        new Ajax().deleteAjax(del)
    })
    let modositandoTermekId
    $(window).on("termekModositas", (event) => {
        modositandoTermekId = event.detail.id
        console.log(modositandoTermekId)
        $("#modisit-form").css("visibility", "visible")
        $("#nev").val(event.detail.nev)
        $("#leiras").val(event.detail.leiras)
        $("#ar").val(event.detail.ar)
    })
    $("#modosit-mentes").on("click", () => {
        let adat = {
            nev: $("#nev").val(),
            leiras: $("#leiras").val(),
            ar: $("#ar").val(),
            fajl: $("#fajl").val()
        }
        new Ajax().putAjax("http://localhost:3000/termek", modositandoTermekId, adat)
    })
})