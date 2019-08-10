import 'isomorphic-fetch';

export function fetchIngredients() {
  return fetch(
    `https://react-my-burger-25854.firebaseio.com/ingredients.json`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
    .then(response => response.json())
    .catch(error => {
      // eslint-disable-next-line no-console
      console.log('Error', error);
    });
}
