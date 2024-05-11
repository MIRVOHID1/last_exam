

// import "./Nav.scss"
// import { HiOutlineShoppingCart } from "react-icons/hi";
// import { PiBellRingingBold } from "react-icons/pi";
// import Logo from "../../assets/logo.svg"
// import { NavLink, Link } from "react-router-dom"
// import { useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";

// const Nav = () => {

//   const [inputValue, setInputValue] = useState("");
//   const [products, setProducts] = useState([]);
//   const handleSearch = () =>{
//     useEffect(() => {
//       fetch(`https://dummyjson.com/products/search?q=${inputValue}/`)
//           .then(response => response.json())
//           .then(data => setProducts(data))  
//     },[])
//   }
//   console.log(products)
//   return (
//     <nav className="nav">
//       <div className="container">
//           <div className="nav__top">
//               <ul className="left">
//                 <li>
//                   Hi!<Link to={"/"}><li>Sign in</li></Link>
//                   or<Link to={"/"}><li>register</li></Link>
//                 </li>
//                 <li>Daily Deals</li>
//                 <li>Brand Outlet</li>
//                 <li>Help & Contact</li>
//               </ul>
//               <ul className="right">
//                 <li>Sell</li>
//                 <Link to={"/watchList"}><li>Wishlist</li></Link>
//                 <li>My eBay</li>
//                 <li><PiBellRingingBold/></li>
//                 <Link to={"/cart"}><li><HiOutlineShoppingCart/></li></Link>
//               </ul>
//           </div>
//           <div className="nav__bottom">
//             <Link to={"/"}><img src={Logo} alt="logo" /></Link>
//             <select className="selection">
//                 <option disabled value="all">Shop bycategory</option>
//                 <option value="category1" >Category 1</option>
//                 <option value="category2">Category 2</option>
//                 <option value="category3">Category 3</option>
//                 <option value="category4">Category 4</option>
//                 <option value="category5">Category 5</option>
//                 <option value="category6">Category 6</option>
//                 <option value="category7">Category 7</option>
//                 <option value="category8">Category 8</option>
//                 <option value="category9">Category 9</option>
//                 <option value="category10">Category 10</option>
//                 <option value="category11">Category 11</option>
//                 <option value="category12">Category 12</option>
//                 <option value="category13">Category 13</option>
//                 <option value="category14">Category 14</option>
//                 <option value="category15">Category 15</option>
//                 <option value="category16">Category 16</option>
//                 <option value="category17">Category 17</option>
//                 <option value="category18">Category 18</option>
//                 <option value="category19">Category 19</option>
//                 <option value="category20">Category 20</option>
//             </select>
//             <form className="search" onChange={handleSearch}>
//               <input type="text" className="search__input" placeholder="Search for anything" onChange={(e) => setInputValue(e.target.value)}/>
//               <button type="submit" className="search__button">Search</button>
//             </form>
//             <li>Advanced</li>
//           </div>
//           <div>

//           </div>
//         </div>
//     </nav>
//   )
// }

// export default Nav





import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { PiBellRingingBold } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
      interface Product {
        id: string;
        title: string;
        description: string;
        price: number;
        images: string[];
      }

    const [inputValue, setInputValue] = useState('');
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (inputValue) {
            fetch(`https://dummyjson.com/products/search?q=${inputValue}/`)
                .then(response => response.json())
                .then(data => setProducts(data.products))
                .catch(error => console.error('Fetch error:', error));
        }
    }, [inputValue]);

    const handle = () => {
      navigate("/search")
    }
    console.log(inputValue);
    console.log(products);

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav__top">
                    <ul className="left">
                        <li>
                            Hi!
                            <Link to="/sign-up"><li>Sign Up</li></Link>
                            or
                            <Link to="/login"><li>Login</li></Link>
                        </li>
                        <li>Daily Deals</li>
                        <li>Brand Outlet</li>
                        <li>Help & Contact</li>
                    </ul>
                    <ul className="right">
                        <li>Sell</li>
                        <Link to="/watchList"><li>Wishlist</li></Link>
                        <li>My eBay</li>
                        <li><PiBellRingingBold /></li>
                        <Link to="/cart"><li><HiOutlineShoppingCart /></li></Link>
                    </ul>
                </div>
                <div className="nav__bottom">
                    <Link to="/"><img src={Logo} alt="logo" /></Link>
                    <select className="selection">
                        <option disabled value="all">Shop by category</option>
                        <option value="category1">Category 1</option>
                        <option value="category2">Category 2</option>
                        <option value="category3">Category 3</option>
                        <option value="category4">Category 4</option>
                        <option value="category5">Category 5</option>
                        <option value="category6">Category 6</option>
                        <option value="category7">Category 7</option>
                        <option value="category8">Category 8</option>
                        <option value="category9">Category 9</option>
                        <option value="category10">Category 10</option>
                        <option value="category11">Category 11</option>
                        <option value="category12">Category 12</option>
                        <option value="category13">Category 13</option>
                        <option value="category14">Category 14</option>
                        <option value="category15">Category 15</option>
                        <option value="category16">Category 16</option>
                        <option value="category17">Category 17</option>
                        <option value="category18">Category 18</option>
                        <option value="category19">Category 19</option>
                        <option value="category20">Category 20</option>
                    </select>
                    <form onClick={handle} className="search">
                        <input
                            type="text"
                            className="search__input"
                            placeholder="Search for anything"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button type="submit" className="search__button">Search</button>
                    </form>
                    <li>Advanced</li>
                </div>
                <div>
                  {products.map((product: Product) => (
                    <div key={product.id}>
                      <img src={product.images[0]} alt="" />
                      <h2>{product.title}</h2>
                      <p>{product.description}</p>
                      <p>{product.price}</p>
                    </div>
                  ))}
                </div>
            </div>
        </nav>
    );
};

export default Nav;
