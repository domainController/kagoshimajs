let expenses = [
	{
	  category: "translation",
	  estimation: 600,
	  type: "transitioning", 
	  urgency: "critical",
	  importance: "incompressible",
	  priority: "critical",
	  impact: 1,
	  percentage: 20
	},
 	{
	  category: "supplements",
	  estimation:  300, 
	  type: "supplements",
	  urgency: "high",
	  importance: "primordial",
	  priority: "critical",
	  impact: 1,
	  percentage: 20
	},
];

// imprime tous les objets

for (var i in expenses) {
	console.table(expenses[i]);

for ( let i of expenses)
  {console.table(i); }
}

