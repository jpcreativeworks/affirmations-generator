function generateAffirmation(event) {
  event.preventDefault();
  //let affirmationQuote = document.querySelector("#yourAffirmation");
  new Typewriter("#yourAffirmation", {
    strings: [
      "I am on a journey of discovery, finding clarity with each step forward.",
    ],
    autoStart: true,
    cursor: "",
    loop: false,
    delay: 75,
  });
  affirmationQuote.innerHTML = "";
}

let affirmationForm = document.querySelector("#affirmation-form");
affirmationForm.addEventListener("submit", generateAffirmation);
