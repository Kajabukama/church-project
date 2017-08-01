$(function () {
  // Google maps
  var mapLocation = new google.maps.LatLng(-6.7633009,39.2421473);

  var map = new GMaps({
    streetViewControl : false,
    overviewMapControl: false,
    mapTypeControl: false,
    panControl : true,
    scrollwheel: true,
    center: mapLocation,
    el: '#map',
    zoom: 13
  });

  map.addMarker({
    position: mapLocation,
    icon: 'images/marker.png'
  });

});
