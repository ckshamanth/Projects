const getlocation = () => {
    // Get the location from the user
    if (navigator.permissions && navigator.permissions.query) {
        navigator.permissions.query({ name: 'geolocation' }).then(permissionStatus => {
          if (permissionStatus.state === 'granted') {
            // Permission already granted, get location
            navigator.geolocation.getCurrentPosition(showPosition, showError);
          } else if (permissionStatus.state === 'prompt') {
            // Permission not granted, ask for permission
            navigator.geolocation.getCurrentPosition(showPosition, showError);
          } else {
            // Permission denied or unknown, show error message
            alert('Location permission denied or unknown.');
          }
        });
      } else if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let long = position.coords.longitude;
            const des = document.querySelector("p");
            des.innerHTML = "Latitude:" + lat + "   Longitude:" + long;
            // Redirect to hotel-grid.html
            setTimeout(() => {
                window.location.href = "/All Pages/hotel-grid.html";
            }, 2000);
        }, showError);
    } 
    else {
        alert("Geolocation is not supported by this browser.");
    }
  };
  