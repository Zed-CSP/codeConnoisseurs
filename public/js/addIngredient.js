addRecipeForm.addEventListener('click', 'add-btn', async (event) => {
    event.preventDefault();
    
    const ingredientList = document.getElementById('ingredient-data1'); //get parent ingredient fieldset

    //increment number at end of ids
    let i = 2
    const ingredientDataId = 'ingredient-data' + i++;
    const ingredientNameId = 'ingredient' + i++;
    const quantityId = 'quantity' + i++;
    const unitId = 'unit' + i++;

    //template literal for new ingredient fieldset
    const ingredientTemplate = `
        <fieldset id="${ingredientDataId}">
            <label for="${ingredientNameId}">Ingredient:</label>
            <select name="${ingredientNameId}" id="${ingredientNameId}">
                {{#each ingredients}}
                    <option value="{{this}}">{{this}}</option>
                {{/each}}
            </select>
            <label for="${quantityId}">Quantity:</label>
            <input id="${quantityId}" type="text" name="${quantityId}" placeholder="Quantity" required/>
            <label for="${unitId}">Unit:</label>
            <input id="${unitId}" type="text" name="${unitId}" placeholder="Unit" required/>
        </fieldset>
        `;


    //create new ingredient fieldset
    const newIngredient = document.createElement(ingredientTemplate);

    //append new ingredient form to parent fieldset 
    newIngredient.appendChild(ingredientList); 

});
