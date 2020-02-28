import * from './jsonArrayOfMicronutriments.js';
import * from './app.js';
import * as moment from './moment/moment.min.js';


document.getElementById("app").innerHTML = `
	<h1 class="app-title"> Vitamins (${micronutriments.length} results)</h1>
	${micronutriments.map(vitaminTemplate).join('')}
	<p class="footer"> These ${micronutriments.length}  vitamins were added recently. Check back soon for updates.</p>
	<p><strong> Lifetime:</strong>${humanizeProductLifetime(vitamin.productLifetime)}</p>


/*
	{
	  description: "Magnesium",
	  price: 12,
	  quantity: 500,
	  monthlyServingsNeed: 90, 
	  pricePerServings: null,
	  productLifetime: null,
	  monthlyCost: null,
	  percentage: null,
	  site: "amazon.co.uk",
	  photo: "https://images-na.ssl-images-amazon.com/images/I/61dRaF6xDML._SL1000_.jpg",
	},
*/
	`