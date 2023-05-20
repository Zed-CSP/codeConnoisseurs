const addIngredientBtn = document.getElementById('add-btn');
const ingredientContainer = document.getElementById('ingredient-container');

// Set currentId outside of event listener so it doesn't reset each time button is clicked
let currentId = 1;

addIngredientBtn.addEventListener('click', async (event) => {
    event.preventDefault();

    // Increment currentId and append to the id values in the fieldset
    currentId++;
    const ingredientDataId = 'ingredient-data' + currentId;
    const ingredientNameId = 'ingredient' + currentId;
    const amountId = 'amount' + currentId;
    const unitId = 'unit' + currentId;

    // Create new fieldset with incremented ids
    const ingredientFieldset = document.createElement('fieldset');
    ingredientFieldset.setAttribute('id', `${ingredientDataId}`);
    ingredientFieldset.innerHTML = `
        <label for="${ingredientNameId}" class="form-label">Ingredient:</label>
        <div class="row">
            <div class="col-11">
                <input class="form-control" list="datalistOptions" id="${ingredientNameId}" placeholder="Type to search ingredient...">
            </div>
        </div>
        <datalist id="datalistOptions">
            {{#each ingredients as |ingredient|}}
                <option value="{{ingredient.name}}"></option>
            {{/each}}
        </datalist>
        <div class="row">
            <div class="col-6 col-sm-4">
                <input class="form-control" id="${amountId}" type="text" name="${amountId}" placeholder="Amount" required/>  
            </div>
            <div class="col-6 col-sm-4">
                <input class="form-control" id="${unitId}" type="text" name="${unitId}" placeholder="Unit"/>
            </div>
        </div>
    `;

    // Add new fieldset below last fieldset
    ingredientContainer.appendChild(ingredientFieldset);
});
