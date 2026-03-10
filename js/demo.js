// /* =========================
//    DEMO LINKS CONFIG
// ========================= */

// const DEMO_BASE_URL = "https://webeasey-demos.netlify.app/";

// /*
//   Structure:
//   demoLinks[niche][theme] = URL
// */

// const demoLinks = {
//   coaching: {
//     blue: `${DEMO_BASE_URL}?niche=coaching&theme=blue`,
//     red: `${DEMO_BASE_URL}?niche=coaching&theme=red`,
//     navy: `${DEMO_BASE_URL}?niche=coaching&theme=navy`,
//     grey: `${DEMO_BASE_URL}?niche=coaching&theme=grey`,
//   },

//   gym: {
//     dark: `${DEMO_BASE_URL}?niche=gym&theme=dark`,
//     green: `${DEMO_BASE_URL}?niche=gym&theme=green`,
//     orange: `${DEMO_BASE_URL}?niche=gym&theme=orange`,
//     luxury: `${DEMO_BASE_URL}?niche=gym&theme=luxury`,
//   },

//   beauty: {
//     pink: `${DEMO_BASE_URL}?niche=beauty&theme=pink`,
//     black: `${DEMO_BASE_URL}?niche=beauty&theme=black`,
//     lavender: `${DEMO_BASE_URL}?niche=beauty&theme=lavender`,
//     minimal: `${DEMO_BASE_URL}?niche=beauty&theme=minimal`,
//   },

//   ecommerce: {
//     blue: `${DEMO_BASE_URL}?niche=ecommerce&theme=blue`,
//     orange: `${DEMO_BASE_URL}?niche=ecommerce&theme=orange`,
//     black: `${DEMO_BASE_URL}?niche=ecommerce&theme=black`,
//     brand: `${DEMO_BASE_URL}?niche=ecommerce&theme=brand`,
// },
// };

// /* =========================
//    OPEN DEMO (DEFAULT)
// ========================= */
// /*
//   Called from index.html like:
//   onclick="openDemo('gym')"
//   → opens first/default theme
// */

// function openDemo(niche) {
//   if (!demoLinks[niche]) {
//     alert("Demo not available for this niche yet.");
//     return;
//   }

//   // Pick first theme automatically
//   const themes = Object.values(demoLinks[niche]);
//   const demoUrl = themes[0];

//   window.open(demoUrl, "_blank");
// }

// /* =========================
//    OPEN SPECIFIC THEME (OPTIONAL)
// ========================= */
// /*
//   Usage example:
//   openDemoTheme('gym', 'luxury')
// */

// function openDemoTheme(niche, theme) {
//   if (!demoLinks[niche] || !demoLinks[niche][theme]) {
//     alert("This demo theme is not available.");
//     return;
//   }

//   window.open(demoLinks[niche][theme], "_blank");
// }


/* =========================
   DEMO LINKS CONFIG
========================= */

const DEMO_BASE_URL = "https://cwp-x.github.io/webeasey-demos";

/*
demoLinks[niche][theme]
*/

const demoLinks = {

coaching:{
blue:`${DEMO_BASE_URL}?niche=coaching&theme=blue`,
red:`${DEMO_BASE_URL}?niche=coaching&theme=red`,
navy:`${DEMO_BASE_URL}?niche=coaching&theme=navy`,
grey:`${DEMO_BASE_URL}?niche=coaching&theme=grey`
},

gym:{
dark:`${DEMO_BASE_URL}?niche=gym&theme=dark`,
green:`${DEMO_BASE_URL}?niche=gym&theme=green`,
orange:`${DEMO_BASE_URL}?niche=gym&theme=orange`,
luxury:`${DEMO_BASE_URL}?niche=gym&theme=luxury`
},

beauty:{
pink:`${DEMO_BASE_URL}?niche=beauty&theme=pink`,
black:`${DEMO_BASE_URL}?niche=beauty&theme=black`,
lavender:`${DEMO_BASE_URL}?niche=beauty&theme=lavender`,
minimal:`${DEMO_BASE_URL}?niche=beauty&theme=minimal`
},

realestate:{
blue:`${DEMO_BASE_URL}?niche=realestate&theme=blue`,
orange:`${DEMO_BASE_URL}?niche=realestate&theme=orange`,
black:`${DEMO_BASE_URL}?niche=realestate&theme=black`,
brand:`${DEMO_BASE_URL}?niche=realestate&theme=brand`
}

};

let selectedNiche = null;


/* =========================
OPEN THEME MODAL
========================= */

function openDemo(niche){

selectedNiche = niche;

const modal = document.getElementById("themeModal");
const grid = document.getElementById("themeGrid");

grid.innerHTML="";

const themes = Object.keys(demoLinks[niche]);

themes.forEach(theme=>{

const card = document.createElement("div");

card.className="theme-card";

card.innerText = theme.charAt(0).toUpperCase()+theme.slice(1);

card.onclick = () => openDemoTheme(niche,theme);

grid.appendChild(card);

});

modal.style.display="flex";

}


/* =========================
OPEN DEMO
========================= */

function openDemoTheme(niche,theme){

if(!demoLinks[niche] || !demoLinks[niche][theme]) return;

window.open(demoLinks[niche][theme],"_blank");

}


/* =========================
CLOSE MODAL
========================= */

function closeThemeModal(){

document.getElementById("themeModal").style.display="none";

}
