$(document).ready(function() {
	
	//var posicion = email.indexOf("@");

	/*$("img").width(340).height(320).click(function(){
		$(this).animate({

			marginLeft:"150px",
			width:"300px",
			height:"200px"


		},2000).delay(4000);//termina animate

		$(this).animate({

			marginLeft:"0px",
			width:"60px",
			height:"40px"

		},2000);
	});//termina la funcion click*/
	
	/*$("#nombre").focus(function(){
			var campo_nombre=$(this);
			
			if(campo_nombre.val()==campo_nombre.attr("value")){
				
				campo_nombre.val("");
			}
		});
		
		
	$("#form_datos").submit(function(){
			
		
			if($("#nombre").val()==""||$("#nombre").val()=="Obligatorio nombre"){
			
				alert("Llenar nombre");
				
				$("#nombre").focus();
				return false;
			}
			
			
			if($("#email").val()==""||$("#email").val()=="Obligatorio email"){
				
				alert("Llenar email");
				$("#email").focus();
				return false;
				
			}
				
				
			
		
			
		
			/*if(posicion == -1){
				alert("Email invalido sin @");
			}else{
				if(email.length < 7){
				alert("Email invalido");
				} 
			}*/
			
		/*$("#email").blur(function(){
			
		var correo=$(this).val();
		var posicion = correo.indexOf("@");
			
			if(posicion==-1){
					alert("Email invalido sin @");
				
				//return false;
				$(this).focus();
				$("#email").focus();
				//$(this).val("bubu");
				
				
				
				
				}
		
		});*/
		
		
		
		/*$("#email").blur(function(){
			
			var postal=$(this).val();
			
			if(isNaN(postal)){
				
				alert("por favor introduce un valor numerico");
				$(this).focus();
				$(this).val("");
			}
		
		});*/
		
		
		
		
		$("#nombre").focus(function(){
			var campo_nombre=$(this);
			
			if(campo_nombre.val()==campo_nombre.attr("value")){
				
				campo_nombre.val("");
			}
		});
		
		
	$("#form_datos").submit(function(){
			if($("#nombre").val()==""||$("#nombre").val()=="Obligatorio nombre"){
			
				alert("Llenar nombre");
				
				$("#nombre").focus();
				
				return false;
			
			}
		
		});
		
		
		$("#c_postal").blur(function(){
			
			var postal=$(this).val();
			
			if(isNaN(postal)){
				
				alert("por favor introduce un valor numerico");
				$(this).focus();
				$(this).val("");
			}
		
		});
		
		var miArray=new Array();
		var i=0;
		
		
		$(":checkbox").click(function(){
		
			miArray[i]=$(this).val();
			
			//alert("Posicion "+i+" "+miArray[i]);
			
			$("#las_aficiones").append(miArray[i]).append("<br>");
			
			i++;
		
		});
		
		
		$("#pais").change(function(){
		
	
			
			alert($(this).val());
			
			
		
		});
	
		$("#paypal").click(function(){
			$("#email").attr("disable",false).focus();
			$("#tarjeta").attr("disable",true);
			$("#fecha_tarjeta").attr("disable",true);
		});
		
		$("#visa"). click(function(){
			
			$("#tarjeta").attr("disable",false).focus();
			$("#fecha_tarjeta").attr("disable",false);
			$("email").attr("disable",true);
		
		});
		
		
		
		
			
			
		
		});
		
		
		
		
		
		
		
		/*$("#c_postal").blur(function(){
			
			var postal=$(this).val();
			
			if(isNaN(postal)){
				
				alert("por favor introduce un valor numerico");
				$(this).focus();
				$(this).val("");
			}
		
		});
		
		var miArray=new Array();
		var i=0;
		
		
		$(":checkbox").click(function(){
		
			miArray[i]=$(this).val();
			
			//alert("Posicion "+i+" "+miArray[i]);
			
			$("#las_aficiones").append(miArray[i]).append("<br>");
			
			i++;
		
		});
		
		
		$("#pais").change(function(){
		
	
			
			alert($(this).val());
			
			
		
		});
	
		$("#paypal").click(function(){
			$("#email").attr("disable",false).focus();
			$("#tarjeta").attr("disable",true);
			$("#fecha_tarjeta").attr("disable",true);
		});
		
		$("#visa"). click(function(){
			
			$("#tarjeta").attr("disable",false).focus();
			$("#fecha_tarjeta").attr("disable",false);
			$("email").attr("disable",true);
		
		});*/
	
	
	




