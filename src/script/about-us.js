document.getElementById("destroy").remove();
var additionalText = [
  "At AgriAI, we're pioneering the future of agriculture through cutting-edge research and innovative AI solutions. ",

  "Committed to revolutionizing the farming industry, we harness the power of artificial intelligence to address pressing challenges and optimize agricultural practices nationwide.",

  "<br><br>Our multidisciplinary team of experts combines deep-rooted agricultural knowledge with advanced AI techniques to empower farmers with data-driven insights, predictive analytics, and precision farming technologies.",

  "From optimizing crop yields and resource utilization to mitigating environmental impacts, we're dedicated to enhancing productivity, sustainability, and resilience across the agricultural landscape.",

  "<br><br>At AgriAI, we envision a world where technology seamlessly integrates with tradition, fostering a thriving and sustainable agricultural ecosystem for generations to come."
];

var lastScrollTop = 0;
var textIndexCounter = 0;

if (window.innerWidth < 768) {
  var rightDiv = document.querySelector('.right');

  for(i = 0; i<additionalText.length; i++){
    rightDiv.insertAdjacentHTML('beforeend', additionalText[textIndexCounter]);
    textIndexCounter++;
  }
}

function addTextOnScroll(event) {
var rightDiv = document.querySelector('.right');
var scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
var scrollHeight = rightDiv.scrollHeight;
var clientHeight = rightDiv.clientHeight;

var scrollDistance = Math.abs(scrollTop - lastScrollTop);

if (scrollDistance >= 10) {
if (textIndexCounter < additionalText.length) {
  rightDiv.insertAdjacentHTML('beforeend', additionalText[textIndexCounter]);
  textIndexCounter++;
}
}

if (scrollTop < lastScrollTop) {
var paragraphs = rightDiv.querySelectorAll('p');
if (paragraphs.length > 0) {
  paragraphs[paragraphs.length - 1].remove();
  textIndexCounter--;
}
}

var totalScrollableHeight = document.body.scrollHeight - window.innerHeight;

if (scrollTop >= totalScrollableHeight - 100) {
return;
}

lastScrollTop = scrollTop;
}

window.addEventListener('scroll', function () {
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  var windowHeight = window.innerHeight;
  var bodyHeight = document.body.offsetHeight;

  if (scrollPosition + windowHeight >= bodyHeight) {
    document.getElementById('scroll-arrow').style.opacity = '0';
  } else {
    document.getElementById('scroll-arrow').style.opacity = '1';
  }
});
window.addEventListener('scroll', addTextOnScroll);
