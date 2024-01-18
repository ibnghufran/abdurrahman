
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