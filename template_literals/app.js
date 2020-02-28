export let productLifetime = micronutriments.map(article => (((article.monthlyServingsNeed * article.quantity) / 30)))


export function vitaminTemplate(vitamin) 

{
	return `
	<div class="vitamin">
		<img class="vitamin-photo" src="${vitamin.photo}">
		<h2  class="vitamin-name">${vitamin.description} <span class="price">(${vitamin.price}€)</span></h2>
		<p><strong>Lifetime:</strong>${humanizeProductLifetime(vitamin.productLifetime)}</p>
	</div>
	` 
};

export function humanizeProductLifetime()

{
    moment.duration(${vitamin.productLifetime}, "months").humanize();
}

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