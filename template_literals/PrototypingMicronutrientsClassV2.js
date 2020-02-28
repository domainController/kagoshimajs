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
		return (((this.price / this.servings) * this.monthlyServingsNeed)+"€");
		};
		this.getRawProductLifetime = function() { // HOW LONG THE PRODUCT WOULD LAST
			return ((this.servings / this.monthlyServingsNeed).toFixed(2));
		};
		this.getHumanizedProductLifetime = function() {
			return moment.duration(this.getRawProductLifetime).asMonths();
		}
	}
}

/*/*		this.getNextPurchaseDate = function() { // WHEN THE PRODUCT WILL BE OVER
			let nextPurchaseDate_UglyFormat = moment().add(this.rawProductLifetime, 'days').calendar();
			let nextPurchaseDate_NiceFormat = moment(new Date(nextPurchaseDate_UglyFormat)).format('DD MMM');
			return nextPurchaseDate_NiceFormat;
		};*/
	
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
let Mg = new Supplement("Magnesium", 12, 500, 90);

console.log(D3.getMonthlyCost());
console.log(D3.getPricePerServing());
console.log(Mg.getRawProductLifetime());
console.log(D3.getHumanizedProductLifetime());

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
	  pricePerServings: null,
	  productLifetime: null,
	  monthlyCost: null,
	  percentage: null,
	  site: "iHerb",
	  photo: "https://s3.images-iherb.com/now/now00372/w/8.jpg",
	},	
*/