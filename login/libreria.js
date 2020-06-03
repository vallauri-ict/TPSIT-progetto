"use strict";

function inviaRichiesta(method, url, parameters="") {
    return $.ajax({
        type: method,
        url: url,
        data: parameters,
		contentType: "application/x-www-form-urlencoded;charset=utf-8",
        dataType: "json",        
        timeout: 5000
    });
}

function error(jqXHR, text_status, string_error) {
    if (jqXHR.status == 0)
        alert("Connection Refused or Server timeout");
	else if (jqXHR.status == 200)
        alert("Formato dei dati non corretto : " + jqXHR.responseText);
    else
        alert("Server Error: " + jqXHR.status + " - " + jqXHR.responseText);
}

function GeneraItem(id,desc,img,nome,prezzo,qt,stato,venditore,ag_rim){
    $("<br>").appendTo($("#body"));
    let _div=$("<div>").prop("id",id).addClass("item_div").appendTo($("#body"));
    $("<img>").prop("src",img).addClass("img-thumbnail float-left div_img").appendTo(_div);
    $("<h6>").text(nome).addClass("nome_div").appendTo(_div);
    $("<p>").text(desc).addClass("desc_div").appendTo(_div);
    $("<br>").appendTo(_div);
    $("<p>").text(stato+" - "+"venduto da "+venditore).addClass("vend_div").appendTo(_div);
    $("<br>").appendTo(_div);
    $("<p>").text(qt+" rimanenti").addClass("qt_div").appendTo(_div);
    $("<button>").text("compra").prop("id","buy-"+id).addClass("myBtn btn btn-outline-success float-right").appendTo(_div);
    $("<button>").text(ag_rim+"carrello").prop("id","add-"+id).addClass("myBtn btn btn-outline-info float-right").appendTo(_div);
    $("<p>").text(prezzo+" €").addClass("prezzo_div float-right").appendTo(_div);
}