$(document).ready(function() {

    /*function jumbotron(data){
      var htmlcode = '<div class= "jumbotron">' +
      '<div class= "container">' +
      '<h1>'+ data.heading +'</h1>' +
      '<p>'+ data.subheading +'</p>' +
      '</div>' +
    '</div>' ;
      $("#main").append(htmlcode)
    }
*/


var content = {
        "navbar": [
            {
                  "title": "BERLIN",
                  "url": "blogpage1.html"
            },
            {
                  "title": "MÜNSTER",
                  "url": "bp2.html"
            },
            {
                  "title": "HAMBURG",
                  "url": "bp3.html"
            },
            {
                  "title": "STUTTGART",
                  "url": "bp4.html"
            },
            {
                  "title": "BREMEN",
                  "url": "bp5.html"
            },
            {

                  "title": "HANNOVER",
                  "url": "bp6.html"
            }
     ] }



for(var i=0; i<content.navbar.length; i++){ 

      console.log (content.navbar[i].title+' | '+ content.navbar[i].url); 

      $("#mynav").append('<li class="nav-item"><a class="nav-link" href="'+content.navbar[i].url+'">'+ content.navbar[i].title +'</a></li>')
      }

const loadGoogleMapsApi = require('load-google-maps-api')
 
loadGoogleMapsApi().then(function (googleMaps) {
  new googleMaps.Map(document.querySelector('.map'), {
    center: {
      lat: 40.7484405,
      lng: -73.9944191
    },
    zoom: 12
  })
}).catch(function (error) {
  console.error(error)
})

 });


