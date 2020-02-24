    
    export function blinkPopulateWiz(smartDrugs)

    {
		const tableBody = document.getElementById('smartDrugs');
		let matrixContent = '';

		for(let order of smartDrugs) 
		{
			matrixContent += 
			`<tr>
				<td>${order.description}</td>
				<td>${order.category}</td>
				<td>${order.price}</td>
				<td>${order.quantity}</td>
				<td>${order.monthlyServingsNeed}</td>
				<td>${order.costPerServing}</td>
				<td>${order.productLifetime}</td>
				<td>${order.monthlyCost}</td>
				<td>${order.percentage}</td>
				<td>${order.site}</td>
				<td>${order.url}</td>
			</tr>`
		}

		console.log(matrixContent);
		tableBody.innerHTML = matrixContent;
	}