import React from 'react'

const Categories = () => {
    const data = [
        {
            cateImg: "./images/category/samsung.png",
            cateName: "Samsung Refurbished Phones",
          },
          {
            cateImg: "./images/category/iphone.png",
            cateName: "Apple Refurbished Phones",
          },
          {
            cateImg: "./images/category/htc.png",
            cateName: "HTC Refurbished Phones",
          },
          {
            cateImg: "./images/category/nokia.png",
            cateName: "Nokia Refurbished Phones",
          },
          {
            cateImg: "./images/category/iphone.png",
            cateName: "Phones Under £10",
          },
          {
            cateImg: "./images/category/headphone.png",
            cateName: "Headphones",
          },
          {
            cateImg: "./images/category/charger.png",
            cateName: "Plugs And Chargers",
          },
          {
            cateImg: "./images/category/phone-case.png",
            cateName: "Covers And Cases",
          },
          {
            cateImg: "./images/category/smart-tv.png",
            cateName: "Samrt TV",
          },
          {
            cateImg: "./images/category/smart-watch.png",
            cateName: "Watches",
          },
          
    ]
  return (
    <>
    <div className="category">
        {data.map((value,index) => {
            return (
                <div className="box f_flex" key={index}>
                    <img src={value.cateImg} alt="" />
                    <span>{value.cateName}</span>
                </div>
            )
        })}   
    </div>
    </>
  )
}

export default Categories