// creating an array of objects

let smartDrugs = 
[
	{
	  description: "pramiracetam",
	  category: "nootropics",
	  price: 104,
	  quantity: 200,
	  monthlyServingsNeed: 16,
	  costPerServing: null,
	  monthlyPrice: null,
	  percentage: null,
	  site: "intellimeds.es",
	  url: "https://www.intellimeds.net/pramiracetam/pramiracetam-capsules",
	},
	{
	  description: "semax",
	  category: "nootropics",
	  price: 22,
	  quantity: 60,
	  monthlyServingsNeed: 5, 
	  costPerServing: null,
	  monthlyPrice: null,
	  percentage: null,
	  site: "reachgenius.se",
	  url: "https://reachgenius.se/en/nootropics/semax.html"
	},
	{
	  description: "phenylpiracetam",
	  category: "nootropics",
	  price: 48,
	  quantity: 90,
	  monthlyServingsNeed: 5,
	  costPerServing: null,
	  monthlyPrice: null,
	  percentage: null,
	  site: "reachgenius.se",
	  url: "https://reachgenius.se/en/nootropics/phenylpiracetam.html#/35-amount-90_capsules"
	},	
	{
	  description: "noopept",
	  category: "nootropics",
	  price: 44,
	  quantity: 100,
	  monthlyServingsNeed: 5,
	  costPerServing: null,
	  monthlyPrice: null,
	  percentage: null,
	  site: "intellimeds.es",
	  url: "https://www.intellimeds.net/noopept-tablets-20mg"
	},
	{
	  description: "lion's mane",
	  category: "stress",
	  price: 19,
	  quantity: 120,
	  monthlyServingsNeed: 120,
	  costPerServing: null,
	  monthlyPrice: null,
	  percentage: null,
	  site: "reachgenius.se",
	  url: "https://reachgenius.se/en/nootropics/lion-s-mane.html"
	},	
	{
	  description: "theine",
	  category: "stress",
	  price: 22,
	  quantity: 100,
	  monthlyServingsNeed: 3,
	  costPerServing: null,
	  monthlyPrice: null,
	  percentage: null,
	  site: "intellimeds.es",
	  url: "https://www.intellimeds.net/l-theanine/l-theanine-tablets"
	},
	{
	  description: "alpha-gpc",
	  category: "cholinergics",
	  price: 20,
	  quantity: 60,
	  monthlyServingsNeed: 15, 
	  costPerServing: null,
	  monthlyPrice: null,
	  percentage: null,
	  site: "iHerb.com",
	  url: "https://ie.iherb.com/pr/Doctor-s-Best-Natural-Brain-Enhancers-wtih-AlphaSize-and-SerinAid-60-Veggie-Caps/21289"
	},
	{
	  description: "choline bitartre",
	  category: "cholinergics",
	  price: 17,
	  quantity: 180,
	  monthlyServingsNeed: 15, 
	  costPerServing: null,
	  monthlyPrice: null,
	  percentage: null,
	  site: "amazon.co.uk",
	  url: "https://www.amazon.co.uk/gp/product/B013CRN3S8"
	},
    {
      description: "melatonin",
      category: "sleep",
      price: 10,
      quantity: 180,
      monthlyServingsNeed: 60,
      costPerServing: null,
      monthlyPrice: null,
      percentage: null,
      site: "amazon.com",
      url: "https://www.amazon.com/gp/product/B0019LTGC2/ref=ox_sc_act_title_1?smid=A249CL9PVB6VZW&psc=1"
    }
]


// costPerServing = price / quantity

var costPerServings = smartDrugs.map( function(costPerServing) {
	return costPerServing.price / costPerServing.quantity
});

var costPerServing = smartDrugs.map( price => smartDrugs.price / smartDrugs.quantity); 
console.table(costPerServings);

var costPerServing = smartDrugs.map((prixDeRevient) => {
console.log(smartDrugs.price)
}

console.table(costPerServings);

/*
let new_array = arr.map(function callback( currentValue[, index[, array]]) {
    // return element for new_array
}[, thisArg])
/*

