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
  }
]

// Selectorit
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

// Funktiot
function listaaReseptit() {
  const htmlalku = database.map(annos => {
    return `
      <li class="lista1">
        <span class="laskuri_nimi">${annos.resepti}</span>
        <span class="laskuri_kalorit">${annos.kalorit_annos}</span>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = htmlalku;
  setTimeout(() => { otaValinta() }, 1000);
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
        <span class="laskuri_kalorit">${annos.kalorit_annos}</span>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
}

function otaValinta() {

  let elems = document.querySelectorAll('.lista1');
  let kalori_valinnat = document.querySelector('.kalori_valinnat');

  for (let i = elems.length; i--;) {
      elems[i].addEventListener('click', siirraValinta, false);
  }

  function siirraValinta() {
    this.className = "lista2";
    kalori_valinnat.appendChild(this.cloneNode(true));
  }

}