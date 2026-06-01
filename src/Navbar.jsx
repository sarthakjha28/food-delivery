function Navbar(props) {                 // receiving cartcount from home.jsx
    return (
        <nav className="navbar">         {/* Main navbar container */}
            <h1 className="logo">        {/*website logo*/}
                Hey Foodie !!
            </h1>

            <ul className="nav-links">
                <li>Home</li>

                <li onClick={props.handlerestaurants}>
                    Restaurants
                </li>

                <li>Cart({props.cartCount})</li>

                <li>Login</li>



            </ul>
        </nav>
    )
}

export default Navbar;  // exporting nav bar so that we can use in app.jsx
