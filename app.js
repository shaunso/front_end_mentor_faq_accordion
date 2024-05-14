const faq1El = document.querySelector("#faq-1>.faq-header");
const faq2El = document.querySelector("#faq-2>.faq-header");
const faq3El = document.querySelector("#faq-3>.faq-header");
const faq4El = document.querySelector("#faq-4>.faq-header");

const text1EL = document.querySelector("#faq-1>.faq-answer");
const text2EL = document.querySelector("#faq-2>.faq-answer");
const text3EL = document.querySelector("#faq-3>.faq-answer");
const text4EL = document.querySelector("#faq-4>.faq-answer");

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

  text1EL.addEventListener("click", () => {
  document.querySelector("#faq-1>.faq-header>.icon").classList.remove("other");
  document.querySelector("#faq-1>.faq-answer").classList.remove("visible");
  })
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

  text2EL.addEventListener("click", () => {
  document.querySelector("#faq-2>.faq-header>.icon").classList.remove("other");
  document.querySelector("#faq-2>.faq-answer").classList.remove("visible");
})
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

  text3EL.addEventListener("click", () => {
  document.querySelector("#faq-3>.faq-header>.icon").classList.remove("other");
  document.querySelector("#faq-3>.faq-answer").classList.remove("visible");
  })
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

  text4EL.addEventListener("click", () => {
  document.querySelector("#faq-4>.faq-header>.icon").classList.remove("other");
  document.querySelector("#faq-4>.faq-answer").classList.remove("visible");
  })
})
