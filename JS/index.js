const hex = document.querySelector(".generate");
const number = document.querySelector(".rand");

const rgb = document.querySelector(".rgba");

hex.addEventListener("click", () => {
  const randomNumber = Math.floor(100000 + Math.random() * 900000);
  document.body.style.backgroundColor = `#${randomNumber}`;
  number.textContent = `#${randomNumber}`;
});

// console.log(rgb);
