const Recipe = require('../models/Recipe');

const recipeData = [ 
    {
        id: "fbcdf20d-bd35-4ada-86b2-d1c95767d2b4",
        name: "Spicy Thai Basil Chicken",
        description: "A flavorful and spicy Thai dish made with tender chicken, fresh basil, and aromatic spices.",
        instructions: "In a hot skillet, sauté chicken with garlic and chili flakes until cooked through. Add soy sauce, fish sauce, and sugar, and stir well. Toss in fresh basil leaves and cook for an additional minute. Serve hot with steamed rice.",
        creator_id: "3590669f-60ec-4de6-a1ab-0662039366aa",
    },
    {
        id: "8593be4d-ccc4-4e55-9f62-a1f33649f7ed",
        name: "Mediterranean Quinoa Salad",
        description: "A light and refreshing salad featuring quinoa, fresh vegetables, and tangy feta cheese.",
        instructions: "Cook quinoa and let it cool. In a bowl, combine chopped cucumbers, cherry tomatoes, red onions, and cooked quinoa. Drizzle with olive oil, lemon juice, and sprinkle with crumbled feta cheese. Toss gently to combine. Refrigerate for an hour before serving.",
        creator_id: "3593569f-6fec-4de6-a1ab-0662085366aa",
    },
    {
        id: "af68d140-179d-4974-8a50-415ee46177ee",
        name: "Caprese Stuffed Chicken",
        description: "Succulent chicken breasts filled with melted mozzarella cheese, fresh tomatoes, and basil.",
        instructions: "Preheat the oven to 375°F (190°C). Make a pocket in each chicken breast and stuff with sliced tomatoes, mozzarella cheese, and basil leaves. Season with salt, pepper, and Italian herbs. Bake for 25-30 minutes until the chicken is cooked through. Serve hot.",
        creator_id: "3590669f-60ec-4de6-a1ab-0662085394bb",
    },
    {
        id: "e1846d80-1022-4531-999e-2fe256b959e6",
        name: "Baked Salmon with Lemon-Dill Sauce",
        description: "Oven-baked salmon fillets served with a zesty lemon-dill sauce, perfect for a light and healthy meal.",
        instructions: "Preheat the oven to 400°F (200°C). Season salmon fillets with salt, pepper, and lemon juice. Place them on a baking sheet lined with parchment paper and bake for 12-15 minutes. Meanwhile, mix together mayonnaise, fresh dill, lemon zest, and a pinch of salt to make the sauce. Serve the salmon with the sauce drizzled on top.",
        creator_id: "3234569f-60ec-4de6-a1ab-0662085366aa",
    },
    {
        id: "a462fcf0-9db2-47fb-a4f9-e1d9c2cce038",
        name: "Chocolate Chip Cookies",
        description: "Classic homemade chocolate chip cookies with a soft and chewy texture and gooey chocolate chips.",
        instructions: "Preheat the oven to 375°F (190°C). In a bowl, cream together softened butter and sugar. Beat in eggs and vanilla extract. In a separate bowl, combine flour, baking soda, and salt. Gradually add the dry ingredients to the butter mixture and mix well. Stir in chocolate chips. Drop spoonfuls of dough onto a baking sheet and bake for 10-12 minutes until golden brown. Allow them to cool before serving.",
        creator_id: "3590669f-60ec-4de6-a1ab-0662085395aa",
    },
];

const seedRecipes = () => Recipe.bulkCreate(recipeData);
module.exports = seedRecipes;
