import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import RestaurantCard from "./RestaurantCard";
import burgerking from "./assets/burgerking.jpg";
import dominos from "./assets/dominos.jpg";
import kfc from "./assets/kfc.jpg";
import pizzahut from "./assets/pizzahut.jpg";;
import homebanner from "./assets/homebanner.jpg";
import Menu from "./Menu";
import banner1 from "./assets/banner1.jpg";
import banner2 from "./assets/banner2.jpg";
import banner3 from "./assets/banner3.jpg";
import banner4 from "./assets/banner4.jpg";

let banners = [
    homebanner,
    banner1,
    banner2,
    banner3,
    banner4
];

let restaurants = [

    {
        name: "Burger King",
        cuisine: "Burgers, Fries, Fast Food",
        rating: "4.3",
        deliverytime: "Delivery in 40 mins",
        image: burgerking
    },

    {
        name: "Dominos",
        cuisine: "Pizza, Garlic Bread",
        rating: "4.0",
        deliverytime: "Delivery in 30 mins",
        image: dominos
    },

    {
        name: "KFC",
        cuisine: "Chicken, Wings, Buckets",
        rating: "4.5",
        deliverytime: "Delivery in 40 mins",
        image: kfc
    },


    {
        name: "Pizza Hut",
        cuisine: "Pizza, Pasta, Garlic Bread",
        rating: "4.0",
        deliverytime: "Delivery in 55 mins",
        image: pizzahut
    },



];

function Home() {
    const [cartCount, setCartCount] = useState(0); // cartCount stores cart number
    const [cartitems, setcartitems] = useState([]);// empty array for added items
    const [selectedrestaurant, setselectedrestaurant] = useState(""); // stores clicked restaurant
    const [showrestaurants, setshowrestaurants] = useState(false);
    const [showmenu, setshowmenu] = useState(false);
    const [showcart, setshowcart] = useState(false);
    const [currentbanner, setcurrentbanner] = useState(0);


    function addToCart(item) {
        alert(item.itemname + " " + "added to the cart😊")
        setCartCount(cartCount + 1)                 // home.jsx(parent) sending cartcount to navbar.jsx
        setcartitems([...cartitems, item]);
        setshowcart(true)

    }

    function removeitem(index) {                  // receives item index
        let newcart = [...cartitems];             //copy old cart array
        newcart.splice(index, 1);             // remove 1 item from give index
        setcartitems(newcart);                // update cart item
        setCartCount(cartCount - 1); // decrease cart count
    }

    function viewmenu(name) {               // click view menu 
        setselectedrestaurant(name);        //save restaurant name
        setshowmenu(true)                   //show menu section 
    }

    function handlerestaurants() {
        setshowrestaurants(true)
    }

    let total = 0;
    cartitems.forEach(function (item) {
        total = total + item.price
    });

    useEffect(function () {

        setInterval(function () {

            setcurrentbanner(function (oldbanner) {

                if (oldbanner === banners.length - 1) {
                    return 0;
                }

                else {
                    return oldbanner + 1;
                }

            });

        }, 4000);

    }, []);


    return (
        <div>
            <Navbar
                cartCount={cartCount}
                handlerestaurants={handlerestaurants}

            />

            <img
                src={banners[currentbanner]}
                alt="home banner"
                className="home-banner"
            />



            {
                showmenu && (                                               // menu false menu hidden if true menu visible
                    <Menu selectedrestaurant={selectedrestaurant}
                        addToCart={addToCart}
                    />
                )
            }

            {
                showcart && (
                    <div className="cart-box">



                        <h2>Cart Items</h2>

                        {
                            cartitems.map(function (item, index) {

                                return (
                                    <p className="cart-item">
                                        {item.itemname} - Rs. {item.price}

                                        <button onClick={function () {
                                            removeitem(index)
                                        }}>
                                            Remove
                                        </button>
                                    </p>
                                )

                            })
                        }
                        <h3>Total : Rs. {total}</h3>

                    </div>
                )
            }
            <div className="restaurant-container">
                {
                    showrestaurants && (                                //&&- and 
                        restaurants.map(function (item) {

                            return (

                                <RestaurantCard
                                    key={item.name}
                                    name={item.name}
                                    cuisine={item.cuisine}
                                    rating={item.rating}
                                    deliverytime={item.deliverytime}
                                    image={item.image}
                                    addToCart={addToCart}
                                    viewmenu={viewmenu}
                                />

                            )

                        })
                    )
                }
            </div>
        </div>

    )

}


export default Home;   
//i am learning git 