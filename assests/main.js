
//COVER
document.getElementById('view-invitation').addEventListener('click', function() {
    const main = document.getElementById('main');
    main.style.display = 'block';
    main.scrollIntoView({ behavior: 'smooth'});
    playAudio();

    // document.getElementById("sound").innerHTML = "<audio autoplay loop preload='none' src='./src/Amin Paling Serius.m4a'></audio>";
  });  

//MUSIC
  const audioiconwrapper = document.querySelector("#disc");
  const song = document.querySelector("#song");
  const audioicon = document.querySelector(".audio-icon-wrapper i");
  let isPlaying = false;
  
  function playAudio() {
    song.volume = 0.5;
    song.play();
    audioiconwrapper.style.display = "flex";
    isPlaying = true;
  }
  
  audioiconwrapper.onclick = function () {
    if (isPlaying) {
      song.pause();
      audioicon.classList.remove("fa-compact-disc");
      audioicon.classList.add("fa-circle-pause");
    } else {
      song.play();
      audioicon.classList.add("fa-compact-disc");
      audioicon.classList.remove("fa-circle-pause");
    }
    isPlaying = !isPlaying;
  };
  
// CountDown
// CountDown with specific date
const countDownClock = (endDate) => {
  const d = document;
  const daysElement = d.querySelector('.days');
  const hoursElement = d.querySelector('.hours');
  const minutesElement = d.querySelector('.minutes');
  const secondsElement = d.querySelector('.seconds');
  let countdown;
  
  // Parse endDate
  const targetDate = new Date(endDate).getTime();

  function timer() {
    countdown = setInterval(() => {
      const now = Date.now();
      const secondsLeft = Math.round((targetDate - now) / 1000);

      // Stop timer when countdown is over
      if (secondsLeft <= 0) {
        clearInterval(countdown);
        displayTimeLeft(0);
        return;
      }

      displayTimeLeft(secondsLeft);
    }, 1000);
  }

  function displayTimeLeft(seconds) {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    daysElement.textContent = days;
    hoursElement.textContent = hours < 10 ? `0${hours}` : hours;
    minutesElement.textContent = minutes < 10 ? `0${minutes}` : minutes;
    secondsElement.textContent = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
  }

  // Start the countdown
  timer();
};

/*
  Example usage: set your end date in the format 'YYYY-MM-DDTHH:MM:SS'
  Format: '2024-12-31T23:59:59' for countdown to Dec 31, 2024 at 11:59:59 PM.
  Make sure HTML elements with class 'days', 'hours', 'minutes', 'seconds' exist.
*/
countDownClock('2024-09-17T18:00:00');



  // Carousel
  let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  slides[slideIndex-1].style.display = "block";  

}




function copyText(text) {
  navigator.clipboard.writeText(text).then(function() {
      alert('Text disalin ke clipboard');
  }, function(err) {
      console.error('Gagal menyalin text: ', err);
  });
}

 // Submit RSVP and store in localStorage
 function submitRSVP() {
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const kehadiran = document.querySelector('input[name="kehadiran"]:checked').value;
  const menu = Array.from(document.querySelectorAll('input[name="menu"]:checked')).map(el => el.value).join(', ');
  const guests = document.getElementById('guests').value;
  const comments = document.getElementById('comments').value;

  const rsvpData = { name, phone, email, kehadiran, menu, guests, comments };

  let rsvpList = JSON.parse(localStorage.getItem('rsvpList')) || [];
  rsvpList.push(rsvpData);
  localStorage.setItem('rsvpList', JSON.stringify(rsvpList));

  displayRSVP();
}

// Display RSVP data in table
function displayRSVP() {
  const rsvpList = JSON.parse(localStorage.getItem('rsvpList')) || [];
  const rsvpTableBody = document.querySelector('#rsvpTable tbody');
  rsvpTableBody.innerHTML = '';

  rsvpList.forEach(rsvp => {
      const row = document.createElement('tr');
      row.innerHTML = `
          <td>${rsvp.name}</td>
          <td>${rsvp.phone}</td>
          <td>${rsvp.email}</td>
          <td>${rsvp.kehadiran}</td>
          <td>${rsvp.menu}</td>
          <td>${rsvp.guests}</td>
          <td>${rsvp.comments}</td>
      `;
      rsvpTableBody.appendChild(row);
  });
}

// // Clear RSVP data from localStorage and table
// function clearRSVP() {
//   // Remove data from localStorage
//   localStorage.removeItem('rsvpList');
  
//   // Clear the table on the page
//   const rsvpTableBody = document.querySelector('#rsvpTable tbody');
//   rsvpTableBody.innerHTML = '';
// }

// Submit Message and store in localStorage
function submitMessage() {
  const message = document.getElementById('message').value;

  let messageList = JSON.parse(localStorage.getItem('messageList')) || [];
  messageList.push(message);
  localStorage.setItem('messageList', JSON.stringify(messageList));

  displayMessages();
}

// Display Messages in list
function displayMessages() {
  const messageList = JSON.parse(localStorage.getItem('messageList')) || [];
  const messageListContainer = document.getElementById('messageList');
  messageListContainer.innerHTML = '';

  messageList.forEach(message => {
      const li = document.createElement('li');
      li.textContent = message;
      messageListContainer.appendChild(li);
  });
}

// Load stored data on page load
window.onload = function() {
  displayRSVP();
  displayMessages();
}