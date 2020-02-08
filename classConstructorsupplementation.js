// creating an array of objects

class supplementation {

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

	pricePerServings() {
   		var long_pPS = supplementation.price / supplementation.quantity;
   		var round_pPS = long_pPS.toFixed(2);
   		return round_pPS;
 	}
}

//  creation de deux instances de l'objet

var  pramiracetam 	 = new supplementation('pramiracetam','racetam',104, 200, 10, 'pPS', 'mP', '%', 'www');
var  phenylpiracetam = new supplementation('phenylpiracetam','racetam',48, 90, 10, 'pPS', 'mP', '%', 'www');