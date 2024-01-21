import NavBar from './NavBar';
import { useState, useEffect } from'react';
import ItemCard from './ItemCard';

function FavoriteItems () {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/items')
        .then (response => response.json())
        .then (data => {
             setItems(data)
        })
    }, [])

    const displayItems = () => {
        return items.map(item => {
            return (
                <ItemCard 
                key={item.id} 
                description={item.description} 
                image={item.image} 
                link={item.link} 
                name={item.name} 
                price={item.price} 
                />
            )
        })
    }
    return (
        <div>
            <header>
            <NavBar />
            </header>
            <main>
            {displayItems()}
            </main>
        </div>
    )
}

export default FavoriteItems