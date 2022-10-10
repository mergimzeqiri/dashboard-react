import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.scss';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const queryClient = new QueryClient()

ReactDOM.render(

  <React.StrictMode>
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
        <App />
        </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();