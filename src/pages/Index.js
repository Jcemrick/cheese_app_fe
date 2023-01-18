import { Link, useLoaderData, Form, useState } from 'react-router-dom';

function Index(props){
    const [titleState, setTitleState] = useState('')
    const [urlState, setUrlState] = useState('')
    function handleSubmit(e){
        console.log("SUBMITT")
        setTitleState('')
        setUrlState('')
    }

    const cheeses = useLoaderData()

    return (
        
        <div>
        {cheeses.map((cheese) => (
        <div key={cheese._id} className='cheese'>
            <Link to={`/${cheese._id}`}>
                <h1>{cheese.name}</h1>
            </Link>
            <img src={cheese.image} alt={cheese.name} />
            <h3>{cheese.countryOfOrigin}</h3>
        </div>
    ))}

        <h1>Create a new Bookmark</h1>
        <Form onSubmit={handleSubmit} action = '/create' method='post'>
            <input 
            type='text' 
            name ='title'
            placeholder='Title' 
            value={titleState} 
            onChange = {event => setTitleState(event.target.value)} 
            />

            <input 
            type='text' 
            name = 'url'
            placeholder='URL'
            value={urlState}
            onChange = {event => setUrlState(event.target.value)}
            />
            <input type='submit'/>
        </Form>
        <h1>INDEX COMPONENT</h1>
    </div>
    )
}