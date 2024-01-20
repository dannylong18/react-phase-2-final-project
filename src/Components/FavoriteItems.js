import NavBar from './NavBar';
import { useState, useEffect } from'react';

function FavoriteItems () {
    
    useEffect(() => {
        fetch('http://localhost:3000/items')
        .then (response => response.json())
        .then (data => {
             console.log(data)
        })
    }, [])
    
    return (
        <div>
            <header>
            <NavBar />
            </header>
            <main>

            </main>
        </div>
    )
}

export default FavoriteItems