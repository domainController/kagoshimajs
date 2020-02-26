export function vitaminTemplate(vitamin) 

{
	return `
	<div class="vitamin">
		<img class="vitamin-photo" src="${vitamin.photo}">
		<h2  class="vitamin-name">${vitamin.description} <span class="price">(${vitamin.price}€)</span></h2>
		<p><strong>Lifetime:</strong>${productLifetime()}</p>
	</div>
	` 
}

export function humanizeProductLifetime (){

	let rawProductLifetime = micronutriments.map(article => (((article.monthlyServingsNeed * article.quantity)/30)))
    console.table(rawProductLifetime);

    moment.duration(${rawProductLifetime}, "months").humanize();

		
	}