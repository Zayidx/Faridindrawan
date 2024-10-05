
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
countDownClock('2028-11-13T00:00:00');





function copyText(text) {
  navigator.clipboard.writeText(text).then(function() {
      alert('Text disalin ke clipboard');
  }, function(err) {
      console.error('Gagal menyalin text: ', err);
  });
}