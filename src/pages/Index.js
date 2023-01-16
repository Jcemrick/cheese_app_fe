import { Link, useLoaderData } from 'react-router-dom';


function Index(props) {
    const cheeses = useLoaderData()

    return cheeses.map(cheese => (
        <div key={cheese._id} className='cheese'>
            <Link to={`/${cheese._id}`}>
                <h1>{cheese.name}</h1>
            </Link>
        </div>
    ))
}

export default Index