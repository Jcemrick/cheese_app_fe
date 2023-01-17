const URL = 'http://localhost:4000'

export const cheesesLoader = async () => {
    const response = await fetch(URL + '/cheeses')
    const cheeses = await response.json()
    return cheeses
}