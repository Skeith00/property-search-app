const BASE_URL = "http://localhost:8080";

const {fetch: originalFetch} = window;

window.fetch = async (...args) => {

    let [resource, options] = args;
    console.log("Intercepted fetch:", resource, options);

    // Ensure options is an object
    options = options || {};
    options.headers = options.headers || {};

    // request interceptor starts
    options.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token')

    // Prepend base URL to resource if it's a relative path
    if (!resource.startsWith('http')) {
        resource = BASE_URL + resource;
    }

    // request interceptor ends
    let response = await originalFetch(resource, options);

    // Handle token expiration (403 response)
    if (response.status === 403 && !options._retry) {
        options._retry = true;
        const newToken = await refreshToken();

        if (newToken) {
            localStorage.setItem('token', newToken);
            options.headers['Authorization'] = 'Bearer ' + newToken;
            response = await originalFetch(resource, options);
        }
    }

    return response;
}

const refreshToken = async () => {
    try {
        const response = await fetch(BASE_URL + '/auth/refresh', {
            method: 'POST', // Adjust the HTTP method as needed (e.g., 'GET', 'POST', etc.)
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({refresh_token: localStorage.getItem('refreshToken')}),
        })
        if (!response.ok) {
            return null;
        }

        const data = await response.json();
        return data.accessToken;
    } catch (e) {
        console.error('Refresh Token failed', e);
        return null;
    }
}