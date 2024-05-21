updateBG = () => {
  // console.log(document.querySelector("body").style.backgroundColor);
  const x = document.querySelector("body").style.backgroundColor;
  document.querySelector("body").style.backgroundColor = (x === "azure") ? "lightgoldenrodyellow" : "azure";
}

updateOleksandrBG = () => {
  // console.log(document.querySelector("body").style.backgroundColor);
  const x = document.getElementById("oleksandrBlock").style.backgroundColor;
  document.getElementById("oleksandrBlock").style.backgroundColor = (x === "blue") ? "yellow" : "blue";
}

document.querySelector("#myBtn").addEventListener("click", updateBG);
document.querySelector("#oleksandrBtn").addEventListener("click", updateOleksandrBG);