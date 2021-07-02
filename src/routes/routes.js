import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from '../pages/home'
import Simpsons from '../pages/simpsons'
import Samdra from '../pages/samdra'

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/simpsons' component={Simpsons} />
                <Route path='/samdra' component={Samdra} />

            </Switch>
        </BrowserRouter>
    )
}

export default Routes