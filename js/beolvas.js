$(function () {
    function beolvas(szulo, a,lekerdez) {
        const termekekTomb = []
        $.ajax({
            url: "http://localhost:3000/termek" + lekerdez, 
            type:"GET",
            success: function (result) {
                result.forEach((element)=>{
                    termekekTomb.push(element)
                })
                termekeLetrehozasa()
            }
        });
        function termekeLetrehozasa() {
            const szuloElem = $(szulo)
            const sablon = $("section .sablon")
            szuloElem.empty()
            termekekTomb.forEach(elem => {
                const ujElem = sablon.clone().appendTo(szuloElem)
                const termek = new a(ujElem, elem)
            });
        }
    }
    window.beolvas = beolvas
})