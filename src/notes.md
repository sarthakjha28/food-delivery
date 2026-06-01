FLOW
****
Story 1 : Restaurants Button

User clicks:

<li onClick={props.handlerestaurants}>
    Restaurants
</li>
Step 1

Click happens.

React runs:

props.handlerestaurants()
Step 2

This function lives in Home.jsx:

function handlerestaurants() {
    setshowrestaurants(true);
}
Step 3

State changes:

showrestaurants = true
Step 4

React re-renders Home.

Now this becomes:

showrestaurants && (
    <div className="restaurant-container">

which means:

true && restaurant-container

So restaurants appear.

Story 2 : View Menu Button

User clicks:

<button onClick={function(){
    props.viewmenu(props.name)
}}>
    View Menu
</button>

Suppose user clicked:

Dominos
Step 1

Button runs:

props.viewmenu("Dominos")
Step 2

Home receives:

function viewmenu(name){

    setselectedrestaurant(name);

    setshowmenu(true);

}
Step 3

React stores:

selectedrestaurant = "Dominos"

showmenu = true
Step 4

React re-renders.

This becomes:

showmenu && (
    <Menu />
)

which means:

true && Menu

So Menu appears.

Story 3 : Add Button

User clicks:

<button onClick={function(){
    props.addToCart(item)
}}>
    Add
</button>

Suppose:

Farmhouse Pizza

was clicked.

Step 1

Button runs:

props.addToCart(item)
Step 2

Home receives:

function addToCart(item){
Step 3

Function runs:

setCartCount(cartCount + 1);

setcartitems([...cartitems, item]);

setshowcart(true);
Step 4

State becomes:

cartCount = 1

cartitems = [
   Farmhouse Pizza
]

showcart = true
Step 5

React re-renders.

This becomes:

showcart && (
    <div className="cart-box">

which means:

true && cart-box

Cart appears.

Story 4 : Remove Button

User clicks:

<button onClick={function(){
    removeitem(index)
}}>
    Remove
</button>
Step 1

Function runs:

removeitem(index)
Step 2

Inside function:

newcart.splice(index,1);

removes item.

Step 3

State updates:

setcartitems(newcart);
Step 4

React re-renders.

Cart now shows fewer items.

Total recalculates automatically.