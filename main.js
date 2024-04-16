const miqdar = document.querySelector("#gir");
const netice = document.querySelector("#cix");
const esas = document.querySelector("#girilen");
const cevrilen = document.querySelector("#cevrilen");
document.getElementById("cevir").addEventListener("click", exc);
document.getElementById("gir").addEventListener("change", exc);


function exc() {
  const esas_deyer = esas.options[esas.selectedIndex].textContent;
  const cevrilen_deyer = cevrilen.options[cevrilen.selectedIndex].textContent;
  fetch(`https://v6.exchangerate-api.com/v6/672ef393430a86e3402d1276/latest/${esas_deyer}`)
    .then((response) => response.json())
    .then((neticesi) => netice.value=(neticesi.conversion_rates[cevrilen_deyer]*miqdar.value).toFixed(4));
}


