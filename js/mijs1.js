$(document).ready(function() {
	
	
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