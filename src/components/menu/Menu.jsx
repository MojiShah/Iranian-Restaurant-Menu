import React from 'react';

export default function Menu(props) {
    console.log('props.menus ',props.menus);
    return(
            <div className='section-center' >
            {
                props.menus.map(menu => (
                    
                        <article key={menu.id} className="menu-item">
                            <img src={menu.img} alt={menu.name} className="photo" />
                            <div className="item-info">
                                <header>
                                    <h4>{menu.name}</h4>
                                    <h4 className="price">{menu.price}</h4>
                                </header>
                                <p>{menu.desc}</p>
                            </div>
                        </article>
                    
                ))

            }
            </div>
    )
    
    
}
