 // creating an array of objects
 
let expensesCategories = [
	{
	  description: "flight ticket",
	  category: "transitioning",
	  estimation: 600,
	  type: "transportation", 
	  urgency: "critical",
	  importance: "incompressible",
	  priority: "critical",
	  impact: 1,
	  percentage: 20
	},
 	{
	  description: "nootropics",
	  category: "ordering supplementation",
	  estimation:  300, 
	  type: "supplements",
	  urgency: "high",
	  importance: "primordial",
	  priority: "critical",
	  impact: 1,
	  percentage: 20
	},
	{
	  description: "proteins",
	  category: "ordering supplementation",
	  estimation:  300, 
	  type: "supplements",
	  urgency: "high",
	  importance: "primordial",
	  priority: "critical",
	  impact: 1,
	  percentage: 20
	},
 	{
	  description: "vitamins",
	  category: "ordering supplementation",
	  estimation: 500, 
	  type: "supplements",
	  urgency: "high",
	  importance: "primordial",
	  priority: "critical",
	  impact: 1,
	  percentage: 20
	},
 	{
	  description: "self-storage",
	  category:  "transitioning",
	  estimation: 600,
	  type: "accomodation",
	  urgency: "medium", 
	  importance: "indispensable",
	  priority: "high",
	  impact: 2,
	  percentage: 20
	},
 	{
	  description: "food stock",
	  category:  "supermarket",
	  estimation : 600, 
	  type: "box", 
	  urgency: "medium",
	  importance: "comfort",
	  priority: "medium",
	  impact: 2,
	  percentage: 20
	},
	{
	  description: "hygiene",
	  category:  "supermarket",
	  estimation : 600, 
	  type: "healthcare", 
	  urgency: "medium",
	  importance: "comfort",
	  priority: "medium",
	  impact: 2,
	  percentage: 20
	},
 	{
	  description: "bus pass",
	  category:  "recurrent ",
	  estimation: 700, 
	  type: "transportation", 
	  urgency: "medium",
	  importance: "comfort",
	  priority: "medium",
	  impact: 2,
	  percentage: 20
	 },
 	{
	  description: "gym membership",
	  category:  "recurrent",
	  estimation: 350, 
	  type: "healthcare", 
	  urgency: "medium",
	  importance: "comfort",
	  priority: "medium",
	  impact: 2,
	  percentage: 20
	},
	{
	  category:  "buying equipment",
	  description: "tech",
	  estimation: 700,
	  type: "gear", 
	  urgency: "medium",
	  importance: "comfort",
	  priority: "medium",
	  impact: 2,
	  percentage: 20
	},
	{
	  description: "hiking",
	  category:  "buying equipment",
	  estimation: 500, 
	  type: "gear", 
	  urgency: "medium",
	  importance: "comfort",
	  priority: "medium",
	  impact: 2,
	  percentage: 20
	},
 	{
	  description: "fees",
	  category: "recurrent",
	  estimation: 200, 
	  type: "divers", 
	  urgency: "medium",
	  importance: "comfort",
	  priority: "medium",
	  impact: 2, 
	  percentage: 20
	}
]

// retourne un tableau

console.table(expensesCategories);

// retourne tous les objets dont l'estimation est superieur a 600€

var expensive = expensesCategories.filter( i =>  i.estimation > 500);
console.log(expensive);

var expensive = expensesCategories.filter(function(i) {
	return i.estimation > 500});

console.table(expensive);

// FILTER:

//retourne tous les objets affectes de l'importance primordial

var superImportant = expensesCategories.filter( i =>  i.importance = "primordial" );
console.table(superImportant);

console.table(expensesCategories.filter( i =>  i.importance = "primordial" ));

console.table(expensesCategories.filter(i => i.description).map(i => i.name.toUpperCase()));

console.table(

	)
// MAP:

// retourne un tableau qui afficher la description et categorie de chaque objet

var desCat = expensesCategories.map(x => `${x.description}: ${x.category}`);
console.table(desCat);

expensesCategories.map(({estimation}) => `${estimation}`);
// returne ca :Array(12) [ "600", "300", "300", "500", "600", "600", "600", "700", "350", "700", … ]


// SORT (YouTube IE uby-DrK_XC4 Fonction utiles en JavaScript (sort, map, filter, reduce))

// retourne un tableau en triant du + petit au + grand l'index estimation

var order = expensesCategories.sort((a,b) => a.estimation  b.estimation ? 1 : -1);
console.table(order);

 // retourne un array des estimations mais en string plutot qu'en entier :()

console.log(expensesCategories.map(x => `${x.estimation}`));
var estimationsTotal = expensesCategories.map(x => `${x.estimation}`) ;


var estimationsTotal = for (var i in expensesCategorie) {
	console.log(expensesCategories[i].estimation);
}

// REDUCE:


var sum = estimationsTotal.reduce(( total, amount) => total + amount );

console.log(sum);

var putain = expensesCategories.reduce( (a.estimation, b.estimation ) => a.estimation + b.estimation );
console.log(putain);

expensesCategories.reduce(function(a,b)


// file syntax has been corrected and works properly on february 2oth
// imprime tous les objets 

// for (var i in expensesCategories) {
// console.log(expensesCategories[i]);
// }

// for ( let i of expenses){
//  {console.log(i); }
// } 

// console.log(expenses[9].estimation);


// retourne une liste numerotée des objets

// for (let i = 0; i < expenses.length ; i++)
//  {console.table(i + "." + expenses[i].category ); }

/*
// fait exactement la meme chose que l'exemple ci-dessus

for ( let i in expenses)
  {console.log(i + "." + expenses[i].category ); }

// affiche le nombre d'objets  

for (var i in expenses) {
	console.log(expenses.length);}


 imprime toutes les valeurs de la propriété estimation a la suite

for (var i in expensesCategorie) {
	console.log(expensesCategories[i].estimation);
}

for ( let i of expenses)
  {console.log(i.category); }


/* YouTube loop example RxjQgIhEPWE, affiche la category et type
 * des depenses dont l'estimation est en dessous de 400€
*/

/*

for(i = 0; i < expenses.length; i++){
	if(expenses[i].estimation < 400) {
		console.log(expenses[i].category + "," + expenses[i].type)
	}
}
*/