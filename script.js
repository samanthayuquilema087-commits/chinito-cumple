const abrir = document.getElementById("abrir");
const sobre = document.getElementById("sobre");
const mensaje = document.getElementById("mensaje");
const typing = document.getElementById("typing");

const play = document.getElementById("playMusic");
const musica = document.getElementById("musica");

const carta = `Mi chinito ❤️

const carta = `
Mi amor:

Este día es muy especial para ti porque es tu cumpleaños. Aunque yo no pueda estar ahí contigo, aun así quería felicitarte porque eres mi persona favorita.

Gracias por llegar a mi vida, por convertir los momentos simples en recuerdos hermosos, por hacerme reír cuando más lo necesitaba y por llenarme de felicidad con tu forma de ser.

De verdad eres alguien muy importante para mí, y me hace feliz poder tenerte en mi vida aunque sea de esta forma.

Espero que hoy lo pases increíble, que sonrías mucho, que te consientan bastante y que todos tus deseos se cumplan. Aunque estemos lejos, siempre te voy a tener presente.

Feliz cumpleaños, chinito 💖
`;

abrir.onclick = () => {
  alert(carta);
};
const entrar=document.getElementById("entrar");

const tituloCarta=document.querySelector(".tituloCarta");

entrar.onclick=()=>{

document.querySelector(".inicio").style.display="none";

document.getElementById("sobre").style.display="block";

tituloCarta.style.display="block";

}
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
