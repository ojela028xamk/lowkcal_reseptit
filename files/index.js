// Inner HTML
const paaruoat_html = document.getElementById('paaruoat');
const jalkiruoat_html = document.getElementById('jalkiruoat');
const lisukkeet_html = document.getElementById('lisukkeet');

// Reseptilistat
const paaruoat_arr = [
  {
    otsikko: "Seitiä parmesaanikastikkeessa",
    otsikko_kalorit: "1060 kcal",
    otsikko_annokset: "4 annosta",
    ainekset: [
      "400 g Alaskanseiti",
      "500 g Pirkka perunasuikaleet",
      "200 ml 10% ruokakerma",
      "200 g Pirkka vihannessekoitus",
      "40 g Parmesaanijuusto",
      "100 g Ykkösmaito",
      "Sitruunapippuri ja valkosipulijauhe"
    ],
    ohjeet: [
      "Laita perunasuikaleet, ruokakerma ja maito isoon vuokaan. Lisää suolaa, pippuria ja valkosipulijauhetta maun mukaan. Voit halutessasi lisätä myös hieman vettä. Sekoita.",
      "Laita vuoka 200 asteiseen uuniin 25 minuutiksi. ",
      "Ota vuoka pois uunista. Lisää vihannessekoitus ja sekoita. Mausta seitifileet kunnolla suolalla ja sitruunapippurilla. Lisää fileet perunasuikaleiden päälle. Laita vuoka takaisin uuniin 25 minuutiksi.",
      "Ota vuoka pois uunista ja lisää parmesaanijuusto. Voit myös halutessasi rikkoa seitifileet ja sekoittaa kaikki ainekset keskenään. Tarjoile."
    ],
  },
  {
    otsikko: "Kana-nuudeli wok",
    otsikko_kalorit: "520 kcal",
    otsikko_annokset: "2 annosta",
    ainekset: [
      "50 g Spice up! Täysjyvänuudeli",
      "50 g Pirkka japanilainen soijakastike",
      "150 g Kariniemen kananpojan fileesuikale",
      "200 g Findus wok-vihannekset classic",
      "20 g Punainen sipuli",
      "5 g Voi",
      "20 g Vaahterasiirappi",
      "Cajun- ja valkosipulijauhe"
    ],
    ohjeet: [
      "Mausta kanan fileesuikaleet cajun-mausteseoksella ja suolalla maun mukaan. Anna kanasuikaleiden marinoida huoneenlämmössä noin puoli tuntia.",
      "Kuumenna paistinpannu keskilämmöllä. Viipaloi punasipuli pieniksi paloiksi.",
      "Lisää pannuun nokare voita. Lisää kanasuikaleet ja sipuli. Paista muutama minuutti.",
      "Nosta hieman lämpöä. Lisää jäiset wok-vihannekset. Paista niin kauan, että vihannekset on paistettu. Keitä samalla nuudelit ohjeiden mukaan.",
      "Sekoita kulhossa soijakastike, 50 ml vettä, limemehu, hot sauce ja valkosipulijauhetta maun mukaan. Lisää seos pannuun.",
      "Haihduta seosta muutama minuutti. Tämän jälkeen lisää nuudelit pannuun ja sekoita. Tarjoile."
    ],
  },
  {
    otsikko: "Kana-nuudelikeitto",
    otsikko_kalorit: "750 kcal",
    otsikko_annokset: "3 annosta",
    ainekset: [
      "200 g Kanan fileesuikale",
      "50 g Täysjyvänuudeli",
      "200 ml 10% ruokakerma",
      "20 g / 1 rkl Japanilainen soijakastike",
      "100 g Apetit papusekoitus",
      "10 g Spice Up! currytahna punainen",
      "1 kpl Kanaliemikuutio",
      "10 ml Limemehu",
      "5 ml Hot sauce ~17 kcal / 100 ml",
      "Basilika"
    ],
    ohjeet: [
      "Laita kattilaan 100 ml vettä ja jonkin verran kermaa. Kiehauta ja sekoita joukkoon currytahna.",
      "Paista kanan fileesuikaleita kuumassa curryseoksessa 2 min.",
      "Lisää 200 ml vettä ja loput kermasta. Lisää myös limemehu, hot sauce, soijakastike ja suolaa. Kiehauta 3 min ja lisää samalla kanaliemikuutio.",
      "Lisää papusekoitus ja nuudelit. Kiehauta 4 min.",
      "Tarjoile kuivatetun tai tuoreen basilikan / thai-basilikan kanssa."
    ],
  },
  {
    otsikko: "Chili",
    otsikko_kalorit: "770 kcal",
    otsikko_annokset: "3 annosta",
    ainekset: [
      "200 g Kanan fileesuikale",
      "70 g Täysjyväpikariisi",
      "100 g Apetit papusekoitus",
      "100 g Punainen paprika",
      "20 g Punainen sipuli",
      "390 g Pirkka paseerattu tomaatti chili",
      "30 g Ketsuppi",
      "5 g Voi",
      "10 ml Limemehu",
      "5 ml Hot sauce ~17 kcal / 100 ml",
      "Cajun- ja valkosipulijauhe",
      "Kumina kokonainen"
    ],
    ohjeet: [
      "Leikkaa paprika siivuiksi ja sipuli pieniksi paloiksi.",
      "Kuumenna kattila. Lisää nokare voita, paprika, sipuli ja kanasuikaleet. Lisää cajun, valkosipulijauhe, suolaa ja kuminasiemeniä maun mukaan. Paista muutama minuutti.",
      "Lisää paseerattu tomaattisose, ketsuppi, limemehu ja hot sauce. Täytä tomaattisoseen kartonki puoleenväliin vettä ja lisää kattilaan.",
      "Kun seos kiehuu, lisää riisi ja papusekoitus. Kiehauta 10 min. Tarjoile."
    ],
  }
];

const lisukkeet_arr = [
  {
    otsikko: "Kerrosleipä",
    otsikko_kalorit: "300 kcal",
    otsikko_annokset: "- annosta",
    ainekset: [
      "2 Siivua leipää ~90 kcal / siivu",
      "20 g Felix voileipäkurkku",
      "1 kpl Sulatejuustoviipale 5% ~28 kcal / viipale",
      "30 g Atria vuolu kanafilee fajitas",
      "10 g Pirkka BBQ-kastike",
      "Makea friseesalaatti tai muu salaatti",
      "20 g Lempi sipoolainen rahkajogurtti 0,7 %",
      "10 g Hellmann's light mayonnaise",
      "Jauhettu paprika"
    ],
    ohjeet: [
      "Valitse kaksi siivua haluamaasi leipää. Itse käytän Fazerin juuresleipä kaura-bataatti-linssi.",
      "Yhdistä rahkajogurtti ja majoneesi ja suolaa, mustapippuria ja paprikaa maun mukaan. Laita puolet seoksesta pohjasiivuun. Säästä loput seoksesta seuraavaan kerrosleipään.",
      "Rakenna kerrosleipä tämän jälkeen seuraavalla tavalla: Voileipäkurkku -> sulatejuusto -> kanafilee -> salaatti.",
      "Laita BBQ-kastiketta toiseen siivuun ja laita siivu päällimmäiseksi."
    ],
  },
  {
    otsikko: "Perunasalaatti",
    otsikko_kalorit: "250 kcal",
    otsikko_annokset: "2 annosta",
    ainekset: [
      "250 g Peruna",
      "80 g Kevyt kermaviili 6 %",
      "10 g Ketsuppi",
      "1 tl Dijon sinappi",
      "1 tl Lime- tai sitruunamehu",
      "Sitruuna- tai mustapippuri",
      "Kuivattu tai tuore tilli"
    ],
    ohjeet: [
      "Kuori ja keitä perunat.",
      "Sekoita kaikki muut ainekset, lisää mausteet maun mukaan.",
      "Odota, että perunat ovat jäähtyneet. Kuutio tai leikkaa haluamallasi tavalla.",
      "Sekoita perunat ja kermaviiliseos keskenään. Tarjoile."
    ],
  }
];

const jalkiruoat_arr = [
  {
    otsikko: "Banaani-suklaa-pähkinäleivos",
    otsikko_kalorit: "260 kcal",
    otsikko_annokset: "2 annosta",
    ainekset: [
      "100 g Banaani",
      "20 g Pirkka kaakaojauhe",
      "10 g PB2 sulkaa / normaali pähkinäjauho",
      "15 g Puolikarkea vehnäjauho",
      "45 g Erytritoli",
      "1/2 tl Leivinjauhe",
      "Suola"
    ],
    ohjeet: [
      "Murskaa banaani kulhossa",
      "Lisää 20 g kaakaojauheesta ja kaikki muut ainesosat, 50 ml vettä ja ripaus suolaa.",
      "Lämmitä uuni 200 asteeseen. Laita seos vuokaan ja kuumenna seos uunissa noin 20 minuuttia riippuen siitä, kuinka kostean haluat leivonnaisen olevan. Muista, että leivonnainen paistuu vielä vuoassa sen jälkeen, kun olet ottanut sen pois uunista.",
      "Leivonnainen maistuu parhaimmalta silloin, kun se on jäähtynyt kunnolla. Voit pitää sitä tunnin jääkaapissa tai yön yli huoneenlämmössä elmukelmulla peitettynä.",
      "Tarjoile esim. vaniljajäätelön kanssa."
    ],
  },
  {
    otsikko: "Kylmä jogurtti",
    otsikko_kalorit: "320 kcal",
    otsikko_annokset: "- annosta",
    ainekset: [
      "200 g Lempi sipoolainen rahkajogurtti 0,7 %",
      "60 g Valio kevytkerma 10 %",
      "30 g Mieleinen juokseva hunajavalmiste",
      "5 g Vaniljauute",
      "10 g Vaniljasokeri"
    ],
    ohjeet: [
      "Yhdistä kaikki ainekset haluamassasi astiassa.",
      "Laita astia pakastimeen ja sekoita puolen tunnin välein. Toista tätä niin kauan, kunnes sinulla on haluamasi koostumus."
    ],
  }
];

function naytaPaaruoat() {
  // Näytä tämä reseptilista ja piilota muut
  paaruoat_html.style.display = "block";
  jalkiruoat_html.style.display = "none";
  lisukkeet_html.style.display = "none";

  // Näytä reseptit
  const output = [];

    // Käydään läpi reseptin osiot
    paaruoat_arr.forEach((element) => {

      // Käydään läpi reseptin ainekset
      const aines_output = [];
      const ohjeet_output = [];

      for (aines of element.ainekset) {
        aines_output.push(
          `<li>${aines}</li>`
        );
      };

      for (ohje of element.ohjeet) {
        ohjeet_output.push(
          `<li>${ohje}</li>`
        )
      }

      output.push(
        `<div class="flex_resepti">
         <div class="paaruoka"> ${element.otsikko} </br>&#9889; ${element.otsikko_kalorit} &#127860; ${element.otsikko_annokset}</div>
         <div class="ohjeet"> <h1>Ohjeet</h1> <ol>${ohjeet_output.join('')}</ol> </div>
         <div class="ainekset"> <h1>Ainekset</h1> <ul>${aines_output.join('')}</ul> </div>
         </div>
        `
      );

    });

  paaruoat_html.innerHTML = output.join('');

  // Reseptin otsikkoa painamalla voidaan avata resepti
  let elems = document.querySelectorAll('.paaruoka');

  for (let i = elems.length; i--;) {
      elems[i].addEventListener('click', fn, false);
  }

  // Näytä tai piilota resepti
  function fn() {
    
    let ainekset = this.nextElementSibling; // .paaruoka seuraava div (.paaruoka ~ .ohjeet)
    let ohjeet = this.nextElementSibling.nextElementSibling; // .paaruoka -> .ohjeet -> .ainekset

    if (ainekset.style.display === "block") {
      ainekset.style.display = "none";
      ohjeet.style.display = "none"; 
    } else {
      ainekset.style.display = "block";
      ohjeet.style.display = "block"; 
    }
  } 
} 

function naytaLisukkeet() {
  // Näytä tämä reseptilista ja piilota muut
  paaruoat_html.style.display = "none";
  jalkiruoat_html.style.display = "none";
  lisukkeet_html.style.display = "block";

  // Näytä reseptit
  const output = [];

    // Käydään läpi reseptin osiot
    lisukkeet_arr.forEach((element) => {

      // Käydään läpi reseptin ainekset
      const aines_output = [];
      const ohjeet_output = [];

      for (aines of element.ainekset) {
        aines_output.push(
          `<li>${aines}</li>`
        );
      };

      for (ohje of element.ohjeet) {
        ohjeet_output.push(
          `<li>${ohje}</li>`
        )
      }

      output.push(
        `<div class="flex_resepti">
         <div class="paaruoka"> ${element.otsikko} </br>&#9889; ${element.otsikko_kalorit} &#127860; ${element.otsikko_annokset}</div>
         <div class="ohjeet"> <h1>Ohjeet</h1> <ol>${ohjeet_output.join('')}</ol> </div>
         <div class="ainekset"> <h1>Ainekset</h1> <ul>${aines_output.join('')}</ul> </div>
         </div>
        `
      );

    });

  lisukkeet_html.innerHTML = output.join('');

  // Reseptin otsikkoa painamalla voidaan avata resepti
  let elems = document.querySelectorAll('.paaruoka');

  for (let i = elems.length; i--;) {
      elems[i].addEventListener('click', fn, false);
  }

  // Näytä tai piilota resepti
  function fn() {
    
    let ainekset = this.nextElementSibling; // .paaruoka seuraava div (.paaruoka ~ .ohjeet)
    let ohjeet = this.nextElementSibling.nextElementSibling; // .paaruoka -> .ohjeet -> .ainekset

    if (ainekset.style.display === "block") {
      ainekset.style.display = "none";
      ohjeet.style.display = "none"; 
    } else {
      ainekset.style.display = "block";
      ohjeet.style.display = "block"; 
    }
  } 
} 

function naytaJalkiruoat() {
  // Näytä tämä reseptilista ja piilota muut
  paaruoat_html.style.display = "none";
  jalkiruoat_html.style.display = "block";
  lisukkeet_html.style.display = "none";

  // Näytä reseptit
  const output = [];

    // Käydään läpi reseptin osiot
    jalkiruoat_arr.forEach((element) => {

      // Käydään läpi reseptin ainekset
      const aines_output = [];
      const ohjeet_output = [];

      for (aines of element.ainekset) {
        aines_output.push(
          `<li>${aines}</li>`
        );
      };

      for (ohje of element.ohjeet) {
        ohjeet_output.push(
          `<li>${ohje}</li>`
        )
      }

      output.push(
        `<div class="flex_resepti">
         <div class="paaruoka"> ${element.otsikko} </br>&#9889; ${element.otsikko_kalorit} &#127860; ${element.otsikko_annokset}</div>
         <div class="ohjeet"> <h1>Ohjeet</h1> <ol>${ohjeet_output.join('')}</ol> </div>
         <div class="ainekset"> <h1>Ainekset</h1> <ul>${aines_output.join('')}</ul> </div>
         </div>
        `
      );

    });

  jalkiruoat_html.innerHTML = output.join('');

  // Reseptin otsikkoa painamalla voidaan avata resepti
  let elems = document.querySelectorAll('.paaruoka');

  for (let i = elems.length; i--;) {
      elems[i].addEventListener('click', fn, false);
  }

  // Näytä tai piilota resepti
  function fn() {
    
    let ainekset = this.nextElementSibling; // .paaruoka seuraava div (.paaruoka ~ .ohjeet)
    let ohjeet = this.nextElementSibling.nextElementSibling; // .paaruoka -> .ohjeet -> .ainekset

    if (ainekset.style.display === "block") {
      ainekset.style.display = "none";
      ohjeet.style.display = "none"; 
    } else {
      ainekset.style.display = "block";
      ohjeet.style.display = "block"; 
    }
  } 
} 