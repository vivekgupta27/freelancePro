import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import {BrowserRouter}   from 'react-router-dom'
import UserProvider from './shared/ClientRedux'
import {Provider} from 'react-redux';
import {store,persistor} from './Redux/store'
import { PersistGate } from 'redux-persist/integration/react';


const root = ReactDOM.createRoot(document.getElementById("root"));
 

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
root.render(
   <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
     

              <BrowserRouter>
              <UserProvider>
                 <Provider store={store}>
                 <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>

                 </Provider>
              </UserProvider>
         </BrowserRouter>
     
         
  </GoogleOAuthProvider>
 
);
