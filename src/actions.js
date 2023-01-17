import { redirect } from "react-router-dom";

const URL = 'http://localhost:4000'

export const createAction = async ({ request }) => {
    const formData = await request.formData()
    const newCheese = {
        name: formData.get('name'),
        countryOfOrigin: formData.get('countryOfOrigin'),
        image: formData.get('image'),
    }
    await fetch(URL = '/cheeses', {
        method: 'post',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(newCheese),
    })
    return redirect('/')
}