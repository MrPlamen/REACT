Parent component:

// App.js (Parent)

import React from 'eact';
import Greeting from './Greeting';

function App() {
  return (
    <div>
      <Greeting name="Alice" /> // Greeting is a child of App
    </div>
  );
}

------------------------------------------

Child component:

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
