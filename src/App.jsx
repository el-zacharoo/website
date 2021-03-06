import React, { Suspense } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloProvider } from "@apollo/client";

import { Outline } from './components/Outline'
import { theme } from './theme';
import Viewport from './Viewport';
import { client } from './client'
import View from './View'

export const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ApolloProvider client={client} >
        <Router>
          <Viewport>
            <Suspense fallback={<Outline visible={true} />}>
              <Routes>
                <Route exact path="/" element={<View />} />
                <Route exact path="/:view" element={<View />} />
              </Routes>
            </Suspense>
          </Viewport>
        </Router>
      </ApolloProvider>
    </ThemeProvider>
  )
}

export default App
