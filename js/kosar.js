class Kosar {
    constructor() {
        if (localStorage.getItem("allEntries") === null) {
            this.kosarTartalma = []
        }
        else {
            this.kosarTartalma = (JSON.parse(localStorage.getItem('allEntries')))
        }
        this.termekekKiirasa()
    }
    termekFelvetel(termek) {
        this.kosarTartalma.push(termek)

        localStorage.setItem("allEntries", JSON.stringify(this.kosarTartalma));
    }
    termekekKiirasa() {
        $("#termekek").empty()
        this.kosarTartalma.forEach((element, index) => {
            $("#termekek").append("<div class = 'termekKosarban'><p>" + element.nev + "</p><p>" + element.ar + " Ft</p><input type='button' id=" + index + " class='kosarbol-torol'></div>")
        });
        $('.kosarbol-torol').on("click", (event) => {
            let id = $(event.target).attr('id')
            this.kosarTartalma.splice(id, 1)
            localStorage.setItem("allEntries", JSON.stringify(this.kosarTartalma));
            this.termekekKiirasa()
        })
        this.osszarSzamitas()
    }
    osszarSzamitas() {
        let osszar = 0
        this.kosarTartalma.forEach(element => {
            osszar += element.ar
        })
        $(".osszar").html(osszar + " Ft")
    }

}