// main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ReactLenis } from '@studio-freight/react-lenis';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

import Home from './Pages/Home.jsx';
import Arcs from './Pages/Arcs.jsx';
import Header from './Components/Header.jsx';
import Error from './Components/Error.jsx';
import LogIn from './Pages/LogIn.jsx';
import CharacterPage from './Pages/Infoperso.jsx';

const rootElement = document.getElementById('root');

const client = new ApolloClient({
    uri: 'http://localhost:4000/', // Remplacez par l'URL de votre serveur GraphQL
    cache: new InMemoryCache(),
});

ReactDOM.createRoot(rootElement).render(
    <ReactLenis root>
        <ApolloProvider client={client}>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/LogIn" element={<LogIn />} />
                    <Route path="/arcs/:name" element={<Arcs />} />
                    <Route path="/character/:characterId" element={<CharacterPage />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </Router>
        </ApolloProvider>
    </ReactLenis>,
);
