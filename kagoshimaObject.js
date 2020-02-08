 
  let plane = {
  description: "flight ticket",
  estimation: 600 
  type: "transportation", 
  importance: "incompressible",
  percentage: percentage()
};
 
 let supplement = {
  description: ["smartDrugs", "vitamins", "proteins"]
  estimation  300, 
  type: "supplements", 
  importance: "primordial",
  percentage: percentage()
};

// creation des objets supplements 

         let smartDrugs = {
          description: "nootropics",
          estimation: 500, 
          type: "supplements", 
          importance: "primordial",
          percentage: percentage()
        };

         let micronutriment = {
          description: "vitamins",
          estimation: 500, 
          type: "supplements", 
          importance: "primordial",
          percentage: percentage()
        };

         let proteins = {
          description: "vitamins",
          estimation: 500, 
          type: "supplements", 
          importance: "primordial",
          percentage: percentage()
        };

// fin de la creation des objets supplements 

 let box = {
  description: "self-storage",
  estimation: 600,
  type: "logement", 
  importance: "indispensable",
  percentage: percentage()
};

 let foodStock = {
  description: "pasta",
  estimation : 600, 
  type: "alimentation", 
  importance: "comfort",
  percentage: percentage()
};

 let movingAround = {
  description: "bus pass",
  estimation: 700, 
  type: "transportation", 
  importance: "comfort",
  percentage: percentage()
 };

 let gym = {
  description: "gym pass",
  estimation: 350, 
  type: "hygiene", 
  importance: "comfort",
  percentage: percentage()
};

  let gear = {
  description: "gear upgrade",
  estimation: 500, 
  type: "gear", 
  importance: "comfort",
  percentage: percentage()
};

  let miscellaneous = {
  description: "misc",
  estimation: 200, 
  type: "divers", 
  importance: "extra",
  percentage: percentage()
};



// esquisse d'un calcul de  la valeur percentage
/* percentage: function(){
	console.log('')
}
/*