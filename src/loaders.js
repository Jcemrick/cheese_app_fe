const URL = 'https://cheese-app-a9wy.onrender.com'

export const cheesesLoader = async () => {
    const response = await fetch(URL + '/cheeses')
    const cheese = await response.json()
    return cheese
}