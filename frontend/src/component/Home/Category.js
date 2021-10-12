import React from "react";
import CategoryItem from "./CategoryItem";
import "./category.css";

import img_1 from "../../images/categories/01.jpg";
import img_2 from "../../images/categories/02.jpg";
import img_3 from "../../images/categories/03.jpg";
import img_4 from "../../images/categories/04.jpg";
import img_5 from "../../images/categories/05.jpg";
import img_6 from "../../images/categories/06.jpg";
import img_7 from "../../images/categories/07.jpg";
import img_8 from "../../images/categories/08.jpg";
import img_9 from "../../images/categories/09.jpg";
import img_10 from "../../images/categories/10.jpg";
import img_11 from "../../images/categories/11.jpg";
import img_12 from "../../images/categories/12.jpg";
import img_13 from "../../images/categories/13.jpg";
import img_14 from "../../images/categories/14.jpg";
import img_15 from "../../images/categories/15.jpg";
import img_16 from "../../images/categories/16.jpg";
import img_17 from "../../images/categories/17.jpg";
import img_18 from "../../images/categories/18.jpg";

function Category() {
  return (
    <div>
      <div className="top__categories ">
        <div className="category__items">
          <CategoryItem
            img_1={img_1}
            img_2={img_2}
            img_3={img_3}
            title="Clothing"
            price="59.96"
            path="/products"
          />
          <CategoryItem
            img_1={img_4}
            img_2={img_5}
            img_3={img_6}
            title="Shoes"
            price="37.80"
            path="/products"
          />
          <CategoryItem
            img_1={img_7}
            img_2={img_8}
            img_3={img_9}
            title="Bags"
            price="34.25"
            path="/products"
          />
        </div>
      </div>
      <div className="top__categories ">
        <div className="category__items">
          <CategoryItem
            img_1={img_10}
            img_2={img_11}
            img_3={img_12}
            title="Bags"
            price="34.25"
            path="/products"
          />
          <CategoryItem
            img_1={img_13}
            img_2={img_14}
            img_3={img_15}
            title="Bags"
            price="34.25"
            path="/products"
          />
          <CategoryItem
            img_1={img_16}
            img_2={img_17}
            img_3={img_18}
            title="Bags"
            price="34.25"
            path="/products"
          />
        </div>
      </div>
    </div>
  );
}

export default Category;
