var targetLatLng = [41.9115, -87.6315];
    var userMarker = null;
    var map = L.map('map').setView(targetLatLng, 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    }).addTo(map);

    // allowes user to place a marker
    map.on('click', function (e) {
      if (userMarker) {
        map.removeLayer(userMarker);
      }
      userMarker = L.marker(e.latlng).addTo(map);
      userMarker.userLatLng = e.latlng;
    });

    // handle form submission
    document.getElementById('guess-form').addEventListener('submit', function (e) {
      e.preventDefault();
      if (!userMarker || !userMarker.userLatLng) {
        document.getElementById('result').textContent = 'Please place a marker on the map!';
        return;
      }

      var userLat = userMarker.userLatLng.lat;
      var userLng = userMarker.userLatLng.lng;
      var distanceKm = getDistanceFromLatLonInKm(userLat, userLng, targetLatLng[0], targetLatLng[1]);
      var distanceMeters = distanceKm * 1000;


      // Select the container
      var resultContainer = document.querySelector('#result-container');
      // Select the container
      var resultText = document.querySelector('#result');

      // Change border color based on distance
      if (distanceMeters < 500 && distanceMeters > 20) {
        resultContainer.style.border = '4px solid #00c853';
        resultContainer.style.boxShadow = '0 0 15px #00c85377';
        resultText.textContent = 'YES! Your marker is ' + distanceMeters.toFixed(0) + ' meters from the target location.';
        add_button();
      } else if (distanceMeters < 20) {
        resultContainer.style.border = '4px solid #2962ff';
        resultContainer.style.boxShadow = '0 0 15px #2962ff77';
        resultText.textContent = 'Incredible! You found the exact location!';
        add_button();

      } else {
        resultContainer.style.border = '4px solid #c62828';
        resultContainer.style.boxShadow = '0 0 15px #c6282877';
        resultText.textContent = 'No! Your marker is ' + distanceMeters.toFixed(0) + ' meters from the target location. Try again...';
      }

    });

    function add_button() {
      // ✅ Add a "Next" button if it is not already present
      if (!document.getElementById('next-button')) {
        const nextButton = document.createElement('a');
        nextButton.id = 'next-button';
        nextButton.className = 'btn btn-warning shadow-sm';
        nextButton.href = 'point1_guessing_game.html';
        nextButton.textContent = 'Next Challenge';

        result.appendChild(nextButton);
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