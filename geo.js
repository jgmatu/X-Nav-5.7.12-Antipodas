window.onload = function() {
      get_location();
};

var show_map = function (position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;

      var mapDiv = document.getElementById("map");
      var map = new google.maps.Map(mapDiv, {
            center: {lat: latitude, lng: longitude},
            zoom: 5
      });

      var mapAnti = document.getElementById("anti");
      var map = new google.maps.Map(mapAnti, {
            center: {lat: parseFloat(latitude) * (-1), lng: parseFloat(longitude) + 180},
            zoom: 5
      })
}

var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
};

var error = function (err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
};

var get_location = function () {
      if (Modernizr.geolocation) {
            navigator.geolocation.getCurrentPosition(show_map, error, options);
      } else {
            alert('not supported');
      }
}
