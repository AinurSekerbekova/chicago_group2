
// objects we gonna need
var resultContainer = document.querySelector('#result-container');
var resultText = document.querySelector('#speech-text');
var character_img = document.querySelector('#character-img');
var hint = document.querySelector('#hint');

function form_submitted(success_text,fail_text, result_narrator) {
    if (!userMarker || !userMarker.userLatLng) {
        document.getElementById('speech-text').textContent = 'Please pick a place on the map!';
        return;
    }
    var userLat = userMarker.userLatLng.lat;
    var userLng = userMarker.userLatLng.lng;
    var distanceKm = getDistanceFromLatLonInKm(userLat, userLng, targetLatLng[0], targetLatLng[1]);
    var distanceMeters = distanceKm * 1000;
    character_img.src = result_narrator;

    // Change border color based on distance
    if (distanceMeters < 200) {
      resultContainer.style.border = '4px solid #00c853';
      resultContainer.style.boxShadow = '0 0 15px #00c85377';
      resultText.textContent = success_text;
      document.getElementById('next-button').classList.remove('d-none');
    } else {
      resultContainer.style.border = '4px solid #c62828';
      resultContainer.style.boxShadow = '0 0 15px #c6282877';
      resultText.textContent = fail_text;
    }

    if (distanceMeters < 50) {
      hint.textContent = 'Your marker is in the exact point.';
    } else {
      hint.textContent = 'Your marker is ' + distanceMeters.toFixed(0) + ' meters from the exact point.';
    }
}

// Haversine formula to calculate distance between two lat/lon points
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  var R = 6371; // Радиус Земли в км
  var dLat = deg2rad(lat2 - lat1);
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}