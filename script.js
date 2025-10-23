
const BIERES = ["Stout", "IPA", "Blonde","Blanche","Pale Ale"];

let listeBieres = document.getElementById("nos-bieres");
BIERES.forEach((biere) => {
  let li = document.createElement("li");
  li.innerText = biere;
  listeBieres.appendChild(li);
});
