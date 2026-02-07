function enter() {
  document.getElementById("age").style.display = "none";
  document.getElementById("app").style.display = "block";
}

async function generate() {
  const result = document.getElementById("result");
  result.innerHTML = "Generating...";

  const res = await fetch("/api/generate");
  const data = await res.json();

  if (data.image) {
    result.innerHTML = `<img src="${data.image}" width="100%">`;
  } else {
    result.innerHTML = "Error";
  }
}