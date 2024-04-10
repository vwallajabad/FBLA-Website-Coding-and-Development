function addTextOnScroll(event) {
  var rightDiv = document.querySelector(".right");
  var scrollTop =
    window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
  var scrollHeight = rightDiv.scrollHeight;
  var clientHeight = rightDiv.clientHeight;

  var scrollDistance = Math.abs(scrollTop - lastScrollTop);

  if (scrollDistance >= 10) {
    if (textIndexCounter < additionalText.length) {
      rightDiv.insertAdjacentHTML(
        "beforeend",
        additionalText[textIndexCounter]
      );
      textIndexCounter++;
    }
    if (textIndexCounter == additionalText.length) {
      document.getElementById("scroll-arrow").style.opacity = "0";
    }
  }
  var totalScrollableHeight = document.body.scrollHeight - window.innerHeight;

  if (scrollTop >= totalScrollableHeight - 100) {
    return;
  }

  lastScrollTop = scrollTop;
}

document.getElementById("destroy").remove();
var additionalText = [
  "At QuantaCore, we are at the forefront of shaping the future of quantum solutions and quantum computing.",

  "Committed to pioneering innovation in this rapidly evolving field, we leverage cutting-edge research and advanced quantum technologies to drive transformative change across industries.",

  "<br><br>Our team of quantum experts brings together a diverse range of talents, blending deep understanding of quantum principles with expertise in software development, hardware engineering, and computational physics.",

  "With a relentless pursuit of pushing the boundaries of what's possible, we're dedicated to delivering innovative quantum solutions that address complex challenges and unlock new possibilities for our clients.",

  "<br><br>From quantum computing algorithms to quantum cryptography and quantum sensing technologies, we offer a comprehensive suite of services tailored to meet the unique needs of businesses seeking to harness the power of quantum for competitive advantage.",

  "Whether it's optimizing computational processes, enhancing security protocols, or unlocking insights from massive datasets, QuantaCore is your trusted partner for navigating the quantum frontier.",

  "<br><br>We envision a future where quantum technology revolutionizes industries, drives scientific discovery, and transforms the way we solve the world's most pressing problems.",

  "Join us on this exciting journey as we continue to push the boundaries of what's possible with quantum computing and quantum solutions.",
];

var lastScrollTop = 0;
var textIndexCounter = 0;

if (window.innerWidth < 768) {
  var rightDiv = document.querySelector(".right");
  rightDiv.style.height = 'calc(100% - 145px)';
  for (i = 4; i < additionalText.length; i++) {
    rightDiv.insertAdjacentHTML("beforeend", additionalText[textIndexCounter]);
    textIndexCounter++;
  }
}

else{
  window.addEventListener("scroll", addTextOnScroll);
}