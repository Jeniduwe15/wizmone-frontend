import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { Home } from './pages/home';
import { Home2 } from './pages/home2';

export const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/home' element={<Home/>}/>  
                <Route path='/home2' element={<Home2/>}/>  
                <Route path='*' element={<Navigate to='/home' />}/>
            </Routes>
        </BrowserRouter>
    )
}