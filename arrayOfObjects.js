 // creating an array of objects
 
let expenses = [
	{
	  category: "plane",
	  genre: "flight ticket",
	  estimation: 600,
	  type: "transportation", 
	  importance: "incompressible",
	  pourcentage: 20
	},
 	{
	  category: "smartDrugs",
	  genre: "nootropics",
	  estimation:  300, 
	  type: "supplements", 
	  importance: "primordial",
	  pourcentage: 20
	},
 	{
	  category: "micronutriment",
	  genre: "vitamins",
	  estimation: 500, 
	  type: "supplements", 
	  importance: "primordial",
	  pourcentage: 20
	},
 	{
	  category:  "box",
	  genre: "self-storage",
	  estimation: 600,
	  type: "logement", 
	  importance: "indispensable",
	  pourcentage: 20
	},
 	{
	  category:  "pasta",
	  genre: "alimentation",
	  estimation : 600, 
	  type: "foodStock", 
	  importance: "comfort",
	  pourcentage: 20
	},
	{
	  category:  "sante",
	  genre: "hygiene",
	  estimation : 600, 
	  type: "foodStock", 
	  importance: "comfort",
	  pourcentage: 20
	},
 	{
	  category:  "movingAround",
	  genre: "bus pass",
	  estimation: 700, 
	  type: "transportation", 
	  importance: "comfort",
	  pourcentage: 20
	 },
 	{
	  category:  "shower",
	  genre: "gym pass",
	  estimation: 350, 
	  type: "hygiene", 
	  importance: "comfort",
	  pourcentage: 20
	},
 	{
	  category:  "backupGear",
	  genre: "gear upgrade",
	  estimation: 500, 
	  type: "gear", 
	  importance: "comfort",
	  pourcentage: 20
	},
 	{
	  category: "miscellaneous",
	  genre: "misc",
	  estimation: 200, 
	  type: "divers", 
	  importance: "extra",
	  pourcentage: 20
	},
]
// console.log(expenses[9].estimation);

// imprime tous les objets 

for (var i in expenses) {
	console.log(expenses[i]);
}
// imprime toutes les valeurs de la propriete estimation a la suite

for (var i in expenses) {
	console.log(expenses[i].estimation);
}

/* YouTube loop example RxjQgIhEPWE, affiche la category et type
 * des depenses dont l'estimation est en dessous de 400€
*/

for(i = 0; i < expenses.length; i++) {
	if(expenses[i].estimation < 400) {
		console.log(expenses[i].category + "," + expenses[i].type)
	}
}
