class Supplement {
	constructor(description, price, servings, monthlyServingsNeed, getPricePerServing, getMonthlyCost){
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
	}
}


let D3 = new Supplement("Vitamin D3", 8, 120, 30);
let Mg = new Supplement("Magnesium", 12, 500, 90);

console.log(D3.getMonthlyCost());
console.log(D3.getPricePerServing());
