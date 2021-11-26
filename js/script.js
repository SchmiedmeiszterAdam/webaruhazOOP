$(function () {
    const kosar = new Kosar()
    const sablon = $("#sablon-section .sablon")
    new Ajax().getAjax("http://localhost:3000/termek","","article",TermekGaleria,sablon)

    $(window).on("termekGomb", (event) => {
        let termek = event.detail
        kosar.termekFelvetel(termek)
        kosar.termekekKiirasa()
    })
    $("#keres").on("keyup",szures)
    function szures(){
        let szures = "nev_like="+$(this).val()
        new Ajax().getAjax("http://localhost:3000/termek",szures,"article",TermekGaleria,sablon)
    }
})