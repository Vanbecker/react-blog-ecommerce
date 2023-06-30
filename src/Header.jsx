
const Header = ({ cartItemCount }) => {
    return (
        <header>
            <div className="left-section">
                <h1>Achetez avec parcimonie</h1>
            </div>
            <div className="center-section">
                <img src="https://www.zarla.com/images/zarla-smart-shop-1x1-2400x2400-20220328-k88bmbchqb76tbcycqm8.png?crop=1:1,smart&width=250&dpr=2" alt="Logo" />
            </div>
            <div className="right-section">
                <ul className="menu">
                    <li>Accueil</li>
                    <li>Produits</li>
                    <li>À propos</li>
                    <li>Contact</li>
                    <li>Panier ({cartItemCount})</li>

                </ul>
            </div>
        </header>
    );
};

export default Header;

// Ajouter logo dans header
{/* <img ClassName=" logoheader" src="" alt="smartpanier" /> */ }
