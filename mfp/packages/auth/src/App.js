import React from 'react';
import AuthRouter from './components/AuthRouter';

const App = ({onSignIn}) => {

   return <AuthRouter onSignIn={onSignIn} />;
};

export default App;