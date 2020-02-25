// creating an array of objects

let micronutriments = [

	{
	  description: "Multivitamins",
	  category:
	  price: 12,
	  quantity:
	  monthlyServingsNeed: 10,
	  costPerServing:
	  monthlyPrice:
	  percentage:
	  url:
	},	
	{
	  description: "Omega 3",
	  category:
	  price: 47.24,
	  quantity: 90,
	  monthlyServingsNeed: 60,
	  costPerServing:
	  monthlyPrice:
	  percentage:
	  url:
	},	
	{
	  description: "Carnitine",
	  category:
	  price: 48,
	  quantity: 90,
	  monthlyServingsNeed: 3,
	  costPerServing:
	  monthlyPrice:
	  percentage:
	  url:
	},
	{
	  description: "Zinc",
	  category:
	  price: 37,
	  quantity: 120,
	  monthlyServingsNeed: 15, 
	  costPerServing:
	  monthlyPrice:
	  percentage:
	  url:
	},
	{
	  description: "CoQ10",
	  category:
	  price: 37,
	  quantity: 120,
	  monthlyServingsNeed: 15, 
	  costPerServing:
	  monthlyPrice:
	  percentage:
	  url:
	},
	{
	  description: "NAC",
	  category:
	  price: 48,
	  quantity: 90,
	  monthlyServingsNeed: 10,
	  costPerServing:
	  monthlyPrice:
	  percentage:
	  url:
	},
		{
	  description: "CoQ10",
	  category:
	  price: 37,
	  quantity: 120,
	  monthlyServingsNeed: 15, 
	  costPerServing:
	  monthlyPrice:
	  percentage:
	  url:
	},
	{
	  description: "Mg/K/Ca",
	  category:
	  price: 37,
	  quantity: 120,
	  monthlyServingsNeed: 15, 
	  costPerServing:
	  monthlyPrice:
	  percentage:
	  url:
	},
	{
	  description: "ALA",
	  category:
	  price: 37,
	  quantity: 120,
	  monthlyServingsNeed: 15, 
	  costPerServing:
	  monthlyPrice:
	  percentage:
	  url:
	},
	{
	  description: "Melatonin",
	  category:
	  price: 37,
	  quantity: 120,
	  monthlyServingsNeed: 15, 
	  costPerServing:
	  monthlyPrice:
	  percentage:
	  url:
	},
];

// retourne le cout de revient du nootroopics par servings:

function costPerServing(){
 for (var x in nootropics){
   var long_pPS = nootropics[x].price / nootropics[x].quantity
   var round_pPS = long_pPS.toFixed(2)
   console.table("le prix par servings du" + " " + nootropics[x].description + " " + "est de:" +  " " +round_pPS + "€");
 }
}

// retourne le cout de revient du nootroopics au mois:

function monthlyPrice(){
   for (var x in nootropics){
     var long_pPS = nootropics[x].price / nootropics[x].quantity
     var long_mP = nootropics[x].monthlyServingsNeed * long_pPS
     var round_mP = long_mP.toFixed(2)
     console.log("le prix de revient mensuel du" + " " + nootropics[x].description + " " + "est de:" +  " " + round_mP + "€");
   }
}

// retourne la somme totale de tous les nootropics du tableau:

function sommme(){
 var somme = 0;
 for (var x = 0; x < nootropics.length; x++){
 somme += nootropics[x].price; 
   }
  console.log(somme);
 }

costPerServing()
monthlyPrice()

// retourne une liste numerotée des objets

for (let x = 0; x < nootropics.length ; x++)
  {console.log(x + "." + nootropics[x].category ); }

for ( let x in nootropics)
  {console.log(x + "." + nootropics[x].category ); }

// affiche le nombre d'objets  

for (var x in nootropics) {
	console.log(nootropics.length);}

// imprime tous les objets 

for (var x in nootropics) {
	console.log(nootropics[x]);

for ( let x of nootropics)
  {console.log(x); }
}
// imprime toutes les valeurs de la propriété monthlyServingsNeed a la suite

for (var x in nootropics) {
	console.log(nootropics[x].monthlyServingsNeed);
}

for ( let x of nootropics)
  {console.log(x.monthlyServingsNeed); }


/* YouTube loop example RxjQgIhEPWE, affiche la category et type
 * des depenses dont l'monthlyServingsNeed est en dessous de 400€
*/

for(x = 0; x < nootropics.length; i++) {
	if(nootropics[x].monthlyServingsNeed < 400) {
		console.log(nootropics[x].category + "," + nootropics[x].type)
	}
}
