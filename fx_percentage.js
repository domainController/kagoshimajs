// creating an array of objects

let nootropics = [

	{
	  description: "pramiracetam",
	  category: "racetam",
	  price: 104,
	  quantity: 200,
	  monthlyServingsNeed: 10,
	  pricePerServings: "pricePerServingsFX",
	  monthlyPrice: "monthlyPriceFX",
	  percentage: "percentageFX",
	  url: "https://www.intellimeds.net/pramiracetam/pramiracetam-capsules"
	},	
	{
	  description: "lion's mane",
	  category: "fongi",
	  price: 48,
	  quantity: 90,
	  monthlyServingsNeed: 60,
	  pricePerServings: "pricePerServingsFX",
	  monthlyPrice: "monthlyPriceFX",
	  percentage: "percentageFX",
	  url: "https://reachgenius.se/en/nootropics/phenylpiracetam.html#/35-amount-90_capsules"
	},	
	{
	  description: "theine/caffeine",
	  category: "herbal",
	  price: 48,
	  quantity: 90,
	  monthlyServingsNeed: 3,
	  pricePerServings: "pricePerServingsFX",
	  monthlyPrice: "monthlyPriceFX",
	  percentage: "percentageFX",
	  url: "https://reachgenius.se/en/nootropics/phenylpiracetam.html#/35-amount-90_capsules"
	},
	{
	  description: "alpha-gpc",
	  category: "cholinergics",
	  price: 37,
	  quantity: 120,
	  monthlyServingsNeed: 15, 
	  pricePerServings: "pricePerServingsFX",
	  monthlyPrice: "monthlyPriceFX",
	  percentage: "percentageFX",
	  url: "https://reachgenius.se/en/nootropics/phenylpiracetam.html#/35-amount-90_capsules"
	},
	{
	  description: "choline bitartre",
	  category: "cholinergics",
	  price: 37,
	  quantity: 120,
	  monthlyServingsNeed: 15, 
	  pricePerServings: "pricePerServingsFX",
	  monthlyPrice: "monthlyPriceFX",
	  percentage: "percentageFX",
	  url: "https://reachgenius.se/en/nootropics/phenylpiracetam.html#/35-amount-90_capsules"
	},
	{
	  description: "phenylpiracetam",
	  category: "racetam",
	  price: 48,
	  quantity: 90,
	  monthlyServingsNeed: 10,
	  pricePerServings: "pricePerServingsFX",
	  monthlyPrice: "monthlyPriceFX",
	  percentage: "percentageFX",
	  url: "https://reachgenius.se/en/nootropics/phenylpiracetam.html#/35-amount-90_capsules"
	},
]

// calcul de la somme totale

  function percentage()
  {
     var somme = 0;
     for (var x = 0; x < nootropics.length; x++)
     {
       somme += nootropics[x].price; 
       console.log("la somme totale est de :" + somme); 
   
      // calcul du pourcentage 
   
       var whole = 0; var part = 0;
   
       for (var x = 0; x < nootropics.length; x++){
       part = nootropics[x].price ;
       whole += nootropics[x].price;
    console.log("le part est de:"+" "+part+"€");
    console.log((part/somme)*100);
   }
 }
}


percentage()