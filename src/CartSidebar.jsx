
const CartSidebar = ({ cart }) => {
    return (
        <aside className="cart-sidebar">
            <h2>Récapitulatif du panier</h2>
            <div className="cart-items">
                {cart.items.map((item, index) => (
                    <div key={index} className="cart-item">
                        <p>{item.product}</p>
                        <p>Quantité: {item.quantity}</p>
                        <p>Prix unitaire: {item.amount}</p>
                    </div>
                ))}
            </div>
            <p>Total: {cart.totalAmount}</p>
        </aside>
    );
};

export default CartSidebar;
