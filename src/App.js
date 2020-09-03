import React from 'react';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import {withAuthenticator,AmplifySignOut} from '@aws-amplify/ui-react'
Amplify.configure(awsconfig);




function App() {
  return (
    <div >
    <h1>START</h1>
    <p>The Javascript code on this page is constructed using templates from Amazon that automatically</p>
    <p>render the requisite log in/out features. If log in is successful,everything between start and end renders </p>
     <AmplifySignOut />
     <h1>END</h1>

    </div>
  );
}

export default withAuthenticator(App);
