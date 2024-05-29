updateBG = () => {
  // console.log(document.querySelector("body").style.backgroundColor);
  const x = document.querySelector("body").style.backgroundColor;
  document.querySelector("body").style.backgroundColor =
    x === "azure" ? "aliceblue" : "azure";
};

document.querySelector("#myBtn").addEventListener("click", updateBG);
