const Recipe_Ingredient = require('../models/Recipe_Ingredient');

const recipeIngredientData = [ 
    // Thai chicken
    {
        // chicken
        amount: 1,
        measurement_unit: "lb",
        recipe_id: "fbcdf20d-bd35-4ada-86b2-d1c95767d2b4",
        ingredient_id: "822b7ef6-9062-4e8f-af2f-7515f93a6380",
    },
    {
        // garlic
        amount: 5,
        measurement_unit: "clove(s)",
        recipe_id: "fbcdf20d-bd35-4ada-86b2-d1c95767d2b4",
        ingredient_id: "0b9f3236-ca95-42fc-884c-2eefe6db8462",
    },
    {
        // chili flakes
        amount: 2,
        measurement_unit: "dash(es)",
        recipe_id: "fbcdf20d-bd35-4ada-86b2-d1c95767d2b4",
        ingredient_id: "ca1d83d8-b2bb-4b3a-addd-2386fc0b51b4",
    },
    {
        // soy sauce
        amount: 3,
        measurement_unit: "tbsp",
        recipe_id: "fbcdf20d-bd35-4ada-86b2-d1c95767d2b4",
        ingredient_id: "c61bcb22-8898-41d8-a05b-677cb615acac",
    },
    {
        // fish sauce
        amount: 3,
        measurement_unit: "tbsp",
        recipe_id: "fbcdf20d-bd35-4ada-86b2-d1c95767d2b4",
        ingredient_id: "0a5eecab-917e-4fbd-a8f3-eb9a0bc6d04f",
    },
    {
        // sugar
        amount: 1,
        measurement_unit: "tbsp",
        recipe_id: "fbcdf20d-bd35-4ada-86b2-d1c95767d2b4",
        ingredient_id: "4658e189-a008-4111-ab6a-ce25be320d45",
    },
    {
        // basil
        amount: 1,
        measurement_unit: "bunch",
        recipe_id: "fbcdf20d-bd35-4ada-86b2-d1c95767d2b4",
        ingredient_id: "5365cc96-43c3-44e6-a619-754e4a5b27cb",
    },
    // quinoa salad
    {
        // quinoa
        amount: 1,
        measurement_unit: "cup",
        recipe_id: "8593be4d-ccc4-4e55-9f62-a1f33649f7ed",
        ingredient_id: "1ddf0f5a-8d60-41ce-93e9-3181807417ff",
    },
    {
        // cucumber
        amount: 1,
        measurement_unit: null,
        recipe_id: "8593be4d-ccc4-4e55-9f62-a1f33649f7ed",
        ingredient_id: "68d097eb-bcf2-4cda-9ed4-3bb3b01b653f",
    },
    {
        // cherry tomato
        amount: 8,
        measurement_unit: "oz",
        recipe_id: "8593be4d-ccc4-4e55-9f62-a1f33649f7ed",
        ingredient_id: "d744a181-f88a-44b9-97bd-56f87dddacfb",
    },
    {
        // red onion
        amount: 1,
        measurement_unit: null,
        recipe_id: "8593be4d-ccc4-4e55-9f62-a1f33649f7ed",
        ingredient_id: "a3418354-f01a-464d-9130-42b7717554df",
    },
    {
        // lemon
        amount: 1,
        measurement_unit: null,
        recipe_id: "8593be4d-ccc4-4e55-9f62-a1f33649f7ed",
        ingredient_id: "e651e4cf-b879-4612-ad87-6371b5d59f95",
    },
    {
        // feta
        amount: 8,
        measurement_unit: "oz",
        recipe_id: "8593be4d-ccc4-4e55-9f62-a1f33649f7ed",
        ingredient_id: "d35851f1-b513-489b-8576-92db08766c97",
    },
    {
        // olive oil
        amount: 3,
        measurement_unit: "tbsp",
        recipe_id: "8593be4d-ccc4-4e55-9f62-a1f33649f7ed",
        ingredient_id: "80a74a8e-2b6b-4b8a-8e50-2e2ee69f6b08",
    },
    // caprese chicken
    {
        // chicken
        amount: 1,
        measurement_unit: "lb",
        recipe_id: "af68d140-179d-4974-8a50-415ee46177ee",
        ingredient_id: "822b7ef6-9062-4e8f-af2f-7515f93a6380",
    },
    {
        // mozz
        amount: 10,
        measurement_unit: "oz",
        recipe_id: "af68d140-179d-4974-8a50-415ee46177ee",
        ingredient_id: "619f8831-f07a-4d0f-93ef-7de3ae3cd597",
    },
    {
        // tomato
        amount: 1,
        measurement_unit: "lb",
        recipe_id: "af68d140-179d-4974-8a50-415ee46177ee",
        ingredient_id: "f84bb9a8-7097-4b1a-a9dc-fbe1117972b5",
    },
    {
        // basil
        amount: .5,
        measurement_unit: "bunch",
        recipe_id: "af68d140-179d-4974-8a50-415ee46177ee",
        ingredient_id: "5365cc96-43c3-44e6-a619-754e4a5b27cb",
    },
    // dill salmon
    {
        // salmon
        amount: 1,
        measurement_unit: "lb",
        recipe_id: "e1846d80-1022-4531-999e-2fe256b959e6",
        ingredient_id: "963198a6-3ff2-418c-b22f-8eec061131e5",
    },
    {
        // lemon
        amount: 3,
        measurement_unit: null,
        recipe_id: "e1846d80-1022-4531-999e-2fe256b959e6",
        ingredient_id: "e651e4cf-b879-4612-ad87-6371b5d59f95",
    },
    {
        // mayo
        amount: .5,
        measurement_unit: "cup",
        recipe_id: "e1846d80-1022-4531-999e-2fe256b959e6",
        ingredient_id: "7aff520b-7fab-4124-81e7-7db72a57b203",
    },
    {
        // dill
        amount: 1,
        measurement_unit: "tbsp",
        recipe_id: "e1846d80-1022-4531-999e-2fe256b959e6",
        ingredient_id: "73c9c872-b4f3-43a8-8ea7-307b097239a9",
    },
    // chocolate chip cookies
    {
        // butter
        amount: 1,
        measurement_unit: "stick",
        recipe_id: "a462fcf0-9db2-47fb-a4f9-e1d9c2cce038",
        ingredient_id: "8736436b-b646-4a9d-95fb-bd64d14040dd",
    },
    {
        // sugar
        amount: 1,
        measurement_unit: "cup",
        recipe_id: "a462fcf0-9db2-47fb-a4f9-e1d9c2cce038",
        ingredient_id: "4658e189-a008-4111-ab6a-ce25be320d45",
    },
    {
        // eggs
        amount: 3,
        measurement_unit: null,
        recipe_id: "a462fcf0-9db2-47fb-a4f9-e1d9c2cce038",
        ingredient_id: "64ba6ff2-8526-4559-b273-16d34e9dc6cd",
    },
    {
        // vanilla
        amount: 1,
        measurement_unit: "tsp",
        recipe_id: "a462fcf0-9db2-47fb-a4f9-e1d9c2cce038",
        ingredient_id: "c93a5cf7-a861-44f7-8c65-edec97a9e815",
    },
    {
        // flour
        amount: 3,
        measurement_unit: "cups",
        recipe_id: "a462fcf0-9db2-47fb-a4f9-e1d9c2cce038",
        ingredient_id: "3589af30-4fd2-4018-8d36-44dbc9003f4b",
    },
    {
        // baking soda
        amount: 2,
        measurement_unit: "tsp",
        recipe_id: "a462fcf0-9db2-47fb-a4f9-e1d9c2cce038",
        ingredient_id: "112492f7-2131-49c8-a5f2-9af2352075f7",
    },
    {
        // salt
        amount: 1,
        measurement_unit: "tsp",
        recipe_id: "a462fcf0-9db2-47fb-a4f9-e1d9c2cce038",
        ingredient_id: "110937fa-7c98-4e43-900d-313ca469e18f",
    },
    {
        // chocolate chips
        amount: 1.5,
        measurement_unit: "cup(s)",
        recipe_id: "a462fcf0-9db2-47fb-a4f9-e1d9c2cce038",
        ingredient_id: "7a4932f9-ddca-4e11-9214-6f8c99e120c1",
    },
];

const seedRecipeIngredients = () => Recipe_Ingredient.bulkCreate(recipeIngredientData);
module.exports = seedRecipeIngredients;
