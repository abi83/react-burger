export const fetchIngredients = async () => {
  const apiEndpoint = 'https://norma.nomoreparties.space/api/ingredients'
  return await
    fetch(apiEndpoint)
      .then(response => {
        if (response.ok) {
          return response;
        }
      return Promise.reject(response.status);})
      .then(res => res.json())
      .then(json => json.data)
      .catch(e => {
        console.error('Fetching ingredients Error', e)
        throw new Error(`Error while fetching ingredients: ${e}`)
      })
}

export const fetchOrder = async (ingredients) => {
  const apiEndpoint = 'https://norma.nomoreparties.space/api/orders';
  return await
    fetch(apiEndpoint, {
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ingredients: ingredients})})
    .then(res => {
        if (!res.ok) {
          throw new Error(`Something is wrong with response: ${res}`)
        }
        return res})
    .then(res=>res.json())
    .catch(e => {
      console.error('Fetching ingredients Error', e)
      throw new Error(`Error while fetching order: ${e}`)
    })
  

}