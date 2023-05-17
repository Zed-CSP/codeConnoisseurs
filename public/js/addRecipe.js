addRecipeForm.addEventListener('click', 'submit-btn', async (event) => {
    event.preventDefault();
    const addRecipeForm = document.getElementById("add-recipe-form");
    const formData = new FormData(addRecipeForm);
    const recipeName = formData.get('name');
    const description = formData.get('description');
    const ingredientName = formData.get('ingredient1');
    const ingredientQuantity = formData.get('quantity1');
    const ingredientUnit = formData.get('unit1');
    const instructions = formData.get('instructions');
    const recipeBody = {recipeName, description, instructions};
    const ingredientBody = {ingredientName}
    const recIngBody = {ingredientQuantity, ingredientUnit}

    try {
      const res = await fetch('/api/recipe', {
        method: 'POST',
        body: JSON.stringify(recipeBody),
        headers: {'Content-Type': 'application/json'},
      });
      const recipeData = await res.json();
      console.log(recipeData);
      } catch (error) {
      console.error(error);
      };
    try { //adjust this in order to use ingredient name to get UUID to populate the recipe_ingredient table
      const res = await fetch('/api/ingredients/', {
        method: 'POST',
        body: JSON.stringify(ingredientBody),
        headers: {'Content-Type': 'application/json'},
      })
      const ingredientData = await res.json();
      console.log(ingredientData);
    } catch (error) {
      console.error(error);
    };
    try {
      const res = await fetch('/api/recipeingredient', {
        method: 'POST',
        body: JSON.stringify(recIngBody),
        headers: {'Content-Type': 'application/json'},
      })
      const recIngData = await res.json();
      console.log(recIngData);
    } catch (error) {
      console.error(error);
    };
  });