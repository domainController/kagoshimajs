import {expensesCategories} from './arrayOfExpensesCategories.js';


buildTable(expensesCategories)



	function buildTable(expensesCategories){
		var table = document.getElementById('myTable')

		for (let purchase of expensesCategories)
		{
			var row = `<tr>
							<td>${purchase.description}</td>
							<td>${purchase.category}</td>
							<td>${purchase.estimation}</td>
							<td>${purchase.type}</td>
							<td>${purchase.urgency}</td>
							<td>${purchase.importance}</td>
							<td>${purchase.priority}</td>
							<td>${purchase.impact}</td>
							<td>${purchase.percentage}</td>
					  </tr>`
			table.innerHTML += row
		}
	}
