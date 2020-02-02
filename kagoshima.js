let budget_kagoshima = [
"billet", 
"nootropiques", 
"vitamines", 
"box", 
"stock de bouffe",
"tram", 
"muscul"];

let incompressible = budget_kagoshima[0];

class KPB {
  constructor(objet, estimation, type, importance){
      this.objet = objet;
      this.estimation = estimation;
      this.type = type;
      this.importance = importance;
  }
}

let nootropics = new KPB("nootropiques", "600", "supplements", "incompressible");

console.log(nootropics);
