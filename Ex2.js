function affichage(){
     let titre = document.title;
     let ligne = document.getElementsByTagName("tr").length;
     let colonnes = document.querySelectorAll("th").length;
     let semestres = ((document.getElementsByTagName("tr").length-1)/2);
     let S5E1 = document.querySelector(".s5").innerHTML;
     let S5E2 = document.getElementById("id5").innerHTML;
     document.getElementById("id1").innerText=("Titre : "+titre+"\nNombre de lignes : "+ligne+"\nNombre de colonnes : "+colonnes+"\nNombre de semestres : "+semestres+"\nNote de S5 de E1 : "+S5E1+"\nNote de S5 de E2 : "+S5E2+"\n" );
     document.querySelector("#s5").className="color";
     let zt = document.createElement("textarea");
     document.body.appendChild(zt);
}
affichage();
