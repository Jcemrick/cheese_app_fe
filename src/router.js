import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom'
import App from './App';
import Index from './pages/Index.js';
import Show from './pages/Show.js';
import { cheesesLoader } from './loaders.js';
import { createAction } from './actions';


const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<App />}>
        <Route path='' element={<Index />} loader={cheesesLoader}/>
        <Route path=':id' element={<Show />} />
        <Route path='create' action={createAction}/>
        <Route path='update/:id' />
        <Route path='delete/:id' />
    </Route>
    )
)

export default router