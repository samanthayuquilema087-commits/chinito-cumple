const abrir = document.getElementById("abrir");
const sobre = document.getElementById("sobre");
const mensaje = document.getElementById("mensaje");
const typing = document.getElementById("typing");

const play = document.getElementById("playMusic");
const musica = document.getElementById("musica");

const carta = `Mi chinito ❤️

Hoy es un día muy especial porque celebramos tu cumpleaños.

Quería regalarte algo diferente, algo hecho con mucho cariño.

Gracias por cada sonrisa, por cada momento y por hacerme sentir tan feliz cuando estoy contigo.

Espero que este nuevo año de tu vida esté lleno de sueños cumplidos, mucha salud y muchísima felicidad.

Nunca olvides lo increíble que eres.

Te admiro muchísimo y me haces muy feliz.

Espero poder seguir compartiendo muchos momentos a tu lado.

Feliz cumpleaños, mi amor.

Te amo muchísimo. 💜`;

abrir.onclick = () => {

sobre.classList.add("abierto");

mensaje.style.display = "block";

typing.innerHTML = "";

let i = 0;

function escribir() {

if (i < carta.length) {

typing.innerHTML += carta.charAt(i);

i++;

setTimeout(escribir,40);

}

}

escribir();

}

play.onclick = ()=>{

if(musica.paused){

musica.play();

play.innerHTML="⏸️";

}else{

musica.pause();

play.innerHTML="🎵";

}

}

document.getElementById("especial").onclick=()=>{

alert("🐈 Eres una persona increíble. Me haces sonreír incluso en los días difíciles. Gracias por ser tú. 💜");

}

document.getElementById("amor").onclick=()=>{

alert("❤️ Gracias por aparecer en mi vida. Espero seguir creando muchísimos recuerdos contigo. Te quiero muchísimo.");

}

document.getElementById("final").onclick=()=>{

alert("🎉 ¡Feliz cumpleaños, mi Chinito! Espero que hoy seas muy feliz. Gracias por existir. 💜");

}

for(let i=0;i<120;i++){

let star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDelay=Math.random()*3+"s";

star.style.animationDuration=(1+Math.random()*3)+"s";

document.getElementById("stars").appendChild(star);

}
