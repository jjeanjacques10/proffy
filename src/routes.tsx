import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import Teacherlist from './pages/TeacherList';
import TeacherForm from './pages/TearcherForm';


function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Landing} exact />
                <Route path="/study" component={Teacherlist} />
                <Route path="/give-classes" component={TeacherForm} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;