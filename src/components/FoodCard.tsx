import { IMG_CDN_URL } from "../utils/config";
import React from "react";

interface Props{
  menu?:{
    name?:string;
    price?:string;
    imageId?: string;
  };
}
const FoodCard : React.FC<Props> = (props) => {
  console.log(props?.menu);
  return (
    <div className="MenuCard">
      {/* <img src={IMG_CDN_URL + props?.menu?.imageId}></img> */}
      <div>{props?.menu?.name}</div>
      <div className="menuCardPrice">Price: {props?.menu?.price}</div>
      {/* <h4>{props?.menu?.description}</h4> */}
    </div>
  );
};

export default FoodCard;