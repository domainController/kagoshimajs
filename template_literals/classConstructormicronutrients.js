import * as moment from './moment/moment.min.js';

class Supplement {

	constructor(description, price, servings, monthlyServingsNeed, url, site, photoUrl) {

		this.description   		= description;
		this.price 		   		= price;
		this.servings	   		= servings;
		this.monthlyServingsNeed = monthlyServingsNeed;
		this.url  		   		= url; 
		this.site				= site; 
		this.photoUrl			= photoUrl; 
	}

// COSTS:

	getPricePerServing(){ // PRICE PER SERVING (price/servings)
		return ((this.price / this.servings).toFixed(2));
	}

		getMonthlyCost(){ // COST PER MONTH
		return (this.getPricePerServing() * this.monthlyServingsNeed)
	}

// LIFETIME:

	getProductLifetime(){ // HOW LONG THE PRODUCT WOULD LAST

		var rawProductLifetime = this.monthlyServingsNeed * this.servings;
		return moment.duration(rawProductLifetime, "months").humanize(true);

	}
	
	getNextPurchaseDate(){ // WHEN THE PRODUCT WILL BE OVER

		var nextPurchaseDate_UglyFormat = moment().add(this.rawProductLifetime, 'days').calendar();
		var nextPurchaseDate_NiceFormat = moment(new Date(nextPurchaseDate_UglyFormat)).format('DD MMM');
		return nextPurchaseDate_NiceFormat;
	}

	getLifetime(){ // DISPLAYS
		console.log( "Lifetime:" + " " + humanizedProductLifetime + " " + "(" +  nextPurchaseDate_NiceFormat + ")");
	}

// PERCENTAGE

	getPercentage(){ // PERCENTAGE AMONG ALL SUPPLEMENTATIONS

		var supplementationTotalSum = supplement.reduce((total, article) => total + article.price, 0);
		var percentage = (((this.price / supplementationTotalSum )*100).toFixed(1));
		console.log(percentage + "%");
	}
}

// 2 INSTANCES

let Mg = new Supplement('Magnesium', 12, 500, 90, null, 'amazon.co.uk', null)
let D3 = new Supplement('Vitamin D3', 8, 120, 30, null, 'iHerb', null)

// EXAMPLES

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
	{
	  description: "Vitamin D3",
	  price: 8,
	  servings: 120,
	  monthlyServingsNeed: 30,
	  pricePerServings: null,
	  productLifetime: null,
	  monthlyCost: null,
	  percentage: null,
	  site: "iHerb",
	  photo: "https://s3.images-iherb.com/now/now00372/w/8.jpg",
	},	
*/
