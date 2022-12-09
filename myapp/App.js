import React from 'react'; 
import { StatusBar } from 'react-native';
import Start from './src/Pages/Start';

import Routes from './src/Routes';

export default function App(){
  return (
    <>
      <StatusBar barStyle={"auto"} />
      <Start />
    </>
  );
}