import React from "react";
import top from "../Assets/Images/top.jpg";
import bottom from "../Assets/Images/bottom.jpg";

const Burger = ({ ingredients }) => {
   const ingredientsList = ingredients.map((ingredient) => {
      return <div key={Math.random()} className={ingredient}></div>;
   });

   return (
      <div className="burger-container flex-center">
         <div className="top">
            <img src={top} alt="top bun" />
         </div>
         <div className="ingredients flex-center">
            {ingredients.length == 0 && <p>Please Add Ingredients</p>}
            {ingredientsList}
         </div>
         <div className="bottom">
            <img src={bottom} alt="bottom bun" />
         </div>
      </div>
   );
};

export default Burger;
