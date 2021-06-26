import React from 'react';
import AppHeader from './components/app-header/app-header'
import Logo from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/logo'
import './App.css';

function App() {
  return (
    <div className="App">
      <AppHeader title={'Hello'} logo={Logo}/>
    </div>
  );
}

export default App;
