function active(){
    let aktiv = ['Japanska', 'youtube', 'twitch', 'hockey', 'Javascript', 'gym', 'mat'];
switch(new Date().getDay()){ 
    case 0:  return "Det är måndag idag skall du plugga " + aktiv[0]; break; 
    case 1:  return "Det är tisdag idag skall du kolla " + aktiv[1]; break; 
    case 2:  return "Det är onsdag idag skall du kolla " + aktiv[2]; break; 
    case 3:  return "Det är torsdag idag skall du kolla " + aktiv[3]; break; 
    case 4:  return "Det är fredag idag skall du plugga " + aktiv[4]; break; 
    case 5:  return "Det är lördag idag skall du gå på " + aktiv[5]; break; 
    case 6:  return "Det är söndag idag skall du äta " + aktiv[6]; break; 
}
}console.log(active());