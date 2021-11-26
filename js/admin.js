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
            nev: $("#modosit-nev").val(),
            leiras: $("#modosit-leiras").val(),
            ar: $("#modosit-ar").val(),
            fajl: $("#modosit-fajl").val()
        }
        new Ajax().putAjax("http://localhost:3000/termek", modositandoTermekId, adat)
    })
    $("#uj-termek-mentes").on("click", () => {
        let adat = {
            nev: $("#uj-termek-nev").val(),
            leiras: $("#uj-termek-leiras").val(),
            ar: $("#uj-termek-ar").val(),
            fajl: $("#uj-termek-fajl").val()
        }
        $("#uj-termek-nev").val(""),
        $("#uj-termek-leiras").val(""),
        $("#uj-termek-ar").val(""),
        $("#uj-termek-fajl").val("")
        new Ajax().postAjax("http://localhost:3000/termek", adat)
    })
})