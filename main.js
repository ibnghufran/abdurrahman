
// Typer for Skills
var typed = new Typed('.typer', {
    strings: ['a Video Editor.', 'Digital Creator', 'an Influencer.', 'a YouTuber.', 'a Designer.', 'a Video Editor.', 'an Animator.', 'a Developer.', 'Digital Marketer', 'a Video Editor.'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
  });

// Number Animator
let valueNumbers = document.querySelectorAll(".exp-number");
let interval = 1000;

valueNumbers.forEach((valueNumber)=>{
  let startValue = 0;
  let endValue = parseInt(valueNumber.getAttribute("data-val"));
  let duration = Math.floor(interval/endValue);
  let counter = setInterval(()=>{
    startValue+=1;
    valueNumber.textContent = startValue;
    if(startValue == endValue){
      clearInterval(counter);
    }
  }, duration)
});


// Scroll to Top
let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = Math.round((pos*100/calcHeight));
  if (pos>100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () =>{
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = 'conic-gradient (#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)';
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
