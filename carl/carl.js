"use strict";

$(document).ready(function(){
    let _RichiestaItem=inviaRichiesta("POST","../server/getItemCarl.php",{});

    _RichiestaItem.fail(error);
    _RichiestaItem.done(function(data){
        console.log(data);
        let v=data[0][0]["carrello"].split('|');
        console.log(v);
        for(let i = 0; i<v.length; i++)
        {
            let req=inviaRichiesta("POST","../server/getItemById.php",{"id":v[i]});
            req.fail(error);
            req.done(function(item){
                for(let i=0; i<item[0].length; i++)
                {
                    GeneraItem(item[0][i]["codice"],item[0][i]["descrizione"],"../item/item_img/"+item[0][i]["immagine"],item[0][i]["nome"],item[0][i]["prezzo"],item[0][i]["quantita"],item[0][i]["stato"],item[0][i]["venditore"],"rimuovi dal ");
                }
            })
        }
        $(".myBtn").on("click",function(){
            let _id=$(this).prop("id").split("-")[1];
            let _mod=$(this).text().split(" ")[0];
            let UpdateItem=inviaRichiesta("POST","../server/addBuyItem.php",{"id":_id,"mod":_mod});
            UpdateItem.fail(error);
            UpdateItem.done(function(data){
                if(_mod=="rimuovi") $("#"+_id).remove();
                else if(_mod=="compra") alert("Hai comprato quest'articolo");
            })
        })
    });
})
