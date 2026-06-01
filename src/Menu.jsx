let menudata = {
    "Burger King": [
        { itemname: "Whopper Burger", price: 199 },
        { itemname: "French Fries", price: 99 },
        { itemname: "coke", price: 49 },
        { itemname: "Veg burger", price: 59 },
        { itemname: "vegburger + coke + fries (meal)", price: 189 },
        { itemname: "Non-vegburger + coke + fries (meal)", price: 299 },
        { itemname: "cheese-pockets", price: 89 },
        { itemname: "Veg-wrap", price: 169 },
        { itemname: "Non-veg wrap", price: 189 },
    ],

    "Dominos": [
        { itemname: "Farmhouse Pizza", price: 299 },
        { itemname: "Galaxy Pizza", price: 399 },
        { itemname: "veg-pan pizza", price: 99 },
        { itemname: "Garlic Bread", price: 89 },
        { itemname: "Garlic Bread + Dip", price: 149 },
        { itemname: "Tandoori Pizza", price: 599 },
        { itemname: "Chicken Nugets", price: 99 },
        { itemname: "Veg-Burger", price: 199 },
        { itemname: "Non-veg Burger", price: 299 }
    ],

    "KFC": [
        { itemname: "KFC-Farmhouse Pizza", price: 299 },
        { itemname: "KFC-Galaxy Pizza", price: 399 },
        { itemname: "KFC-veg-pan pizza", price: 99 },
        { itemname: "KFC-Garlic Bread", price: 89 },
        { itemname: "KFC-Garlic Bread + Dip", price: 149 },
        { itemname: "KFC-Tandoori Pizza", price: 599 },
        { itemname: "KFC-Chicken Nugets", price: 99 },
        { itemname: "KFC-Veg-Burger", price: 199 },
        { itemname: "KFC-Non-veg Burger", price: 299 }
    ],

    "Pizza Hut": [
        { itemname: "Mix-Pasta", price: 299 },
        { itemname: "White-Sauce Pasta", price: 399 },
        { itemname: "Red-Sauce Pasta", price: 199 },

    ]
};

function Menu(props) {

    let selectedmenu = [];

    if (props.selectedrestaurant === "") {
        selectedmenu = [];
    }

    else {
        selectedmenu = menudata[props.selectedrestaurant];
    }

    return (
        <div>

            <h1>Restaurant Menu</h1>

            <h2>{props.selectedrestaurant}</h2>

            {
                selectedmenu.map(function (item) {

                    return (
                        <div className="menu-item">

                            <h3>{item.itemname}</h3>

                            <p>Rs. {item.price}</p>

                            <button onClick={function () {
                                props.addToCart(item)
                            }}>
                                Add
                            </button>

                        </div>
                    )

                })
            }

        </div>
    )
}

export default Menu;