/* code from functions/recipes-read.js */
import faunadb from 'faunadb';
import getId from './utils/getId';
const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET,
});

exports.handler = (event, context) => {
  const id = getId(event.path);
};
