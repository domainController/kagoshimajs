import {micronutriments} from './jsonArrayOfMicronutriments.js';
import {vitaminTemplate} from './app.js';

document.getElementById("app").innerHTML = `
<h1 class="app-title"> Vitamins (${micronutriments.length} results)</h1>
${micronutriments.map(vitaminTemplate).join('')}
<p class="footer"> These ${micronutriments.length}  vitamins were added recently. Check back soon for updates.</p>
`