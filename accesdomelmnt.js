
let titre = document.title;
console.log("==================================");
console.log("titre de la page :" +titre);
console.log("type du cntenu de la page:" +document.body);
let i = document.links;
console.log("3ème bande annonce :" +i[2].href);
let npg = document.getElementsByTagName("p");
console.log(" Le titre GONE GIRL est de type :" +document.head);
console.log("====================================");
console.log("Nombre de paragraphes du doc : " +npg.length +" Et d'Images :" +document.images.length);
console.log("====================================");
console.log("On a le nombre de Synopsis : " +document.getElementsByClassName("c1").length);
console.log("Première rubrique des films en l'année : " +document.getElementById("2014").innerHTML);
console.log("Nombre de film sous la rubrique 2016 : " );
console.log("====================================");
console.log("synopsis du film : " );
console.log(+)