// creating an array of objects

class Supplement {

	constructor(description, price, servings, monthlyServingsNeed, url, site, photo) {

		this.description   		= description;
		this.price 		   		= price;
		this.servings	   		= servings;
		this.monthlyServingsNeed = monthlyServingsNeed;
		this.url  		   		= url; 
		this.site				= site; 
		this.photo				= photo; 
	}

	getPricePerServing(){ // 1- PRICE PER SERVING (price/servings)
		return ((this.price / this.servings).toFixed(2));
	}

	getProductLifetime(){ // 2 HOW LONG THE PRODUCT WOULD LAST

		var rawProductLifetime = this.monthlyServingsNeed * this.servings;
		return moment.duration(rawProductLifetime, "months").humanize(true);
	}
	
	getMonthlyCost(){ // 3- COST PER MONTH
		return (this.pricePerServing() * this.monthlyServingsNeed)
	}

	getPercentage(){ // 4- PERCENTAGE AMONG ALL SUPPLEMENTATIONS

		var SupplementationTotalSum = supplement.reduce((total, article) => total + article.price, 0);
		return (((this.price / SupplementationTotalSum )*100).toFixed(1));
		console.table(percentage + "%");
	}

	getNextPurchaseDate(){ // 5- WHEN THE PRODUCT WILL BE OVER

		var nextPurchaseDate_UglyFormat = moment().add(180, 'days').calendar();
		var nextPurchaseDate_NiceFormat = moment(new Date(nextPurchaseDate_UglyFormat)).format('DD MMM');
	}
}

/*
	{
	  description: "Magnesium",
	  price: 12,
	  servings: 500,
	  monthlyServingsNeed: 90, 
	  pricePerServing: null,
	  productLifetime: null,
	  monthlyCost: null,
	  percentage: null,
	  site: "amazon.co.uk",
	  photo: "https://images-na.ssl-images-amazon.com/images/I/61dRaF6xDML._SL1000_.jpg",
	},
*/

// 1- PRICE PER SERVING (price/servings)

	var costPerServing = smartDrugs.map(function(supplement) {
		return ((supplement.price / supplement.servings).toFixed(2))
	});

	var costPerServing = smartDrugs.map(supplement => ((supplement.price / supplement.servings).toFixed(2)));
	console.table(costPerServing);


	pricePerServing() {
   		var long_pPS = supplementation.price / supplementation.servings;
   		var round_pPS = long_pPS.toFixed(2);
   		return round_pPS;
 	}
}

// 3: PERCENTAGE AMONG ALL SUPPLEMENTATIONS

// retourne le cout de revient du nootroopics par servings:



//  creation de deux instances de l'objet

var  pramiracetam 	 = new supplementation('pramiracetam','racetam',104, 200, 10, 'pPS', 'mP', '%', 'www');
var  phenylpiracetam = new supplementation('phenylpiracetam','racetam',48, 90, 10, 'pPS', 'mP', '%', 'www');




// monthlyCost calcul = costPerServing * monthlyServingsNeed: This nOT wORKING ! WHY ?! (21/02)

	var monthlyCost = smartDrugs.map(function(product) {
		return product.costPerServing * product.monthlyServingsNeed 
	});

	console.table(monthlyCost);

// product.lifetime calcul: see moment.js coz 250 j = 8 months 7 days or 6 days or 5 days

	// this gives an integer of days but doesn't translate into "months" anything

    var rawProductLifetime = micronutriments.map(article => (((article.monthlyServingsNeed * article.servings)/30)))
    console.table(rawProductLifetime);

// Using .reduce

	// percentage calcul

		// sum calcul : 

	

		function 
		var percentage = micronutriments.map(function(cognitiveEhancer) {
 		return (((cognitiveEhancer.price / ArrayTotalSumPrice)*100).toFixed(1))
 	});
 	console.table(percentage + "%");