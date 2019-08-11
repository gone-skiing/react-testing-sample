// !!! Note that we are not doing
//     import fetch from 'isomorphic-fetch';
// That would prevent fetchMock from mocking the fetch calls properly.
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
    .then(response => {
      return response.json();
    })
    .catch(error => {
      throw error;
    });
}
