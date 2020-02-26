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

    var rawProductLifetime = micronutriments.map(article => (((article.monthlyServingsNeed * article.quantity)/30)))
    console.table(rawProductLifetime);

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