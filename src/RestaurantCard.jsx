function RestaurantCard(props) {             // props will recieve data from home .jsx 
    return (
        <div className="card">


            <img
                src={props.image}
                alt="food"
                className="food-image"
            />

            <h2>{props.name}</h2>           {/* suppose home.jsx send name = dominos so it will come here */}
            <p>{props.cuisine}</p>

            <h3>⭐ {props.rating}</h3>
            <h4>⏱️{props.deliverytime}</h4>

            <button onClick={function () {
                props.viewmenu(props.name)
            }}>
                View Menu
            </button>

        </div>
    )
};

export default RestaurantCard; // export RestaurantCard to app.jsx
