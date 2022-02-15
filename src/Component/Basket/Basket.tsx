import React from "react";
import { useState } from 'react';
import {IV as IProps} from '../../App'

interface IS {
  list:IProps['list']
  setList:React.Dispatch<React.SetStateAction<IProps["list"]>>
}
const Basket : React.FC<IS> = ({list,setList}) => {
  const [input,setInput]=useState({
    id:NaN,
    title:"",
    image:"",
    price:""
  })
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void=>{
    setInput({
      ...input,
      [e.target.title] : e.target.value
    })
  }
  const handleClick = () : void=>{
    if(!input.id || !input.title){
      return
    }
    setList([
      ...list,{
        id : input.id,
        title:input.title,
        image:input.image,
        price:input.price
      }
    ])
  }
  return (
    <aside className="block col-1">
      <h2>      Add To Store</h2>
      <div className="AddToList">
      <input type="text"
        placeholder="id"
        value={input.id}
        onChange={handleChange}
        title="id"
        className="AddToList-input"
        />
  
        <input type="text"
        placeholder="title"
        value={input.title}
        onChange={handleChange}
        title="title"
        className="AddToList-input"
        />
          <input type="text"
        placeholder="image"
        value={input.image}
        onChange={handleChange}
        title="image"
        className="AddToList-input"
        />
        <input type="text"
        value={input.price}
        placeholder="price"
        onChange={handleChange}
        title="price"
        className="AddToList-input"
        />
        <button onClick={handleClick} className="AddToList-btn">
          Add To List
        </button>
      </div>
    </aside>
  );
};

export default Basket;
