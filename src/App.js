import React from 'react';
import './App.css';
import HomePage from "./pages/Home.page";
import { withAuthenticator } from 'aws-amplify-react';
import Amplify from 'aws-amplify';
import config from './config/amplify';

function App() {

  return (
    <HomePage />
  );
}

Amplify.configure(config);

export default withAuthenticator(App);
