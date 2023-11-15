import CartWidgetartWidget from "../CartWidget/CartWidget"

const NavBar = ( ) => {
    return(
        <nav id="nav"> 
            <h3> ZapasFlow </h3>
            <div>
                <ul>
                    <li> <a href="#">Marcas</a> </li>
                    <li> <a href="#">Zapatillas</a> </li>
                    <li> <a href="#">Botines</a> </li>
                </ul>
            </div>
            <CartWidgetartWidget/>
        </nav>
    ) 
}

export default NavBar