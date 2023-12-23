(function(){

	var Latitude = -11.990238;
	var Longitude = -77.009619;

	, 
	$.ajax({
		type: 'GET',
		url : 'http://api.openweathermap.org/data/2.5/weather?lat='+ Latitude +'&lon=' + Longitude + "&units=metric&appid=9f50a805aa0089a1edd1829a5db029f0",
		dataType: 'jsonp'
	})
	.done(function( data ){
		
		console.log("Correcto!");

		console.log( data ); // Se imprime en consola la api


	})
	.fail(function(){
		console.log("Fallo!");
	})
	.always(function(){
		console.log("Completo!");
	});








})();