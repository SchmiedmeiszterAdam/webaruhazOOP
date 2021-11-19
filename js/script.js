$(function () {
    const kosar = new Kosar()
    window.beolvas("article", TermekGaleria,"")
    $(window).on("termekGomb", (event) => {
        let termek = event.detail
        kosar.termekFelvetel(termek)
        kosar.termekekKiirasa()
    })
    $("#keres").on("keyup",szures)
    function szures(){
        let szures = "nev_like="+$(this).val()
        window.beolvas("article", TermekGaleria,"?"+szures)
    }
})