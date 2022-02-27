const bydels = [
  'Alna',
  'Bjerke',
  'Frogner',
  'Gamle Oslo',
  'Grorud',
  'Grünerløkka',
  'Nordre Aker',
  'Nordstrand',
  'Sagene',
  'St. Hanshaugen',
  'Stovner',
  'Søndre Nordstrand',
  'Ullern',
  'Vestre Aker',
  'Østensjø',
];

// To fetch a question in a given language, call questions.<ISO 2 digit language code>.<form value>
// move to db eventually
const questions = {
  en: { story: 'What makes this recipe special to you?' },
};

export { bydels, questions };
