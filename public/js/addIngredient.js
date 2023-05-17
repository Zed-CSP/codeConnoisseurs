addRecipeForm.addEventListener('click', 'add-btn', async (event) => {
    event.preventDefault();
    
const ingredientList = document.getElementById('ingredient-data1'); //get parent ingredient fieldset

//increment number at end of ids
let i = 2
const ingredientNameId = 'ingredient' + i++;
const quantityId = 'quantity' + i++;
const unitId = 'unit' + i++;

//template literal for new ingredient fieldset
const ingredientTemplate = `
<fieldset>
    <datalist id="${ingredientNameId}">
        {{#each ingredient}}
            <option value="{{ingredient}}"></option>
        {{/each}}
    </datalist>
    <label for="quantity1">Quantity:</label>
    <input id="${quantityId}" type="text" name="quantity1" placeholder="Quantity" required/>
    <label for="unit1">Unit:</label>
    <input id="${unitId}" type="text" name="unit1" placeholder="Unit" required/>
</fieldset>
`;

//create new ingredient fieldset
const newIngredient = document.createElement(ingredientTemplate);
//increments number after 'ingredient-data'
newIngredient.id = 'ingredient-data' + i++;
//append new ingredient form to parent fieldset 
newIngredient.appendChild(ingredientList); 

});