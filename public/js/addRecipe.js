const addRecipeForm = document.getElementById('add-recipe-form');
const successModal = document.getElementById('success-modal');

addRecipeForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  // Get recipe form inputs
  const formData = new FormData(addRecipeForm);
  const name = formData.get('name');
  const description = formData.get('description');
  const ingredientName = document.getElementById('ingredient1').value;
  const ingredientAmount = formData.get('amount1');
  const ingredientUnit = formData.get('unit1');
  const instructions = formData.get('instructions');
  
  // If any required fields are missing, alert user
  if (!name || !description || !instructions || !ingredientName || !ingredientAmount) {
    return alert('Please fill in all required fields');
  };

  // Put inputs into an object to send to back-end
  const recipeBody = {
    name,
    description,
    instructions,
    ingredientName,
    ingredientAmount,
    ingredientUnit
  };

  try {
    // Get information about logged in user
    const userResponse = await fetch('/api/users/loggedin');

    // If user is not logged in, send to login page
    if (!userResponse.ok) {
        location.href = '/login';
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
