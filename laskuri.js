// Reseptiarray
const database = [
  {
   resepti: "Seitiä parmesaanikastikkeessa",
   kalorit_annos: 265
  },
  {
   resepti: "Kana-nuudeli-wok",
   kalorit_annos: 260
  },
  {
   resepti: "Kana-nuudelikeitto",
   kalorit_annos: 250
  },
  {
   resepti: "Chili",
   kalorit_annos: 257
  },
  {
   resepti: "Kerrosleipä",
   kalorit_annos: 300
  },
  {
   resepti: "Banaani-suklaa-pähkinäleivos",
   kalorit_annos: 390
  },
  {
   resepti: "Kylmä jogurtti",
   kalorit_annos: 320
  }
]

// Selectorit
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
const kalorisumma_html = document.getElementById('kalorisumma');
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

let kerto_luku;
let kalori_valinnat;

// Funktiot
function listaaReseptit() {
  const htmlalku = database.map(annos => {
    return `
      <li class="lista1">
        <span class="laskuri_nimi">${annos.resepti}</span>
        <span>&#9889;</span>
        <span class="laskuri_kalorit">${annos.kalorit_annos}</span>
        <span>kcal</span>
      <select class="laskuri_valinta" onchange="laskeValinnat()">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = htmlalku;
  setTimeout(() => { valintaFunktio() }, 1000);
}

function findMatches(wordToMatch, database) {
  return database.filter(annos => {
    const regex = new RegExp(wordToMatch, 'gi');
    return annos.resepti.match(regex);
  });
}

function displayMatches() {
  const matchArray = findMatches(this.value, database);
  const html = matchArray.map(annos => {
    return `
    <li class="lista1">
      <span class="laskuri_nimi">${annos.resepti}</span>
      <span>&#9889;</span>
      <span class="laskuri_kalorit">${annos.kalorit_annos}</span>
      <span>kcal</span>
      <select class="laskuri_valinta" onchange="laskeValinnat()">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
  valintaFunktio()
}

function valintaFunktio() {

  kalori_valinnat = document.querySelector('.kalori_valinnat');
  let elems1 = document.querySelectorAll('.lista1');
  for (let i = elems1.length; i--;) {
    elems1[i].addEventListener('click', siirraValinta, false);
  }

}

function laskeValinnat() {

  let summa = 0;
  let kalorilista = document.querySelectorAll(".lista2 > .laskuri_kalorit");
  let annoslista = document.querySelectorAll(".lista2 > .laskuri_valinta");

  for (let i = 0; i < kalorilista.length; i++) { 
    let numero = parseInt(kalorilista[i].textContent);
    let annosmaara = annoslista[i].value;
    summa += numero * annosmaara; 
  }

  kalorisumma_html.innerHTML = "Kokonaismäärä " + summa + " kaloria";

  let poistolista = document.querySelectorAll(".lista2 > .laskuri_nimi");

  for (let i = poistolista.length; i--;) {
    poistolista[i].addEventListener('click', poistaValinta, false);
  }

  function poistaValinta() {
    this.parentElement.remove();
    laskeValinnat();
  }

}

function siirraValinta() {    

  let kloonauslista = document.querySelectorAll(".lista2 > .laskuri_nimi");
  let vertailu = this.querySelector(".laskuri_nimi").textContent;

  for (element of kloonauslista) {
    if (vertailu === element.textContent) {
      return;
    } 
  }

  let klooni = this.cloneNode(true);
  klooni.className = "lista2";
  kalori_valinnat.appendChild(klooni);
  laskeValinnat();

}

