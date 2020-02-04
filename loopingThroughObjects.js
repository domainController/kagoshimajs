// Looping through Objects BxFi7vVZx4s
 var expenses = {
	  category:  "backupGear",
          genre: "gear upgrade",
          estimation: 500,
          type: "gear",
          importance: "comfort",
          pourcentage: 20
        }

// imprime toutes les proprietes de l'objets seulements
for ( var i in expenses ) {
        console.log(i);
}

// imprime toutes les proprietes et valeurs de l'objet
for (var i in expenses) {
	console.log(i,expenses[i]);
}

// imprime la valeur estimation
console.log(expenses["estimation"])
