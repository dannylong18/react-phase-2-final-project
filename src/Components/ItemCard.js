import ItemCardStyle from './ItemCardStyle.css';
function ItemCard ( { image, name, price}) {
    return (
        <div class='item-card'>
            <h3>{name}</h3>
            <img src={image} alt="Item" width='200px' height='200px'/>
            <p>Price: ${price}</p>
        </div>
    )
}

export default ItemCard