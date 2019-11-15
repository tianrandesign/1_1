var animation = lottie.loadAnimation({
  container: document.getElementById("lottie"),
  renderer: "svg",
  loop: true,
  autoplay: false,
  path: "Complexity_1.json"
	
});

document.getElementById('lottie').addEventListener('mouseover', function(){ animation.play(); })
document.getElementById('lottie').addEventListener('mouseleave', function(){ animation.stop(); });