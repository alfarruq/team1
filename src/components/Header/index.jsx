
import './style.css'
import img from '../../assets/hed.png'

function Header() {
    return (
        <>
            <header>
                <img src={img} alt="Header Image" />
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
                <button>Take a scoring test</button>
            </header>
        </>
    );
}

export default Header;