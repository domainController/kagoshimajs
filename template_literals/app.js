export function vitaminTemplate(vitamin) 

{
	return `
	<div class="vitamin">
		<img class="vitamin-photo" src="${vitamin.photo}">
		<h2  class="vitamin-name">${vitamin.description} <span class="price">(${vitamin.price}€)</span></h2>
	</div>
	` 
}