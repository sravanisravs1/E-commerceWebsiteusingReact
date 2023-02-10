import React from "react";
import { useParams } from "react-router-dom";

import classes from './SingleProduct.module.css'

const productsDetails = [
    {
    id: '1',
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    Stars: '**** ' ,
   
    ProductReview: [
      { name: 'Sravani', review: 'Good'},
      { name: 'Reyansh', review: "Album is average"},
    ]
    },
    {
    id: '2',
    title: 'Black and white Colors',
    price: 50,
    Stars: '***',
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

    ProductReview: [
      { name: 'Sravani', review: 5},
      { name: 'Reyansh', review: 4},
    ]
    },
    {
    id: '3',
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    Stars: '***',

    ProductReview: [
        { name: 'Sravani', review: 5},
        { name: 'Reyansh', review: 4},
        
    ]
    },
    {
    id: '4',
    title: 'Blue Color',
    price: 100,
    Stars: '***',
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

    ProductReview: [
      { name: 'Sravani', review: 5},
      { name: 'Reyansh', review: 4},
    ]
    }
    ]

const SingleProduct = () => {
    // const params = useParams();
    // console.log(params.id)
    const { id } = useParams(); //params in key, value pair we destrcuring and get key only

    //here array so, for finding that perticular image we use find 
  let product = productsDetails.find((value) => value.id === id);
  console.log(product);
  return (
    <>
      <div className={classes.itemContainer}>
        <div className={classes.itemImage}>
          <img src={product.imageUrl} alt="product-images"/>
          
        </div>
        <div className={classes.itemDetails}>
          <h1>{product.title}</h1>
          <h3>Price: Rs{product.price} </h3><span> 55% off</span>
          <div className={classes.itemReview}>
            <p className={classes.reviewtitle}>Reviews : {product.Stars}</p>
            {product.ProductReview.map((e) => (
                <div className={classes.itemReview1}>
                    <p>{e.name} - </p> 
                    <div>{e.review} </div>
                    
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default SingleProduct;