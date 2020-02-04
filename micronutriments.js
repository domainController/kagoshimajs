  
    let plane = {
  genre: "flight ticket",
  estimation : 600 
  type: "transportation", 
  importance: "incompressible",
  pourcentage: 20 ;
};
    let smartDrug = {
  genre: "nootropics",
  estimation : 300 
  type: "supplements", 
  importance: "primordial",
  pourcentage: 20 ;
};

  let micronutriment = {
  genre: "vitamins",
  estimation : 500 
  type: "supplements", 
  importance: "primordial",
  pourcentage: 20 ;
};

  let box = {
  genre: "self-storage",
  estimation : 600 
  type: "logement", 
  importance: "indispensable",
  pourcentage: 20 ;
};

  let foodStock = {
  genre: "pasta",
  estimation : 600 
  type: "alimentation", 
  importance: "comfort",
  pourcentage: 20 ;
};

  let transportPass = {
  genre: "bus pass",
  estimation : 700 
  type: "transportation", 
  importance: "comfort",
  pourcentage: 20 ;

  let hikingGear = {
  genre: "matos",
  estimation : 500 
  type: "gear", 
  importance: "comfort",
  pourcentage: 20 ;

};


console.log(micronutriment);
console.log(micronutriment.type);

 let flight ticket = new budget_category("flight ticket", "600", "transportation", "incompressible");
    let smartDrugs = new budget_category("nootropics", "300", "supplements", "primordial");
    let micronutriments = new budget_category("vitamins", "600", "supplements", "primordial");
    let box = new budget_category("self-storage", "600", "logement", "indispensable");
    let pasta = new budget_category("food stock", "600", "alimentation", "necessaire");
    let bus = new budget_category("bus pass", "600", "transportation", "comfort");
    let gym = new budget_category("gym pass", "600", "hygiene", "comfort");
    let misc = new budget_category("misc", "600", "extra", "ideal");