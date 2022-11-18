import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Container } from 'semantic-ui-react';

import HomePage from '../HomePage';
import SingleBrewery from '../SingleBreweryPage';
import NotFound from '../Handlers/NotFound';
import BadRequest from '../Handlers/BadRequest';

const App = () => {
    return (
        <div
            style={{
                backgroundColor: '#E5E5E5',
                minHeight: '100vh',
                paddingTop: '100px',
            }}
        >
            <Container>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <HomePage />
                        </Route>
                        <Route path="/breweries/:id" component={SingleBrewery} />
                        <Route path="/bad-request" component={BadRequest} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </Router>
            </Container>
        </div>
    );
};

export default App;
