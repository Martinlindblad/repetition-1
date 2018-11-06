function kaffe(){
    antal = prompt("Ange antal kaffe koppar per dag: ");
    rabatt = 0.10;
    kopp = 12;
    dagar = 30;
    if((antal * kopp) < 1000){
        return alert("Du har inte rätt till rabbat: " + (((1000 - (antal * dagar)) / kopp).toFixed(0)  + " koppar Kvar att köpa")); 
    }else if((antal * kopp) > 1000){
        return alert("Du har rätt till rabbat: " + ((antal* kopp)  - ((antal * kopp) * rabatt)) + ' att betala, du fick ' +  ((antal * kopp) * rabatt) + ' kr i rabatt ');  
    }
} 
kaffe();