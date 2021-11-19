class Ajax{
    constructor(tipus,termek){
        $.ajax({
            url: "termekekTomb/" + termek,
            type: tipus,
            success: function (result) {
                window.beolvas("table", TermekAdmin,"")
            }
        })
    }
}