function sayAffirmation(response) {
  console.log("enjoy your affirmation: ", response.data.answer);
  let affirmationQuote = document.querySelector("#yourAffirmation");
  affirmationQuote.innerHTML = "";
  new Typewriter("#yourAffirmation", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    loop: false,
    delay: 75,
  });
}

function generateAffirmation(event) {
  event.preventDefault();

  let apiKey = "7fd5430a29oa8949b4d239de06t9a3d4";
  let iAmInput = document.querySelector(".iAmInput");

  if (!iAmInput || iAmInput.value.trim() === "") {
    console.error("Input field not found or empty!");
    return;
  }
  let userInput = iAmInput.value.trim();

  let prompt = `Reframe ${userInput} into a positive, empowering 'I Am' affirmation that promotes confidence, self-growth, and encouragement. If the input is already positive, enhance it with additional strength and depth. If it is negative, transform it into an uplifting and constructive message.`;
  let context =
    "This affirmation generator is designed to help individuals replace self-doubt with self-belief.The response should start with 'I am ', be short, impactful, and emotionally affirming.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("writing affirmation");

  axios.get(apiUrl).then(sayAffirmation);
}

let affirmationForm = document.querySelector("#affirmation-form");
affirmationForm.addEventListener("submit", generateAffirmation);
