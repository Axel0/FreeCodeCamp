var temperature;
$("document").ready(function(){
   $(".up").html("<p> > Finding your position...</p>");
  
  $.getJSON("http://freegeoip.net/json/",function(data){
    localization(data.latitude, data.longitude, data.city, data.country_code);
        var wheaterLink="http://api.openweathermap.org/data/2.5/weather?lat="+data.latitude+"&lon=" + data.longitude +"&appid=cb86a66ad467425d1811fda9dd120a53";
    
    $.getJSON(wheaterLink, function(data){
      var description=data.weather[0].description;
      var id = data.weather[0].icon;
      temperature=data.main.temp;
      temperatureC=(temperature-273.15).toFixed(2);
      temperatureF=((temperature*(9/5))-459.67).toFixed(2);
     
      var image="http://openweathermap.org/img/w/" + id + ".png";
      $(".middle").html("<h2>"+ description.toUpperCase() + "</h2>"+"<img src="+"'" + image +"'"+"/>" + "<br>" + "<p class='temperatureK'>" + temperature + " K </p>" + "<p class='temperatureC'>"+temperatureC +"°C </p>" + "<p class='temperatureF'>"+temperatureF +" F </p>" );
      $(".temperatureC").hide();
      $(".temperatureF").hide();
      
      });
      
  });
  
  var localization=function(latitude,longitude, city,country){
    var position="> Position Found: Latitude: " + latitude + ", Longitude: " + longitude + " near " + city + ", " + country ;
      $(".up").text(position);


  };

});

var convert=function(mode){
  if (mode=="Celsius"){
    $(".C").removeClass("btn-info").addClass("btn-danger");
    $(".F").removeClass("btn-danger").addClass("btn-info");
    $(".temperatureF").hide();
    $(".temperatureC").show();
    
  }
  else {
    $(".C").removeClass("btn-danger").addClass("btn-info");
    $(".F").removeClass("btn-info").addClass("btn-danger");
    $(".temperatureC").hide();
    $(".temperatureF").show();
  }
};