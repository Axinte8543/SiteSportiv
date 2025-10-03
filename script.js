//Modificari si interogari ale elementelor DOM
var header = document.querySelector('header');
header.style.backgroundColor = 'yellow';

var sportmav = document.getElementsByClassName('sportmav');
for (var i = 0; i < sportmav.length; i++) {
    sportmav[i].style.height = '200px';
}

var rightSection = document.getElementById('right-section');
rightSection.style.justifyContent = 'space-between';

var listItems = document.getElementsByTagName('li');
for (var i = 0; i < listItems.length; i++) {
    listItems[i].style.marginLeft = '10px';
}

var paragraphs = document.querySelectorAll('p');
for (var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = 'black';
}

//Crearea unui elemnent nou si inserarea lui in DOM
var copyrightParagraph = document.createElement('p');
copyrightParagraph.innerHTML = '&copy; Sportmav';
var bodyElement = document.querySelector('body');
bodyElement.appendChild(copyrightParagraph);

//Stergerea unui element din DOM
var newElement = document.createElement('li');
newElement.textContent = 'Acesta este un element nou';
var rightSection = document.querySelector('#right-section');
rightSection.appendChild(newElement);
rightSection.removeChild(newElement);

//SetInterval si LocalStorage
var facebookElement = document.querySelector('.facebook');
var instagramElement = document.querySelector('.instagram');

var counter = Number(localStorage.getItem('counter')) || 0;

function cleanup() {
    facebookElement.style.height = '30px'; 
    facebookElement.style.transform = 'translateX(0) rotate(0)';
    instagramElement.style.height = '30px';
    instagramElement.style.transform = 'translateX(0) rotate(0)';
    //il face cum era initial
    localStorage.removeItem('counter'); //sterge counter din localstorage
  }
var intervalId = setInterval(function() {
    if (window.matchMedia('(max-width: 980px)').matches) {
        cleanup();
        clearInterval(intervalId); // opreste intervalul
        return;
    }

    counter += 1;

    if (counter <= 20) {
        facebookElement.style.height = '30px';
        facebookElement.style.transform = 'translateX(0) rotate(0)';
        instagramElement.style.height = '30px';
        instagramElement.style.transform = 'translateX(0) rotate(0)';
    } else if (counter <= 50) {
        facebookElement.style.height = '40px';
        facebookElement.style.transform = 'translateX(20px) rotate(90deg)';
        instagramElement.style.height = '40px';
        instagramElement.style.transform = 'translateX(20px) rotate(90deg)';
    } else if (counter <= 70) {
        facebookElement.style.height = '50px';
        facebookElement.style.transform = 'translateX(40px) rotate(180deg)';
        instagramElement.style.height = '50px';
        instagramElement.style.transform = 'translateX(40px) rotate(180deg)';
    } else {
        facebookElement.style.height = '30px';
        facebookElement.style.transform = 'translateX(0) rotate(0)';
        instagramElement.style.height = '30px';
        instagramElement.style.transform = 'translateX(0) rotate(0)';
    }

    if (counter >= 100) {
        counter = 0;
    }
    localStorage.setItem('counter', counter);
}, 100); // intervalul
//AddEventListener
var sportmav = document.querySelector('.sportmav');
sportmav.addEventListener('mouseover', function() {
  sportmav.style.opacity = '0.7';
  sportmav.style.transition = 'opacity 2s';
});

sportmav.addEventListener('mouseout', function() {
  sportmav.style.opacity = '1';
});

sportmav.addEventListener('mousedown', function() {
  sportmav.style.opacity = '0.5';
});

sportmav.addEventListener('mouseup', function() {
  sportmav.style.opacity = '1';
});

//Creare formular
var form = document.getElementById('myForm');

if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault(); //opreste comportamentul browserului de a reîncărca pagina
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var comment = document.getElementById('comment').value;
    
      console.log(name + ' (' + email + '): ' + comment); 
      var formData = {
          name: name,
          email: email,
          comment: comment
        }; 
  
        var existingData = JSON.parse(localStorage.getItem('formData'));

        if (!Array.isArray(existingData)) {
          existingData = [];
        }
        
        existingData.push(formData);
        
        localStorage.setItem('formData', JSON.stringify(existingData));
  
      form.reset();
    });
  }

//random number
window.onload = function() {
    var colors = ['red', 'orange', 'green', 'blue', 'indigo', 'violet'];
    var randomIndex = Math.floor(Math.random() * colors.length);
    var links = document.querySelectorAll('li a');
    
    for (var i = 0; i < links.length; i++) {
      links[i].style.color = colors[randomIndex];
    }
  };
