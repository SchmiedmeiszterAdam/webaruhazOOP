$(function () {
    let kosar = new Kosar()
    $(".termekKosarban").css("justify-content", "space-around")
    $(".termekKosarban").css("width", "500px")
    // const kosarTomb = []
    // kosarTomb.push(JSON.parse(localStorage.getItem('allEntries')))

    // const szuloElem = $("table")
    // const sablon = $(".sablon")
    // sablon.remove()

    // kosarTomb.forEach((element, index) => {
    //     const ujElem = sablon.clone().appendTo(szuloElem)
    //     const termek = new Termek(ujElem, element)
    //     let i = 0
    //     for (var item in element) {
    //         $("table").append("<tr>")
    //         $("table tr").eq(i).append("<td>" + element[item].nev + "</td><td>" + element[item].kep + "</td><td>" + element[item].leiras + "</td><td>" + element[item].ar + "</td><td><input type='button' id= '</td>")
    //         i++
    //     }
    // });
})