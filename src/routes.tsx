// Rotas de navegação da aplicação
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainPage from './pages/MainPage';
// Rotas
const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={MainPage}/>
                <Route path="*" component={()=><h1>Page not Found</h1>}/>
            </Switch>      
        </BrowserRouter>
    )
}

export default Routes;