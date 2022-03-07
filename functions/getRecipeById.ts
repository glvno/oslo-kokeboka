/* code from functions/recipes-read.js */
import faunadb from 'faunadb';
import getId from './utils/getId';

const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET,
  domain: 'db.us.fauna.com',
});

exports.handler = async (event, context) => {
  const id = getId(event.path);
  console.log(event);
  console.log(`Function 'getRecipeById' invoked`);
  const response = await client.query(q.Get(q.Ref(`classes/recipes/${id}`)));
  console.log('success', response);
  return { statusCode: 200, body: JSON.stringify(response) };
};
