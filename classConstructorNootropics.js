// creating an array of objects

class nootropics{

	constructor(description, category, price, quantity, monthlyServingsNeed, pricePerServings
	monthlyPrice, percentage, url) {

		this.description   = description;
		this.category      = category;
		this.price 		   = price;
		this.quantity	   = quantity;
		this.monthlyServingsNeed = monthlyServingsNeed;
		this.pricePerServings = pricePerServings;
		this.monthlyPrice  = monthlyPrice;
		this.percentage    = percentage;
		this.url  		   = url;
	}

// retourne le cout de revient du nootroopics par servings:

	pricePerServings(){
   var long_pPS = nootropics.price / nootropics.quantity
   var round_pPS = long_pPS.toFixed(2)
   console.log("le prix par servings du" + " " + nootropics.description + " " + "est de:" +  " " +round_pPS + "€");
 	}
}

//  creation d'une premiere instance de l'objet

var  pramiracetam = new nootropics('pramiracetam','racetam',104, 200, 10, 'pPS', 'mP', '%', 'www');

