$(function () {
    window.beolvas("table", TermekAdmin)
    $(window).on("termekTorles", (event) => {
        let termek = event.detail.nev
        $.ajax({
            url: "termekekTomb/" + termek,
            type: "DELETE",
            success: function (result) {
                window.beolvas("table", TermekAdmin,"")
            }
        })
    })
})