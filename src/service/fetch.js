const { fetch: originalFetch } = window;

window.fetch = async (...args) => {
    let [resource, options ] = args;

    // request interceptor starts
    options.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token')
    resource = '' + resource;

    // request interceptor ends
    const response = await originalFetch(resource, options);

    // response interceptor
    if (error.response.status === 403 && !originalRequest._retry) {
        originalRequest._retry = true;
        const response = await refreshToken();
        localStorage.setItem('token', response.accessToken)
        response = fetch(resource, options);
    }
    
    return response;
}

const refreshToken = async () => {
  try {
    const response = await fetch('/auth/refresh', {
      method: 'POST', // Adjust the HTTP method as needed (e.g., 'GET', 'POST', etc.)
      headers: {
        'Content-Type': 'application/json',
      },
      body: { refresh_token: localStorage.getItem('refreshToken') }
    })
    return response.data;
  } catch (e) {
    console.error('Refresh Token failed', error);
  }
}