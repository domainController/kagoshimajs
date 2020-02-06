 // creating an array of objects
 
let expenses = [
	{
	  category: "plane",
	  description: "flight ticket",
	  estimation: 600,
	  type: "transportation", 
	  urgency: "critical",
	  importance: "incompressible",
	  priority: "critical",
	  impact: 1,
	  pourcentage: 20
	},
 	{
	  category: "smartDrugs",
	  description: "nootropics",
	  estimation:  300, 
	  type: "supplements",
	  urgency: "high",
	  importance: "primordial",
	  priority: "critical",
	  impact: 1,
	  pourcentage: 20
	},
 	{
	  category: "micronutriments",
	  description: "vitamins",
	  estimation: 500, 
	  type: "supplements",
	  urgency: "high",
	  importance: "primordial",
	  priority: "critical",
	  impact: 1,
	  pourcentage: 20
	},
 	{
	  category:  "self-storage",
	  description: "box rent",
	  estimation: 600,
	  type: "logement",
	  urgency: "medium", 
	  importance: "indispensable",
	  priority: "high",
	  impact: 2,
	  pourcentage: 20
	},
 	{
	  category:  "alimentation",
	  description: "food stock",
	  estimation : 600, 
	  type: "box", 
	  urgency: "medium",
	  importance: "comfort",
	  priority: "medium",
	  impact: 2,
	  pourcentage: 20
	},
	{
	  category:  "sante",
	  description: "hygiene",
	  estimation : 600, 
	  type: "box", 
	  urgency: "medium",
	  importance: "comfort",
	  priority: "medium",
	  impact: 2,
	  pourcentage: 20
	},
 	{
	  category:  "movingAround",
	  description: "bus pass",
	  estimation: 700, 
	  type: "transportation", 
	  urgency: "medium",
	  importance: "comfort",
	  priority: "medium",
	  impact: 2,
	  pourcentage: 20
	 },
 	{
	  category:  "healthcare",
	  description: "gym pass",
	  estimation: 350, 
	  type: "hygiene", 
	  urgency: "medium",
	  importance: "comfort",
	  priority: "medium",
	  impact: 2,
	  pourcentage: 20
	},
	{
	  category:  "gearUpgrade",
	  description: "high tech and hiking gear"
	  estimation: 500, 
	  type: "gear", 
	  urgency: "medium",
	  importance: "comfort",
	  priority: "medium",
	  impact: 2,
	  pourcentage: 20
	},
 	{
	  category: "miscellaneous",
	  description: "misc",
	  estimation: 200, 
	  type: "divers", 
	  urgency: "medium",
	  importance: "comfort",
	  priority: "medium",
	  impact: 2, 
	  pourcentage: 20
	},
]
// console.log(expenses[9].estimation);


// retourne une liste numerotée des objets

for (let i = 0; i < expenses.length ; i++)
  {console.log(i + "." + expenses[i].category ); }

// affiche le nombre d'objets  

for (var i in expenses) {
	console.log(expenses.length);}

// imprime tous les objets 

for (var i in expenses) {
	console.log(expenses[i]);
}
// imprime toutes les valeurs de la propriété estimation a la suite

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
