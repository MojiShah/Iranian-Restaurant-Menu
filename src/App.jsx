import React, { useState } from 'react';
import './App.css';
import { foods } from './foodData';
import Categories from './components/categories/Categories';
import Menu from './components/menu/Menu';

const allCategorize = ['all', ... new Set(foods.map(food => food.type))]


function App() {
  const [categories, setCategories] = useState(allCategorize);
  const [allMenus, setAllMenus] = useState(foods);

  // console.log(allMenus);

  return (
    <main>
      <section className='menu section'>
        <div className="title">
          <h2>Our menu</h2>
          <div className="underline"></div>
          <Categories Categories={categories}/>
          <Menu menus={allMenus}/>
        </div>
      </section>
    </main>
  )
}

export default App
