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

export const fetchCallPasswordReset = async (email) => {
  const apiEndpoint = 'https://norma.nomoreparties.space/api/password-reset'
  return await
    fetch(apiEndpoint, {
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email: email})})
    .then(res => {
        if (!res.ok) {
          throw new Error(`Something is wrong with response: ${res}`)
        }
        return res})
    .then(res=>res.json())
    .catch(e => {
      console.error('Fetching ResettingPassword Error', e)
      throw new Error(`Error while Fetching New Password Call: ${e}`)
    })
}

export const fetchRegister = async (userData) => {
  const apiEndpoint = 'https://norma.nomoreparties.space/api/auth/register'
  return await
    fetch(apiEndpoint, {
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(userData)})
    .then(res => {
        if (!res.ok) {
          throw new Error(`Something is wrong with response: ${res}`)
        }
        return res})
    .then(res=>{
        return res.json()})
    .catch(e => {
      console.error('Fetching NewUser Error', e)
      throw new Error(`Error while Fetching new user: ${e}`)
    })
}

export const fetchRefreshAccessToken = async (refreshToken) =>{
  const apiEndpoint = 'https://norma.nomoreparties.space/api/auth/token'
  console.log('DEBUG3', window.localStorage.getItem('refreshToken'));
  return await
    fetch(apiEndpoint, {
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({token: refreshToken})})
    .then(res => {
        if (!res.ok) {
          throw new Error(`Something is wrong with response: ${res}`)
        }
        return res})
    .then(res=>{
        const a = res.json()
        console.log('DEBUG4', a)
        return a})
    .catch(e => {
      console.error('Fetching refreshAccessToken Error', e)
      throw new Error(`Error while Fetching refreshAccessToken: ${e}`)
    })
}

export const fetchLogin = async (formData) =>{
  const apiEndpoint = 'https://norma.nomoreparties.space/api/auth/login'
  return await
    fetch(apiEndpoint, {
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formData)})
    .then(res => {
        if (!res.ok) {
          throw new Error(`Something is wrong with response: ${res}`)
        }
        return res})
    .then(res=>{
        return res.json()})
    .catch(e => {
      console.error('Fetching login Error', e)
      throw new Error(`Error while fetching login: ${e}`)
    })
}
