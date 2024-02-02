import React from 'react';
import Cars from "./cars";
import Cars2 from './cars2';
import Cars3 from './cars3';
import List from './list';
import Form from './form';
import Form2 from './form2';
import Form3 from './form3';



function App() {
  return (
    <div className="App">
      <Form3 />
      <br /><hr />
      <Form2 />
      <br /><hr />
      <Form />
      <br /><hr />
      <Cars />
      <Cars2 />
      <Cars3 />
      <List />
    </div>
  );
}

export default App;
