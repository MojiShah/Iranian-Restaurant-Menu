import React, { useState } from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Food from './components/menu/food/Food';


function App() {
  // const [categories, setCategories] = useState(allCategorize);
  // const [allMenus, setAllMenus] = useState(foods);

  // console.log(allMenus);

  // const filteredMenus = cat =>{
  //   if (cat === 'all' ){
  //     setAllMenus(foods);
  //     return
  //   }

  //   let filteredMenus = foods.filter(menu => menu.type === cat);
  //   console.log('allMenus',allMenus);
  //   setAllMenus(filteredMenus);
  // }

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:id' element={<Food />} />
    </Routes>
  )
}

export default App
