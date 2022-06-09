import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Contact from './routes/Contact';
import Home from './routes/Home'
import Pricing from './routes/Pricing'
import Training from './routes/Training';
import Error from './routes/PageNotFound';
import Reflection from './routes/Reflection';
import Citation from './routes/Resources';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/training' element={<Training />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/reflection' element={<Reflection />} />
        <Route path='/resources' element={<Citation />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
