// creating an array of objects

let smartDrugs = 
[
	{
	  description: "pramiracetam",
	  category: "nootropics",
	  price: 104,
	  quantity: 200,
	  monthlyServingsNeed: 16,
	  costPerServing: 0.52,
	  productLifetime: null,
	  monthlyCost: null,
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
	  costPerServing: 0.37,
	  productLifetime: null,
	  monthlyCost: null,
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
	  costPerServing: 0.53,
	  productLifetime: null,
	  monthlyCost: null,
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
	  productLifetime: null,
	  monthlyCost: 0.44,
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
	  costPerServing: 0.16,
	  productLifetime: null,
	  monthlyCost: null,
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
	  costPerServing: 0.22,
	  productLifetime: null,
	  monthlyCost: null,
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
	  costPerServing: 0.33,
	  productLifetime: null,
	  monthlyCost: null,
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
	  costPerServing: 0.09,
	  productLifetime: null,
	  monthlyCost: null,
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
      costPerServing: 0.06,
      productLifetime: null,
      monthlyCost: null,
      percentage: null,
      site: "amazon.com",
      url: "https://www.amazon.com/gp/product/B0019LTGC2/ref=ox_sc_act_title_1?smid=A249CL9PVB6VZW&psc=1"
    }
]

// Using .map 

	// costPerServing calcul = price / quantity

	var costPerServing = smartDrugs.map(function(supplement) {
		return ((supplement.price / supplement.quantity).toFixed(2))
	});

	var costPerServing = smartDrugs.map(supplement => ((supplement.price / supplement.quantity).toFixed(2)));
	console.table(costPerServing);

// monthlyCost calcul = costPerServing * monthlyServingsNeed: This nOT wORKING ! WHY ?! (21/02)

	var monthlyCost = smartDrugs.map(function(product) {
		return product.costPerServing * product.monthlyServingsNeed 
	});

	console.table(monthlyCost);

// product.lifetime calcul: see moment.js coz 250 j = 8 months 7 days or 6 days or 5 days

	// this gives an integer of days but doesn't translate into "months" anything

	var lifetime = smartDrugs.map(box => (((box.monthlyServingsNeed * box.quantity)/30).toFixed(2)))
	console.table(lifetime);

// Using .reduce

	// percentage calcul

		// sum calcul : 

		var ArrayTotalSumPrice = smartDrugs.reduce((total, article) => total + article.price, 0);
		console.log(ArrayTotalSumPrice);

		// old way 

	     var somme = 0;
	     for (var x = 0; x < smartDrugs.length; x++){
	       somme += smartDrugs[x].price; }
	       console.log("la somme totale des supplements est de: " + somme +"€"); 


 	var percentage = smartDrugs.map(function(cognitiveEhancer) {
 		return (((cognitiveEhancer.price / ArrayTotalSumPrice)*100).toFixed(1))
 	});
 	console.table(percentage);