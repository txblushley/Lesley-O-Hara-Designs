const back = document.getElementById("back");
const forward = document.getElementById("forward");
const schoolImage = document.getElementById("schoolImage");
const schoolName = document.getElementById("schoolName");

const schools_engaged = [
  { src: "potters.png", name: "Potters C of E Primary School" },
  { src: "st polycarps.png", name: "St Polycarps Catholic Primary School"},
  { src: "st peters.png"},
  { src: "andrews.jpg", name: "St Andrews C of E Infant school"},
  { src: "frensham.jpg", name: "Frensham Heights"}
];

let currentIndex = 0;

function changeSchool(newIndex) {
  // fade out
  schoolImage.style.opacity = 0;

  setTimeout(() => {
    currentIndex = newIndex;
    schoolImage.src = schools_engaged[currentIndex].src;
    schoolName.textContent = schools_engaged[currentIndex].name;

    // fade back in
    schoolImage.style.opacity = 1;
  }, 300); // matches CSS transition
}

forward.onclick = function () {
  let nextIndex = currentIndex + 1;
  if (nextIndex >= schools_engaged.length) nextIndex = 0;
  changeSchool(nextIndex);
};

back.onclick = function () {
  let prevIndex = currentIndex - 1;
  if (prevIndex < 0) prevIndex = schools_engaged.length - 1;
  changeSchool(prevIndex);
};

const questions = document.querySelectorAll('.faq-question');

  questions.forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;
      answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
    });
  });


/////////////////////////////////////////////////////////////////


const btn = document.getElementById("scrollTopBtn");

window.onscroll = function() {
  // We check both ways of measuring scroll to be safe
  let scrollPos = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPos > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};
