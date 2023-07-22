const btn = document.querySelector(".rgba");

btn.addEventListener("click", () => {
  const firstNum = Math.floor(Math.random() * 256);
  const secondNum = Math.floor(Math.random() * 256);
  const thirdNum = Math.floor(Math.random() * 256);
  const alphaNum = Math.floor(Math.random() * 10) + 1;
  const mainAlpha = Math.floor(Math.random() * 2);
  //   const totalValue = `${}`
  document.body.style.backgroundColor = `rgba(${firstNum},${secondNum},${thirdNum},${mainAlpha}.${alphaNum})`;

  console.log(mainAlpha, alphaNum);
});
