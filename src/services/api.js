const normaURL = 'https://norma.nomoreparties.space/api/'
const defaultHeaders = {'Content-Type': 'application/json'}

const normaApi = async (endpoint, method = 'GET', body=null, headers= defaultHeaders) => {
  return fetch(endpoint, {method, headers, body: body? JSON.stringify(body) : null})
      .then(response =>{
        if (!response.ok) {
          throw new Error(`Something is wrong with response: ${response}`)
        }
        return response})
      .then(response => response.json())
      .catch(e => {
        console.error('Fetching ResettingPassword Error', e)
        throw new Error(`Error while Fetching ${endpoint}: ${e}`)
      })

}

export const fetchIngredients = async () => {
  const ingredientsEndpoint = 'https://norma.nomoreparties.space/api/ingredients'
  const serverData = await normaApi(ingredientsEndpoint)
  return serverData.data
}

export const fetchOrder = async (ingredients) => {
  const orderEndpoint = 'https://norma.nomoreparties.space/api/orders';
  return await normaApi(orderEndpoint, 'POST', {ingredients})
}

export const fetchCallPasswordReset = async (email) => {
  const passwordResetEndpoint = 'https://norma.nomoreparties.space/api/password-reset'
  return normaApi(passwordResetEndpoint, 'POST', {email})
}

export const fetchPasswordReset = async (password, code) => {
  const apiEndpoint = 'https://norma.nomoreparties.space/api/password-reset/reset'
  return await
    fetch(apiEndpoint, {
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({password, token: code})})
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
  // console.log('DEBUG3', window.localStorage.getItem('refreshToken'));
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
    .then(res=>res.json())
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

export const fetchUserInfo = async (accessToken) =>{
  const getUserEndpoint = normaURL + 'auth/user'
  const headers = {...defaultHeaders, Authorization: accessToken}
  return await normaApi(getUserEndpoint, 'GET', null, headers)
}

export const fetchExit = async (refreshToken) => {
  const exitEndpoint = normaURL + 'auth/logout'
  const headers = {...defaultHeaders, Authorization: refreshToken}
  return await normaApi(exitEndpoint, 'POST', null, headers)
}