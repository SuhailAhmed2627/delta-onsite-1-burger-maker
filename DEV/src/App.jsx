import React, { useState } from "react";
import { render } from "react-dom";
import Burger from "./Burger.jsx";
import Button from "./Components/Button.jsx";

import "../Assets/CSS/styles.css";

const App = () => {
   const [burgerIngredients, setBurgerIngredients] = useState([]);
   const [price, setPrice] = useState(0);
   const ingredients = ["Salad", "Bacon", "Cheese", "Meat"];

   const changePrice = (ingredient, option) => {
      return (option == "less" ? -1 : 1) * ingredient.length;
   };

   const removeLastOccuringElement = (array, element) => {
      for (let i = array.length - 1; i >= 0; i--) {
         if (element === array[i]) {
            array.splice(i, 1);
            return array;
         }
      }
      return array;
   };

   const pushElement = (array, element) => {
      array.push(element);
      return array;
   };

   const ingredientsConfig = ingredients.map((ingredient) => {
      return (
         <div key={ingredient} className="ing-config">
            <p>{ingredient}</p>
            <Button
               size="small"
               onClick={function () {
                  if (price + changePrice(ingredient, "less") > 0) {
                     setPrice(
                        (price) => price + changePrice(ingredient, "less")
                     );
                  }
                  setBurgerIngredients(
                     removeLastOccuringElement(burgerIngredients, ingredient)
                  );
               }}
            >
               Less
            </Button>
            <Button
               size="small"
               onClick={function () {
                  if (price + changePrice(ingredient, "more") >= 0) {
                     setPrice(
                        (price) => price + changePrice(ingredient, "more")
                     );
                  }
                  setBurgerIngredients(
                     pushElement(burgerIngredients, ingredient)
                  );
               }}
            >
               More
            </Button>
         </div>
      );
   });

   return (
      <>
         <div className="upper-container flex-center">
            <Burger ingredients={burgerIngredients}></Burger>
         </div>
         <div className="lower-container flex-center">
            <p>
               Price: <b>${price}</b>
            </p>
            <br />
            <br />
            {ingredientsConfig}
         </div>
      </>
   );
};

render(<App />, document.getElementById("root"));
