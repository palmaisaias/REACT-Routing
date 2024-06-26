import { PUBLIC_KEY, HASH_KEY, BASE_URL } from '../config';
// ok so I read that doing this is for maintainability and security which makes sense which is why I implemented it
// would definitely make more sense if I had different configurations for testing or what not but I like the idea of 
// securing API keys wherever possible

export const getCharacters = async () => { // using export here allows this fucntion to be...well...exported
  const url = `${BASE_URL}characters?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH_KEY}`;
  console.log('Fetching URL:', url); 
  // added this here to check if my keys were going through properly. I left it for 
  // the sake of remembering to console.log more often for error correction

  try {
    const response = await fetch(url);
    if (!response.ok) { // I think this is cool to note. obviousy here we're attempting to handle errors gracefully with a 
      // try block, but the 'ok' property of the response object has a value of true which is nice because we use it to check
      // if the respose was successful
      throw new Error('Sorry...no dice...or Avengers');
    }
    const data = await response.json();
    return data.data.results;
    // this executes if theres an error in the try block, logs an error message in the console, and finally re throws the error
    // back to the func that called getCharacters
  } catch (error) {
    console.error('Error fetching characters:', error);
    throw error;
  }
};
