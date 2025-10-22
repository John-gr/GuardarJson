const btnAdd=document.querySelector(".btnAdd");
const name=document.querySelector(".nombre");
const correo=document.querySelector(".email");
const resultado=document.querySelector(".resultado");

btnAdd.addEventListener("click",()=>{
    const persona={
    nombre:name.value,
    email:correo.value,
};

const personaJSON=JSON.stringify(persona);
resultado.textContent=personaJSON;
})


