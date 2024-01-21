import NavBar from './NavBar';
import { useState, useEffect } from'react';
import ItemCard from './ItemCard';
import FavoriteItemForm from './FavoriteItemForm';
import ItemCardStyle from './ItemCardStyle.css';

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
        return (items.map(item => {
            return (
                <div className='item-grid'>
                <ItemCard 
                key={item.id}  
                name={item.name} 
                image={item.image} 
                price={item.price} 
                />
                </div>
            )
        })
    )}

    const handleAddItem = newItem => {
        setItems(prevItems => [...prevItems, newItem]);
      };

    return (
        <div>
            <header>
            <NavBar />
            </header>
            <main>
            <FavoriteItemForm onAddItem={handleAddItem}/>
            {displayItems()}
            </main>
        </div>
    )
}

export default FavoriteItems