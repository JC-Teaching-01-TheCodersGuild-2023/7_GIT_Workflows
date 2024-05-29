updateBG = () => {
  // console.log(document.querySelector("body").style.backgroundColor);
  const x = document.querySelector("body").style.backgroundColor;
  document.querySelector("body").style.backgroundColor =
<<<<<<< jen-branch
    x === "azure" ? "aliceblue" : "azure";
=======
    x === "azure" ? "firebrick" : "azure";
>>>>>>> main
};

document.querySelector("#myBtn").addEventListener("click", updateBG);
