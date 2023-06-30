
const LatestProducts = ({ products }) => {
    return (
        <div className="latest-products">
            <h2>Derniers produits publiés</h2>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        <h3>{product.name}</h3>
                        <p>Prix : {product.price}</p>
                        <p>Description : {product.description}</p>
                        <p>Catégorie : {product.category}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LatestProducts;
