import React, { useState } from 'react';


export default function Categories(props) {
    const [mainCategory, setMainCategory] = useState('all');


    return (
        <div className="btn-container">
            {
                props.Categories.map(category => (
                    <button key={category}
                        type="button"
                        className={category === mainCategory ? "filter-btn highlight" : "filter-btn"}
                        onClick={() => setMainCategory(category)}
                        >
                        {category}
                    </button>
                ))
            }
        </div>
    )
}
