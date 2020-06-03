"use strict";

$(document).ready(function(){
    let _RichiestaItem=inviaRichiesta("POST","../server/item.php",{});

    _RichiestaItem.fail(error);
    _RichiestaItem.done(function(data){
        console.log(data);
        for(let i=0; i<data[0].length; i++)
        {
            GeneraItem(data[0][i]["codice"],data[0][i]["descrizione"],"item_img/"+data[0][i]["immagine"],data[0][i]["nome"],data[0][i]["prezzo"],data[0][i]["quantita"],data[0][i]["stato"],data[0][i]["venditore"],"aggiungi al ");
        }
    });
})

$(".myBtn").on("click",function(){
    let _id=$(this).prop("id").split("-")[1];
    let _mod=$(this).text().split(" ")[0];
    let UpdateItem=inviaRichiesta("POST","../server/addBuyItem.php",{"id":_id,"mod":_mod});
    UpdateItem.fail(error);
    UpdateItem.done(function(data){
        if(_mod=="aggiungi")    alert("Articolo aggiunto con successo");
        else if(_mod=="compra") alert("Hai comprato quest'articolo");
    })
})