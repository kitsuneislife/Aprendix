function switchNav () {
  const container = document.getElementById("nav-container");
  if(container.style.display == "none") {
    container.style.display = "flex" 
  } else {
    container.style.display = "none";
  }
}