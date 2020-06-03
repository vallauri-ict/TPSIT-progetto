"use strict"

$(document).ready(function() {	
	let _email = $("#email");
	let _password = $("#pwd");
	let _div_nome=$("#nome");
	let _div_indirizzo=$("#ind");
	let _div_carta=$("#carta");
	let _nome=$("#phNome");
	let _indirizzo=$("#phInd");
	let _carta=$("#phCarta");
	let _desc=$("#phDescrizione");
	let _img=$("#phimg");
	let _vend=$("#phVend");
	let _stato=$("#phStato");
	let _qt=$("#phqt");
	let _prezzo=$("#phPrezzo");
	let _lblErrore = $("#lblError");
	let _logout=$("#btnLogout");
	let _btnReg=$("#btnRegistrati");
	let _btnLogin=$("#btnLogin");
	let _login=$("#lkLogin");
	let _reg=$("#lkRegistrati");
	let _jumbo=$("#jumbo");
	let _btnCambiaDati=$("#btnCambiaDati");
	let _btnCaricaItem=$("#btnCaricaItem");
	let _btnDati=$("#btnDati");
	let _div_email=$("#div_email");
	let _btnItem=$("#btnItem");
	let _div_pwd=$("#div_pwd");
	let _div_img=$("#div_img");
	let _div_vend=$("#div_vend");
	let _div_stato=$("#div_stato");
	let _div_qt=$("#div_qt");
	let _div_prezzo=$("#div_prezzo");
	let _div_desc=$("#div_desc");
	
	let chkSession=inviaRichiesta("POST","../server/trySession.php",{});
	chkSession.fail(function(jqXHR, test_status, str_error){
		if (jqXHR.status == 403) { // unauthorized
			$(".jumbotron").trigger("click");
			_lblErrore.hide();
			_div_nome.hide();
			_div_indirizzo.hide();
			_div_carta.hide();
			_btnReg.hide();
			_login.hide();
			_btnDati.hide();
			_btnItem.hide();
			_div_img.hide();
			_div_vend.hide();
			_div_stato.hide();
			_div_qt.hide();
			_div_prezzo.hide();
			_div_desc.hide();
			$("#formAccessoFatto").hide();
		} else{
			error(jqXHR, test_status, str_error)
		}
	});
	chkSession.done(function(data){
		_lblErrore.hide();
		_div_nome.hide();
		_div_indirizzo.hide();
		_div_carta.hide();
		_btnReg.hide();
		_login.hide();
		_btnDati.hide();
		$("#formAccessoFatto").show();
		$("h4").text(data["nome"]);
	})	

	//---------------item--------------------//

	_btnCaricaItem.on("click",function(){
		$(".jumbotron").trigger("click");
		_btnItem.show();
		_div_nome.show();
		_lblErrore.hide();
		_div_indirizzo.hide();
		_div_carta.hide();
		_btnReg.hide();
		_login.hide();
		_btnDati.hide();
		_btnItem.show();
		_div_email.hide();
		_div_pwd.hide();
		_btnLogin.hide();
		_reg.hide();
		_div_img.show();
		_div_vend.show();
		_div_stato.show();
		_div_qt.show();
		_div_prezzo.show();
		_div_desc.show();
	})

	//---------------utenti--------------------//

	_btnCambiaDati.on("click",function(){
		$(".jumbotron").trigger("click");
		_lblErrore.hide();
		_div_nome.show();
		_div_indirizzo.show();
		_div_carta.show();
		_btnLogin.hide();
		_btnReg.show();
		_reg.hide();
		_login.hide();
		_btnDati.show();
		_btnReg.hide();
		_div_email.hide();
		_reg.hide();
		_login.hide();
		_div_img.hide();
		_div_vend.hide();
		_div_stato.hide();
		_div_qt.hide();
		_div_prezzo.hide();
		_div_desc.hide();
		_btnItem.hide();
	})

	//------------------------------------------//

	_reg.on("click",function(){
		_lblErrore.hide();
		_div_nome.show();
		_div_indirizzo.show();
		_div_carta.show();
		_btnLogin.hide();
		_btnReg.show();
		_reg.hide();
		_login.show();
	})

	_login.on("click",function(){
		_lblErrore.hide();
		_div_nome.hide();
		_div_indirizzo.hide();
		_div_carta.hide();
		_btnLogin.show();
		_btnReg.hide();
		_reg.show();
		_login.hide();
	})

	_logout.on("click",function(){
		let RichiestaLogout=inviaRichiesta("POST","../server/logout.php",{});
		RichiestaLogout.fail(error);
		RichiestaLogout.done(function(data){
			location.href="login.html";
		})
	});

	_btnLogin.on("click",controllaLogin);

	_btnReg.on("click",Registra);

	_btnDati.on("click",UpdateDati);

	_btnItem.on("click",CaricaItem);
	
	
	function controllaLogin(){
		
        _email.removeClass("is-invalid");  // bordo rosso textbox
		_email.prev().removeClass("icona-rossa");  // colore icona				
        _password.removeClass("is-invalid");
		_password.prev().removeClass("icona-rossa"); 

		_lblErrore.hide();		
		
        if (_email.val() == "") {
            _email.addClass("is-invalid"); // bordo rosso textbox
			_email.prev().addClass("icona-rossa"); // colore icona
        } 
		else if (_password.val() == "") {
            _password.addClass("is-invalid"); // bordo rosso textbox
			_password.prev().addClass("icona-rossa"); // colore icona
        }
		else{
			let mail=_email.val();
			// md5 restituisce una word esadecimale, quindi è obbligatorio .toString()
			let pass=CryptoJS.MD5(_password.val()).toString();
			let _richiestaLogin= inviaRichiesta("POST", "../server/login.php", { "email":mail, "password":pass } );
			_richiestaLogin.fail(function(jqXHR, test_status, str_error) {
				if (jqXHR.status == 401) { // unauthorized
					_lblErrore.show();
				} else
					error(jqXHR, test_status, str_error)
			});
			_richiestaLogin.done(function(data) {
				$(".jumbotron").trigger("click");
				_lblErrore.hide();
				$("#formAccessoFatto").show();
				console.log(data);
				$("h4").text(data["nome"]);
			});
		}
	}

	function UpdateDati(){
		_email.removeClass("is-invalid");  // bordo rosso textbox
		_email.prev().removeClass("icona-rossa");  // colore icona				
        _password.removeClass("is-invalid");
		_password.prev().removeClass("icona-rossa"); 
		_nome.removeClass("is-invalid");
		_nome.prev().removeClass("icona-rossa");
		_indirizzo.removeClass("is-invalid");  // bordo rosso textbox
		_indirizzo.prev().removeClass("icona-rossa");  // colore icona				
        _carta.removeClass("is-invalid");
		_carta.prev().removeClass("icona-rossa"); 
		console.log(_password);

		if (_carta.val() == "") {
            _carta.addClass("is-invalid"); // bordo rosso textbox
			_carta.prev().addClass("icona-rossa"); // colore icona
        } 
		else if (_password.val() == "") {
            _password.addClass("is-invalid"); // bordo rosso textbox
			_password.prev().addClass("icona-rossa"); // colore icona
		}
		else if (_nome.val() == "") {
            _nome.addClass("is-invalid"); // bordo rosso textbox
			_nome.prev().addClass("icona-rossa"); // colore icona
        } 
		else if (_indirizzo.val() == "") {
            _indirizzo.addClass("is-invalid"); // bordo rosso textbox
			_indirizzo.prev().addClass("icona-rossa"); // colore icona
		}
		else{
			let mail=_email.val();
			// md5 restituisce una word esadecimale, quindi è obbligatorio .toString()
			let pass=CryptoJS.MD5(_password.val()).toString();
			let nome=_nome.val();
			let ind=_indirizzo.val();
			let carta=_carta.val();

			let _updateDati= inviaRichiesta("POST", "../server/updateDati.php", {"password":pass, "nome":nome, "indirizzo":ind, "carta":carta } );
			_updateDati.fail(function(jqXHR, test_status, str_error) {
				if (jqXHR.status == 401) { // unauthorized
					_lblErrore.show();
				} else
					error(jqXHR, test_status, str_error)
			});
			_updateDati.done(function(data) {
				
			});
		}
	}
	
	function Registra(){
		_email.removeClass("is-invalid");  // bordo rosso textbox
		_email.prev().removeClass("icona-rossa");  // colore icona				
        _password.removeClass("is-invalid");
		_password.prev().removeClass("icona-rossa"); 
		_nome.removeClass("is-invalid");
		_nome.prev().removeClass("icona-rossa");
		_indirizzo.removeClass("is-invalid");  // bordo rosso textbox
		_indirizzo.prev().removeClass("icona-rossa");  // colore icona				
        _carta.removeClass("is-invalid");
		_carta.prev().removeClass("icona-rossa"); 
		console.log(_password);

		if (_email.val() == "") {
            _email.addClass("is-invalid"); // bordo rosso textbox
			_email.prev().addClass("icona-rossa"); // colore icona
        } 
		else if (_password.val() == "") {
            _password.addClass("is-invalid"); // bordo rosso textbox
			_password.prev().addClass("icona-rossa"); // colore icona
		}
		else if (_nome.val() == "") {
            _nome.addClass("is-invalid"); // bordo rosso textbox
			_nome.prev().addClass("icona-rossa"); // colore icona
        } 
		else if (_indirizzo.val() == "") {
            _indirizzo.addClass("is-invalid"); // bordo rosso textbox
			_indirizzo.prev().addClass("icona-rossa"); // colore icona
		}
		else if(_carta.val()==""){
			_carta.addClass("is-invalid");
			_carta.prev().addClass("icona-rossa");
		}
		else{
			let mail=_email.val();
			// md5 restituisce una word esadecimale, quindi è obbligatorio .toString()
			let pass=CryptoJS.MD5(_password.val()).toString();
			let nome=_nome.val();
			let ind=_indirizzo.val();
			let carta=_carta.val();

			let _richiestaRegistrazione= inviaRichiesta("POST", "../server/registra.php", { "email":mail, "password":pass, "nome":nome, "indirizzo":ind, "carta":carta } );
			_richiestaRegistrazione.fail(function(jqXHR, test_status, str_error) {
				if (jqXHR.status == 401) { // unauthorized
					_lblErrore.show();
				} else
					error(jqXHR, test_status, str_error)
			});
			_richiestaRegistrazione.done(function(data) {

				let _richiestaLogin= inviaRichiesta("POST", "../server/login.php", { "email":mail, "password":pass } );
				_richiestaLogin.fail(function(jqXHR, test_status, str_error) {
				if (jqXHR.status == 401) { // unauthorized
					_lblErrore.show();
				} else
					error(jqXHR, test_status, str_error)
			});
				_richiestaLogin.done(function(data) {
				$(".jumbotron").trigger("click");
				_jumbo.off("click");
				_lblErrore.hide();
				$("#formAccessoFatto").show();
				console.log(data);
				$("h4").text(data["nome"]);
			});		
			});
		}
	}

	function CaricaItem(){
		_nome.removeClass("is-invalid");  // bordo rosso textbox
		_nome.prev().removeClass("icona-rossa");  // colore icona				
        _desc.removeClass("is-invalid");
		_desc.prev().removeClass("icona-rossa"); 
		_img.removeClass("is-invalid");
		_img.prev().removeClass("icona-rossa");
		_vend.removeClass("is-invalid");  // bordo rosso textbox
		_vend.prev().removeClass("icona-rossa");  // colore icona				
        _stato.removeClass("is-invalid");
		_stato.prev().removeClass("icona-rossa"); 
		_qt.removeClass("is-invalid");
		_qt.prev().removeClass("icona-rossa"); 
		_prezzo.removeClass("is-invalid");
		_prezzo.prev().removeClass("icona-rossa"); 

		if (_desc.val() == "") {
            _desc.addClass("is-invalid"); // bordo rosso textbox
			_desc.prev().addClass("icona-rossa"); // colore icona
        } 
		else if (_img.val() == "") {
            _img.addClass("is-invalid"); // bordo rosso textbox
			_img.prev().addClass("icona-rossa"); // colore icona
		}
		else if (_nome.val() == "") {
            _nome.addClass("is-invalid"); // bordo rosso textbox
			_nome.prev().addClass("icona-rossa"); // colore icona
        } 
		else if (_vend.val() == "") {
            _vend.addClass("is-invalid"); // bordo rosso textbox
			_vend.prev().addClass("icona-rossa"); // colore icona
		}
		else if(_stato.val()==""){
			_stato.addClass("is-invalid");
			_stato.prev().addClass("icona-rossa");
		}
		else if(_qt.val()==""){
			_qt.addClass("is-invalid");
			_qt.prev().addClass("icona-rossa");
		}
		else if(_prezzo.val()==""){
			_prezzo.addClass("is-invalid");
			_prezzo.prev().addClass("icona-rossa");
		}
		else{
			let desc=_desc.val();
			let nome=_nome.val();
			let img=_img.val();
			let qt=_qt.val();
			let stato=_stato.val();
			let vend=_vend.val();
			let prezzo=_prezzo.val();

			let _aggiungiItem= inviaRichiesta("POST", "../server/aggiungiItem.php", { "desc":desc, "img":img, "nome":nome, "vend":vend, "qt":qt, "stato":stato, "prezzo":prezzo } );
			_aggiungiItem.fail(function(jqXHR, test_status, str_error) {
				if (jqXHR.status == 401) { // unauthorized
					_lblErrore.show();
				} else
					error(jqXHR, test_status, str_error);
			});		
			location.href="login.html";
		}
	}

	_lblErrore.children("button").on("click", function(){
		_lblErrore.hide();
	})
});