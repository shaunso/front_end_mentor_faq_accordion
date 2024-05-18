// using query selectors to select each question
const faq1El = document.querySelector("#faq-1>.faq-header");
const faq2El = document.querySelector("#faq-2>.faq-header");
const faq3El = document.querySelector("#faq-3>.faq-header");
const faq4El = document.querySelector("#faq-4>.faq-header");

// setting the default state of the page as per the challenge
document.querySelector("#faq-1").classList.add("expand");
document.querySelector("#faq-1>.faq-header>.icon").classList.add("other");
document.querySelector("#faq-1>.faq-answer").classList.add("visible");

// adding an event to each query selector that expands and collapses each question the user clicks on it
faq1El.addEventListener("click", () => {
  document.querySelector("#faq-1").classList.toggle("expand");
  document.querySelector("#faq-1>.faq-header>.icon").classList.toggle("other");
  document.querySelector("#faq-1>.faq-answer").classList.toggle("visible");
    
  document.querySelector("#faq-2>.faq-header>.icon").classList.remove("other");
  document.querySelector("#faq-2>.faq-answer").classList.remove("visible");
  document.querySelector("#faq-3>.faq-header>.icon").classList.remove("other");
  document.querySelector("#faq-3>.faq-answer").classList.remove("visible");
  document.querySelector("#faq-4>.faq-header>.icon").classList.remove("other");
  document.querySelector("#faq-4>.faq-answer").classList.remove("visible");
})

faq2El.addEventListener("click", () => {
  document.querySelectorAll(".faq");
  document.querySelector("#faq-2").classList.toggle("expand");
  document.querySelector("#faq-2>.faq-header>.icon").classList.toggle("other");
  document.querySelector("#faq-2>.faq-answer").classList.toggle("visible");
    
  document.querySelector("#faq-1>.faq-header>.icon").classList.remove("other");
  document.querySelector("#faq-1>.faq-answer").classList.remove("visible");
  document.querySelector("#faq-3>.faq-header>.icon").classList.remove("other");
  document.querySelector("#faq-3>.faq-answer").classList.remove("visible");
  document.querySelector("#faq-4>.faq-header>.icon").classList.remove("other");
  document.querySelector("#faq-4>.faq-answer").classList.remove("visible");
})

faq3El.addEventListener("click", () => {
  document.querySelector("#faq-3").classList.toggle("expand");
  document.querySelector("#faq-3>.faq-header>.icon").classList.toggle("other");
  document.querySelector("#faq-3>.faq-answer").classList.toggle("visible");
    
  document.querySelector("#faq-1>.faq-header>.icon").classList.remove("other");
  document.querySelector("#faq-1>.faq-answer").classList.remove("visible");
  document.querySelector("#faq-2>.faq-header>.icon").classList.remove("other");
  document.querySelector("#faq-2>.faq-answer").classList.remove("visible");
  document.querySelector("#faq-4>.faq-header>.icon").classList.remove("other");
  document.querySelector("#faq-4>.faq-answer").classList.remove("visible");
})

faq4El.addEventListener("click", () => {
  document.querySelector("#faq-4").classList.toggle("expand");
  document.querySelector("#faq-4>.faq-header>.icon").classList.toggle("other");
  document.querySelector("#faq-4>.faq-answer").classList.toggle("visible");
  
  document.querySelector("#faq-1>.faq-header>.icon").classList.remove("other");
  document.querySelector("#faq-1>.faq-answer").classList.remove("visible");
  document.querySelector("#faq-2>.faq-header>.icon").classList.remove("other");
  document.querySelector("#faq-2>.faq-answer").classList.remove("visible");
  document.querySelector("#faq-3>.faq-header>.icon").classList.remove("other");
  document.querySelector("#faq-3>.faq-answer").classList.remove("visible");
})