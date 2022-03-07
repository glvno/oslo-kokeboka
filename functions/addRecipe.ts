/* code from functions/recipes-create.js */
import faunadb from 'faunadb'; /* Import faunaDB sdk */

/* configure faunaDB Client with our secret */
const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET,
  domain: 'db.us.fauna.com',
});

/* export our lambda function as named "handler" export */
exports.handler = async (event, context, callback) => {
  /* parse the string body into a useable JS object */
  const data = JSON.parse(event.body);
  console.log('Function `recipe-create` invoked', data);
  const recipeItem = {
    data: data,
  };
  /* construct the fauna query */
  const response = await client.query(q.Create(q.Ref('classes/recipes'), recipeItem));
  console.log('success, response');
  return { statusCode: 200, body: JSON.stringify(response) };
};
