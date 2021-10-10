const normaURL = 'https://norma.nomoreparties.space/api/'
const defaultHeaders = { 'Content-Type': 'application/json' }

const normaApi = async (
  endpoint,
  method = 'GET',
  body = null,
  headers = defaultHeaders
) => {
  return fetch(endpoint, {
    method,
    headers,
    body: body ? JSON.stringify(body) : null,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Something is wrong with response: ${response}`)
      }
      return response
    })
    .then((response) => response.json())
    .catch((e) => {
      console.error('Fetching ResettingPassword Error', e)
      throw new Error(`Error while Fetching ${endpoint}: ${e}`)
    })
}

export const fetchIngredients = async () => {
  const ingredientsEndpoint = normaURL + 'ingredients'
  const serverData = await normaApi(ingredientsEndpoint)
  return serverData.data
}

export const fetchOrder = async (ingredients) => {
  const orderEndpoint = normaURL + 'orders'
  return await normaApi(orderEndpoint, 'POST', { ingredients })
}

export const fetchCallPasswordReset = async (email) => {
  const callPasswordResetEndpoint = normaURL + 'password-reset'
  return normaApi(callPasswordResetEndpoint, 'POST', { email })
}

export const fetchPasswordReset = async (password, code) => {
  const passwordResetEndpoint = normaURL + 'password-reset/reset'
  const body = { password, token: code }
  return await normaApi(passwordResetEndpoint, 'POST', body)
}

export const fetchRegister = async (name, email, password) => {
  const registerEndpoint = normaURL + 'auth/register'
  const body = { name, email, password }
  return await normaApi(registerEndpoint, 'POST', body)
}

export const fetchRefreshAccessToken = async (refreshToken) => {
  const refreshTokenEndpoint = normaURL + 'auth/token'
  const body = { token: refreshToken }
  return await normaApi(refreshTokenEndpoint, 'POST', body)
}

export const fetchLogin = async (email, password) => {
  const loginEndpoint = normaURL + 'auth/login'
  const body = { email, password }
  return normaApi(loginEndpoint, 'POST', body)
}

export const fetchUserInfo = async (accessToken) => {
  const getUserEndpoint = normaURL + 'auth/user'
  const headers = { ...defaultHeaders, Authorization: accessToken }
  return await normaApi(getUserEndpoint, 'GET', null, headers)
}

export const fetchUpdateUser = async (userData, accessToken) => {
  const userUpdateEndpoint = normaURL + 'auth/user'
  const headers = { ...defaultHeaders, Authorization: accessToken }
  const body = { userData }
  return await normaApi(userUpdateEndpoint, 'PATCH', body, headers)
}

export const fetchExit = async (refreshToken) => {
  const exitEndpoint = normaURL + 'auth/logout'
  const body = { token: refreshToken }
  return await normaApi(exitEndpoint, 'POST', body)
}
