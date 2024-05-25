import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Products from './components/ProductList';

function App() {
  const [showForm, setShowForm] = useState(false);
  function handleClick(e) {
    e.stopPropagation();
    setShowForm(!showForm);
  }
  return (
    <div className="App">
      <header className="App-header">
        <button className='button' onClick={handleClick}>{showForm ? 'Show Products' : 'Add Product'}</button>
        {showForm ? <Form></Form> : <Products></Products>}
      </header>
    </div>
  );
}

export default App;
