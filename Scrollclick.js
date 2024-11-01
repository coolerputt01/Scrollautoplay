/* This code was writtem by Adekolu Olumide - enjoy please - sorry my code editor doesn't allow for emojis */

//Video element....
const video = document.querySelector('video');
//Initially set it to mute...
video.muted = true;

//Ensure it returns a fulfilled promise
video.play().catch((error) => {
  //Print error state
  console.log("Autoplay was prevented:", error);
});
//IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  //Loop to handle top and bottom of screen.
  entries.forEach((entry) => {
    //If isIntersecting the video should play
    if (entry.isIntersecting) {
      video.play();
      //But i also want the sound to be unmuted do set mute to false but that can only work if there is a user gesturr so i simulated a click user gesture , well nit all browsers might support this still to test on the rest of the browsers apart from chrome but sure to expect an update on that.
      video.dispatchEvent(new Event("click"));
      video.muted = false;
      
    } //Else dont play
    else {
      video.pause();
      }
  });
}, {
  //Defining a threshold mine here is 10% of the object.
  threshold: 0.1
});
//Call the observer class and observe method.
observer.observe(video);