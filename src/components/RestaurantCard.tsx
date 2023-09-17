import { IMG_CDN_URL } from "../utils/config";
import React from "react";

interface RestaurantProps{
  restaurant: any;  
}

const RestaurantCard = (props : RestaurantProps) : JSX.Element => {
  // console.log(props.restaurant?.info?.name);
  console.log(props.restaurant?.info);
  return (
    <div className="card">
      <img src={IMG_CDN_URL + props.restaurant?.info?.cloudinaryImageId}></img>
      <div
        className="cardDetails"
        style={{
          marginLeft: "12px",
        }}
      >
        <h2>{props.restaurant?.info?.name}</h2>
        <div className="cardrating"> {props.restaurant?.info?.avgRating}</div>
        <div className="cuisines">
          {props.restaurant?.info?.cuisines.join(", ")}
        </div>
        <div className="cardAreaName">{props.restaurant?.info?.areaName}</div>
      </div>
    </div>
  );
};

export default RestaurantCard;