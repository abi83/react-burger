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
      .catch((e) => {
        console.error(e)
        throw new Error(`Error while fetching ingredients: ${e}`)
      })
}