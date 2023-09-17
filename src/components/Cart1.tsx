import { useSelector } from "react-redux";
import FoodCard from "./FoodCard";
import { RootState } from "../utils/store";
import React from "react";
const Cart1 = () :JSX.Element => {
  const cartItems = useSelector((store : RootState) => store.cart.items);
if(cartItems.length===0)
{
  return (
    <h1>
      No items in the cart!!!
    </h1>
  );
}
  return  (
    // <div className="cartPage">
    //   <div className="cartUserDetail">
    //     <div className="loggedInDetail">
    //       <div> Logged in </div>
    //       <div>Dhananjay Waghade | 9405005945</div>
    //     </div>
    //     <div className="AddressDetail">
    //       <div>Add a delivery address</div>
    //       <div>You seem tobe in the new location</div>
    //       <div>
    //         <div>Add New Address</div>
    //         <button>ADD NEW</button>
    //       </div>
    //     </div>
    //     <div className="PaymentDetail">Payment</div>
    //   </div>
    //   <div className="cartMenu">
    //     <div className="MenuAddedToCart">
    //       {cartItems.map((i) => (
    //         <FoodCard menu={i} />
    //       ))}
    //     </div>
    //     <div className="Policy">
    //       <div>Review your order and address details to avoid cancellations</div>
    //       <div>Note: If you cancel within 60 seconds of placing your order, a 100% refund will be issued. No refund for cancellations made after 60 seconds. </div>
    //         <div>Avoid cancellation as it leads to food wastage</div>
    //     </div>
    //   </div>
    // </div>
    <div >
        <h1>All the items in the cart:</h1>
        <div className="cartPage">
        {cartItems.map((i : any) => (
        <FoodCard menu={i} />
      ))}
        </div>
      
    </div>
  );
};

export default Cart1;