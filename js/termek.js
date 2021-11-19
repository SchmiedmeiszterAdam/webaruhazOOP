class Termek {
    constructor(elem, adat) {
        this.elem = elem
        this.adat = adat
    }
    setAdatok() {
        this.nev.html(this.adat.nev)
        this.leiras.html(this.adat.leiras)
        this.ar.html(this.adat.ar + " Ft")
        this.kep.attr('src', this.adat.kep)
    }

}
class TermekGaleria extends Termek {
    constructor(elem, adat) {
        super(elem, adat)
        this.nev = this.elem.children("h2")
        this.kep = this.elem.children("img")
        this.leiras = this.elem.children(".leiras")
        this.ar = this.elem.children(".ar")
        this.gomb = this.elem.children(".kosarba")
        this.setAdatok()
        this.gomb.on("click", () => { this.kattintasTrigger() })
    }
    kattintasTrigger() {
        let esemeny = new CustomEvent("termekGomb", { detail: this.adat })
        window.dispatchEvent(esemeny)
    }
}
class TermekAdmin extends Termek {
    constructor(elem, adat) {
        super(elem, adat)
        this.nev = this.elem.children(".cim")
        this.kep = this.elem.find(".kep")
        this.leiras = this.elem.children(".leiras")
        this.ar = this.elem.children(".ar")
        this.gomb = this.elem.find(".torol")
        this.setAdatok()
        this.gomb.on("click", () => { this.kattintasTrigger() })
    }
    kattintasTrigger() {
        let esemeny = new CustomEvent("termekTorles", { detail: this.adat })
        window.dispatchEvent(esemeny)
    }
}