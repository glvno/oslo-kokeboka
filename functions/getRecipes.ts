/* code from functions/recipes-read.js */
import faunadb from 'faunadb';

const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET,
  domain: 'db.us.fauna.com',
});

exports.handler = async (event, context) => {
  console.log(`Function 'getRecipes' invoked`);
  const response = await client.query(q.Paginate(q.Match(q.Ref('indexes/all_recipes'))));
  const recipeRefs = response.data;
  console.log('Recipe Refs', recipeRefs);
  console.log(`${recipeRefs.length} recipes found`);
  const getAllRecipeDataQuery = await recipeRefs.map((ref) => {
    return q.Get(ref);
  });
  const ret = await client.query(getAllRecipeDataQuery);
  console.log(JSON.stringify(ret));
  return { statusCode: 200, body: JSON.stringify(ret) };
};
