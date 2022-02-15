import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Component/Header/Header";
import Main from "./Component/Main/Main";
import Basket from "./Component/Basket/Basket";
import shoes from "./images/1.jpg";
import colorSh from "./images/2.jpg";
import panse from "./images/3.jpg";
import Black from "./images/4.jpg";
import Boat from "./images/7.jpg";
import gray from "./images/8.jpg";
import Rolex from "./images/c1.jpg";
import Nivada from "./images/c2.jpg";
import BlueNiv from "./images/c3.jpg";
import Brown from "./images/c4.jpg";
import BlackJack from "./images/j1.jpg";
import ofWhite from "./images/j2.jpg";
export interface IV {
  list: {
    id: number;
    title: string;
    image: string;
    price: string;
  }[]
}

function App() {
  const [list, setList] = useState<IV["list"]>( [
    {
      id: 1,
      price: "500$",
      title: "Women shoes",
      image: shoes,
    },
    {
      id: 2,
      price: "580$",
      title: "new Style",
      image: colorSh,
    },
    {
      id: 3,
      price: "500$",
      title: " Woman panse",
      image: panse,
    },

    {
      id: 4,
      price: "500$",
      title: "Black Coach",
      image: Black,
    },

    {
      id: 5,
      price: "500$",
      title: "Boat",
      image: Boat,
    },

    {
      id: 6,
      price: "500$",
      title: "gray",
      image: gray,
    },

    {
      id: 7,
      price: "500$",
      title: "Rolex",
      image: Rolex,
    },
    {
      id: 8,
      price: "750$",
      title: "Nivada",
      image: Nivada,
    },
    {
      id: 9,
      price: "700$",
      title: "BlueNiv",
      image: BlueNiv,
    },
    {
      id: 10,
      price: "400$",
      title: "Brown",
      image: Brown,
    },
    {
      id: 11,
      price: "230$",
      title: "BlackJack",
      image: BlackJack,
    },
    {
      id: 12,
      price: "180$",
      title: "ofWhite",
      image: ofWhite,
    },
  ]);


  return (
    <Router>
      <div className="App">
        <Header />
        <div className="row mx-auto">
          <Main list={list}/>
          <Basket list={list} setList={setList}  />
        </div>
      </div>
    </Router>
  );
}

export default App;
