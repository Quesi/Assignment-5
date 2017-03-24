//i can't  get the google map images to show. i keep getting an error message so i had to comment all these codes out

/*function loadMap(direction){


    //var geoCoder = new google.maps.GeoCoder(direction);
  //  var request = {address:direction};

    //geoCoder.geocode(request, function(result, status) {
      //var coords = new google.maps.latLong(result[0].geometry.location.lat(), result[0]. geometry.location.lng());
      var Mylat = position.coords.latitude;
      var Mylat = position.coords.latitude;


      var coords = new google.maps.LatLng (Mylat, Mylong);

      var options = {
        zoom: 10,
        center: coords,
        mapTypeId: google.maps.mapTypeId.ROADMAP

      }

      var map = new google.maps.Map(document.getElemntById("map"), options);


};
*/

$(document).on("click", function () {
//loadMap("UK")
  $("#search").click(function () {

    // loadMap($("direction").val());

      var dir = $("direction").val();
                      //
      var GoogleAPI = "http://maps.google.com/maps/api/geocode/json?address=regina%%2018&sensor=false"

      $.getJSON(GoogleAPI, function (jsonResponse) {
        for(i = 0; i <jsonResponse.results.length; i++){
            answer = jsonResponse.results[i];
            console.log(answer.address_components);
                $("#long_name").html(answer.address_components[1].long_name);
              $("#coordinates").html(answer.formatted_address);
              $("#latitude").html(answer.geometry.location.lat);
              $("#longitude").html(answer.geometry.location.lng);
              $("#map").html()




        }

      });

  });
});
