class Ajax{
    constructor(){
    }
    getAjax(fajlNev,lekerdez,szulo,a,sablon) {
        const termekekTomb = []
        const leker = fajlNev + "?" + lekerdez
        $.ajax({
            url: leker,
            type: "GET",
            success: function (result) {
                result.forEach((element) => {
                    termekekTomb.push(element)
                })
                window.beolvas(szulo, a,termekekTomb,sablon)
            }
        });
    }
    postAjax(fajlNev,adat) {
        $.ajax({
            url: fajlNev,
            type: "POST",
            data:adat,
            success: function (result) {
                const sablon = $("#table-sablon .sablon-section")
                new Ajax().getAjax("http://localhost:3000/termek","","#admin-table",TermekAdmin,sablon)
            }
        });
        
    }
    putAjax(fajlNev,id,adat) {
        $.ajax({
            url: fajlNev +"/"+ id,
            type: "PUT",
            data:adat,
            success: function (result) {
                const sablon = $("#table-sablon .sablon-section")
                new Ajax().getAjax("http://localhost:3000/termek","","#admin-table",TermekAdmin,sablon)
            }
        });
        
    }
    deleteAjax(fajlNev) {
        $.ajax({
            url: fajlNev,
            type: "DELETE",
            success: function (result) {
                const sablon = $("#table-sablon .sablon-section")
                new Ajax().getAjax("http://localhost:3000/termek","","#admin-table",TermekAdmin,sablon)
            }
        });
        
    }
}