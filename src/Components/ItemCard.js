
function ItemCard ( {description, image, link, name, price}) {
    return (
        <div>
            <h3>{name}</h3>
            <img src={image} alt="Item" width='200px' height='200px'/>
            <p>{description}</p>
            <p>Price: {price}</p>
            <a href={link}>Item Link</a>
        </div>
    )
}

export default ItemCard