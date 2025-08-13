var idade = 67;
if (idade>=18){ 
    console.log("Você pode votar");
} else {
    if (idade>=16 || idade>65) {
        console.log("Voto opcional");
    }
    else {
        console.log("Você não pode votar");
    }
}
console.log("Fim do programa");