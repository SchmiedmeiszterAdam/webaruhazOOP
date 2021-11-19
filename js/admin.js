$(function () {
    window.beolvas("table", TermekAdmin)
    $(window).on("termekTorles", (event) => {
        let termek = event.detail.nev
        console.log("Kitörlöm a " + termek + "-et")
    })
})