$(function () {
    function beolvas(szulo, a) {
        const termekekTomb = []
        $.ajax({
            url: "termekek.json", success: function (result) {
                termekekTomb.push(result)
                termekeLetrehozasa()
            }
        });
        function termekeLetrehozasa() {
            const szuloElem = $(szulo)
            const sablon = $(".sablon")
            termekekTomb[0].forEach(elem => {
                const ujElem = sablon.clone().appendTo(szuloElem)
                const termek = new a(ujElem, elem)
            });
            sablon.remove()
        }
    }
    window.beolvas = beolvas
})