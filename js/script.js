$(function () {
    const kosar = new Kosar()
    window.beolvas("article", TermekGaleria)
    $(window).on("termekGomb", (event) => {
        let termek = event.detail
        kosar.termekFelvetel(termek)
        kosar.termekekKiirasa()
    })
})