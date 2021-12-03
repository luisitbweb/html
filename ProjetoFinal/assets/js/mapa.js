var map;
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
 
function initialize() {
   directionsDisplay = new google.maps.DirectionsRenderer(); // Instanciando...
   var latlng = new google.maps.LatLng(-23.5874156, -46.63351890000001);
 
   var options = {
      zoom: 15,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
   };

   map = new google.maps.Map(document.getElementById("rota_mapa"), options);
   directionsDisplay.setMap(map);
   directionsDisplay.setPanel(document.getElementById("trajeto_texto")); // Aqui faço a definição
}
 
initialize();
 
$("form").submit(function(event) {
   event.preventDefault();
 
   var enderecoPartida = $("#endereco_partida").val();
   if(enderecoPartida.length == 8 && isNaN(enderecoPartida) == false){
      var cep_ini = enderecoPartida.slice(0,5);
      var cep_fim = enderecoPartida.slice(5,8);
      var enderecoPartida = cep_ini+"-"+cep_fim;
   }
   var enderecoChegada = "Rua Vergueiro, 3057 - Vila Mariana, São Paulo - SP, 04101-300, Brazil";
 
   var request = { // Novo objeto google.maps.DirectionsRequest, contendo:
      origin: enderecoPartida, // origem
      destination: enderecoChegada, // destino
      travelMode: google.maps.TravelMode.DRIVING // meio de transporte, nesse caso, de carro
   };
 
   directionsService.route(request, function(result, status) {
      if (status == google.maps.DirectionsStatus.OK) { // Se deu tudo certo
         directionsDisplay.setDirections(result); // Renderizamos no mapa o resultado
         document.getElementById("trajeto_texto").style.display = "block";
      }else{
         alert('Rota não encontrada. \nTente um novo CEP ou Endereço.');
         initialize();
         document.getElementById("trajeto_texto").style.display = "none";
      }
   });
});