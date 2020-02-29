/*All these declared class properties and functions in parameters work just fine except those commented.
this file has been created in order to test the hypertheorical and intuitive classConstructormicronutrients.js
created under limited knowledge*/

// Here is the moment.s import

const moment = require("moment");

class Supplement {
	constructor(description, price, servings, monthlyServingsNeed, getPricePerServing, getMonthlyCost, getrawProductLifetime, getHumanizedProductLifetime){
		this.description = description;
		this.price = price;
		this.servings = servings;
		this.monthlyServingsNeed = monthlyServingsNeed;
		this.getPricePerServing = function() {  // PRICE PER SERVING (price/servings)
		return((this.price / this.servings).toFixed(2)+"€");
		};
		this.getMonthlyCost = function() { // COST PER MONTH
		return ((((this.price / this.servings) * this.monthlyServingsNeed).toFixed(2))+"€");
		};
		this.getHumanizedProductLifetime = function() { // HOW LONG THE PRODUCT WOULD LAST
			moment.relativeTimeThreshold('d',30); // is it working ? i dont even know
			return moment.duration(this.servings, "days").humanize(true);
		};
		this.getRawNextPurchaseDate = function() { // WHEN THE PRODUCT WILL BE OVER
			return moment().add(this.servings, 'days').calendar();
		};
/*
		this.getNicePurchaseDate = function() { //CAN WE THIS WORK SOME WAY : "this.getRawNextPurchaseDate()"
		return moment new Date(this.getRawNextPurchaseDate()).format('DD MMM');
		};*/
	}
}			
/*	
	displayLifetime(){ // DISPLAYS
		return `Lifetime: ${humanizedProductLifetime} (${nextPurchaseDate_NiceFormat})`;
		};
	
	getPercentage(){ // PRICE PERCENTAGE AMONG ALL SUPPLEMENTS
		let supplementationTotalSum = supplement.reduce((total, article) => total + article.price, 0);
		let percentage = (((this.price / supplementationTotalSum )*100).toFixed(1));
		return `${percentage}%`;
	}*/


let D3 = new Supplement("Vitamin D3", 8, 120, 30);
let Mg = new Supplement("Magnesium", 12, 170, 90);

console.log(`Le cout mensuel est de ${Mg.getMonthlyCost()}`);
console.log(`Le prix par prise est de ${Mg.getPricePerServing()}`);
console.log(`Duree du produit en jours est de ${Mg.servings} jours`);
console.log(`Expires ${Mg.getHumanizedProductLifetime()}`);
console.log(Mg.getRawNextPurchaseDate());
/*console.log(D3.getProductLifetime());*/

// 2 EXAMPLES FROM OLD ARRAY WITH NON UPDATED PROPERTIES

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
	  pricePerServing: null,
	  productLifetime: null,
	  monthlyCost: null,
	  percentage: null,
	  site: "iHerb",
	  photo: "https://s3.images-iherb.com/now/now00372/w/8.jpg",
	},	
*/