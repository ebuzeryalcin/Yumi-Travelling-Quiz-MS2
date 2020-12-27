// Google maps function
function initMap() {

    // Locations that will show depending on score
    const naturalLocation = [
        { lat: 60.12527813932983, lng: 6.739055862441921 }, //norway
        { lat: 64.15262991930668, lng: -21.98721641662982 }, // iceland
        { lat: 66.56348882605869, lng: 25.707489226325695 }, // Finland
    ]

    const cityLocation = [
        { lat: 41.00675900234117, lng: 28.97895254012631 }, // turkey
        { lat: 41.902782, lng: 12.496366 }, // italy
        { lat: 51.516168365645285, lng: -0.12975831845500385 }, // England
    ]

    //Location function, Stackoverflow.com
    function getLocation() {
        var url_string = window.location.href
        var url = new URL(url_string);
        var score = url.searchParams.get("score");
        //Location will be given depending on score
        if (score >= 7 && score <= 13) {
            return naturalLocation
        }

        if (score >= 15 && score <= 21) {
            return cityLocation
        }
    }

    //Google map with center location
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 2.9,
        center: { lat: 57.0000, lng: 9.0000 }

    });
    // Label of markers
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    //function to get locations
    const markers = getLocation().map(function (location, i) {
        console.log(getLocation)
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    //Marker clusterer
    new MarkerClusterer(map, markers, {
        imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
}

// 11-) Recommendation function
function recommendation() {
    var url_string = window.location.href
    var url = new URL(url_string);
    var score = url.searchParams.get("score")

    // Recommendation will be given depending on score
     if (score >= 7 && score <= 13) {
         var result = "Your latest Score = " + score + '<br>' + "You're a Nature lover! "
        return result
    }

    if (score >= 15 && score <= 21) {
        var result = "Your latest Score = " + score + '<br>' + "You're a City lover!  "
        return result
    }
}

// 14-) Image function
function getImage() {
    var url_string = window.location.href
    var url = new URL(url_string);
    var score = url.searchParams.get("score")
    var resim;

        //Recommendation will be given depending on score
        if (score >= 7 && score <= 13) {
          
            resim = "assets/images/doga1.jpg"
        }



}