const addRecipeForm = document.getElementById('add-recipe-form');
const successModal = document.getElementById('success-modal');

addRecipeForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  // Get recipe form inputs
  const formData = new FormData(addRecipeForm);
  const name = formData.get('recipe-name');
  const description = formData.get('description');
  const instructions = formData.get('instructions');
  
  // Get ingredient info
  // Create array of fieldset elements
  const fieldsets = document.getElementsByTagName('fieldset');
  const fieldsetsArr = Array.from(fieldsets);
  // Create array of ingredient objects
  const ingredientsArr = fieldsetsArr.map(fieldset => {
    // Create array of input elements within the fieldset
    const inputs = fieldset.getElementsByTagName('input');
    const inputsArr = Array.from(inputs);
    // Create a property for each input and put them into an object
    let ingredientObj = {};
    inputsArr.forEach(input => {
      ingredientObj[input.name] = input.value;
    });
    // Return the object
    return ingredientObj;
  });

  // If any required fields are missing, alert user
  if (!name || !description || !instructions || ingredientsArr.length === 0) {
    return alert('Please fill in all required fields');
  };

  // Put inputs into an object to send to back-end
  const recipeBody = {
    name,
    description,
    instructions,
    ingredientsArr,
  };

  try {
    // Get information about logged in user
    const userResponse = await fetch('/api/users/loggedin');

    // If user is not logged in, send to login page
    if (!userResponse.ok) {
        location.href = '/';
        return;
    }

    // Add creator id to body object
    recipeBody.creatorId = await userResponse.json();

    // POST request to add recipe
    const response = await fetch('/api/recipe', {
      method: 'POST',
      body: JSON.stringify(recipeBody),
      headers: {'Content-Type': 'application/json'},
    });
    
    // If recipe was added, show success modal, else show error
    if (response.ok) {
      successModal.classList.add('show');
      successModal.style.display = 'block';
    } else {
      alert('Failed to save recipe');
    }
  } catch (error) {
    console.error(error);
  };
});
