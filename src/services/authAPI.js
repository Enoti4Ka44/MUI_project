const BASE_URL = process.env.REACT_APP_API_URL

export async function userLogin({username, password}) {
    const response = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {'ContentType':'application/json'},
        body: JSON.stringify({username, password})
    })
    const data = await response.json()
    if (!response.ok) {
        throw new Error(data.message)
    }

    localStorage.setItem("token", data.token); 

    return data
    
}

export async function userRegistration({username, email, password}) {
    const response = await fetch(`${BASE_URL}/auth/reg`, {
        method: "POST",
        headers: {'ContentType':'application/json'},
        body: JSON.stringify({username, email, password})
    })

    const data = await response.json()
    if (!response.ok) {
        throw new Error(data.message)
    }

    return data
}