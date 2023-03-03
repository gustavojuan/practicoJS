//
const h1 = document.querySelector("h1");
const p = document.querySelectorAll("p");
const parrafito = document.querySelector(".parrafito");
const pid = document.querySelector("#pid");
const input = document.querySelector("input");

console.log(h1);
console.log({h1});
console.log(p);
console.log(parrafito);
console.log(pid);
console.log(input.value);

console.log({
  h1,
  p,
  parrafito,
  pid,
  input,
});


h1.innerHTML = "Cambiando desde JS <br> feo";
h1.innerText = "Cambiando desde JS <br> feo";
h1.setAttribute('class','display-1');
h1.classList.add('rojo');
h1.classList.remove('verde');
console.log(h1.getAttribute('class'));

input.value = "123";

console.log(document.createElement('img'));
console.log(document.createElement('span'));

const img = document.createElement('img');
img.setAttribute('src','https://via.placeholder.com/160')

pid.innerHTML = '';
pid.append(img);