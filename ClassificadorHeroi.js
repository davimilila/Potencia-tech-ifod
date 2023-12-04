let nome = "Milila"
let XP = 10

if (XP < 1000){
    XP = "Ferro"
}

else if (1001 < XP <2000 ) {
    XP = "Bronze"
}

else if (2001 < XP <5000 ) {
    XP = "Prata"
}

else if (6001 < XP <7000 ) {
    XP = "Ouro"
}

else if (7001 < XP <8000 ) {
    XP = "Platina"
}

else if (8001 < XP <9000 ) {
    XP = "Ascendente" 
}

else if (9001 < XP <10000 ) {
    XP = "Imortal"
}

else if (XP > 10000) {
    XP = "Radiante"
}

console.log ("O herói de nome:", (nome),  ", está no nível de:", (XP) )