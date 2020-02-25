import {expensesCategories} from './arrayOfExpensesCategories.js';


buildTable(expensesCategories)



	function buildTable(expensesCategories){
		var table = document.getElementById('myTable')

		for (let purchaseDomain of expensesCategories)
		{
			var row = `<tr>
							<td>${purchaseDomain.description}</td>
							<td>${purchaseDomain.category}</td>
							<td>${purchaseDomain.estimation}</td>
							<td>${purchaseDomain.type}</td>
							<td>${purchaseDomain.urgency}</td>
							<td>${purchaseDomain.importance}</td>
							<td>${purchaseDomain.priority}</td>
							<td>${purchaseDomain.impact}</td>
							<td>${purchaseDomain.percentage}</td>
					  </tr>`
			table.innerHTML += row
		}
	}
