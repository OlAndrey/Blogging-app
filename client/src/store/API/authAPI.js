export const postRequest = (restUrl, body) => {
  const url = 'http://localhost:5000' + restUrl
  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: window.localStorage.getItem('userToken')
    },
    body: JSON.stringify(body)
  })
}

export const getUserRequest = (restUrl) => {
  const url = 'http://localhost:5000' + restUrl

  return fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: window.localStorage.getItem('userToken')
    }
  })
}
