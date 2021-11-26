$(function () {
    function beolvas(szulo, a, termekekTomb,sab) {
        sab.show()
        const szuloElem = $(szulo)
        const sablon = $(sab)
        szuloElem.empty()
        termekekTomb.forEach(elem => {
            const ujElem = sablon.clone().appendTo(szuloElem)
            const termek = new a(ujElem, elem)
        });
        sab.hide()
    }
    window.beolvas = beolvas
})