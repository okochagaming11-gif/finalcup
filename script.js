/* ==========================================================
   OKO-CHA WEBSITE SCRIPT 🎮
   Functions: Discord Button, Contact Form, Prediction Form
   ========================================================== */

/* -----------------------------
   1️⃣ Discord Button
   Marka user-ku gujiyo "Join Discord"
------------------------------- */
document.getElementById("discordBtn").addEventListener("click", () => {
  const inviteLink = "https://discord.gg/s3MeCSku";
  window.open(inviteLink, "_blank");
});

/* -----------------------------
   2️⃣ Contact Form Submission
   Pop-up fariin kadib markii la diro
------------------------------- */
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("📩 Fariintaada waa la diray! ✅ Mahadsanid xiriirkaaga 🤝");

  // Dib u nadiifi foomka
  e.target.reset();
});

/* -----------------------------
   3️⃣ Prediction Form
   Saadaal ciyaarta finalka
------------------------------- */
document.getElementById("predictionForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const choice = document.querySelector('input[name="team"]:checked');
  const resultText = document.getElementById("predictionResult");

  if (!choice) {
    // Haddii aan koox la dooran
    resultText.textContent = "⚠️ Fadlan dooro koox si aad u saadaaliso!";
    resultText.style.color = "red";
  } else {
    // Haddii la doorto koox
    const team = choice.value;
    resultText.innerHTML = `🎯 Waad dooratay <strong>${team}</strong>!<br>Saadaashaada waa la diiwaangeliyay ✅`;
    resultText.style.color = "#004aad";

    // Optionally save to localStorage
    localStorage.setItem("userPrediction", team);
  }
});

/* -----------------------------
   4️⃣ Load Stored Prediction (optional)
   Si user uu u arko saadaashiisii hore
------------------------------- */
window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("userPrediction");
  const resultText = document.getElementById("predictionResult");
  if (saved) {
    resultText.innerHTML = `✅ Saadaashaadii hore: <strong>${saved}</strong>`;
    resultText.style.color = "#004aad";
  }
});
