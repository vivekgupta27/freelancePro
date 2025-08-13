import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import {BrowserRouter}   from 'react-router-dom'
import UserProvider from './shared/ClientRedux'

const root = ReactDOM.createRoot(document.getElementById("root"));
 

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
root.render(
   <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
     

              <BrowserRouter>
              <UserProvider>
                <App />
              </UserProvider>
         </BrowserRouter>
     
         
  </GoogleOAuthProvider>
 
);
