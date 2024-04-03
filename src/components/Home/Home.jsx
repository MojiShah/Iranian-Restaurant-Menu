import React, { useState } from 'react';
import './Home.css';
import { foods } from './../../foodData';
import Categories from '../categories/Categories';
import Menu from '../menu/Menu';

const allCategorize = ['all', ... new Set(foods.map(food => food.type))];

export default function Home() {
    const [categories, setCategories] = useState(allCategorize);
    const [allMenus, setAllMenus] = useState(foods);

    const filteredMenus = cat => {
        if (cat === 'all') {
            setAllMenus(foods);
            return
        }

        let filteredMenus = foods.filter(menu => menu.type === cat);
        console.log('allMenus', allMenus);
        setAllMenus(filteredMenus);
    }


    return (
        <main>
            <section className='menu section'>
                <div className="title">
                    <h2>Our menu</h2>
                    <div className="underline"></div>
                    <Categories Categories={categories} filteredMenus={filteredMenus} />
                    <Menu menus={allMenus} />
                </div>
            </section>
        </main>
    )
}
