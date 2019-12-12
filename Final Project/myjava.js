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

// JavaScript code 
function search_place() { 
    let input = document.getElementsByClassName('form-control mr-sm-2').value 
    input=input.toLowerCase(); 
    let x = document.getElementsByClassName('nav-item'); 
      
    for (i = 0; i < x.length; i++) {  
        if (!x[i].innerHTML.toLowerCase().includes(input)) { 
            x[i].style.display="none"; 
        } 
        else { 
            x[i].style.display="title";                  
        } 
    } 
} 

 });


