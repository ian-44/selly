import { useState, useEffect } from "react";
import '../App.css'
import StarRatingComponent from "./StarRatingComponent";
import { useParams } from "react-router-dom";

// Inside ProductPage.js
const ProductDetail = () => {
    const params = useParams();
    const [products, setProducts] = useState([]);
    const [isGrid, setIsGrid] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
  
    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
            const filtered = data?.filter((product) =>
                {   
                    console.log('%cDebug CAT :: ', 'background: #222; color: #bada55', parseInt(params.id), data[parseInt(params.id) - 1]?.category);
                    return product.category === data[parseInt(params.id) - 1]?.category
                }
            );
            setFilteredProducts(filtered);
        });
    }, []);
  
    const onProductClick = (i) => {
        window.location = `/product/${i}`
      }

    return (
      <div className="page-container">
        <h2>Product Detail</h2>
        <div className="product-detail">
            <img className="product-detail-image" src={products[params.id - 1]?.image} />
            <div className="product-detail-detail">
                <h4 className="product-category">{products[params.id - 1]?.category}</h4>
                <h3 className="product-title">{products[params.id - 1]?.title}</h3>
                <h3 className="product-description-detail">{products[params.id - 1]?.description}</h3>
                <StarRatingComponent rating={products[params.id - 1]?.rating.rate} count={products[params.id - 1]?.rating.count}/>
                <h2 className="product-price">${products[params.id - 1]?.price}</h2>
            </div>
        </div>
        <div style={{ justifyContent: 'flex-end', width: '100%', display: 'flex', }}><span onClick={()=>setIsGrid(false)}>List</span>&nbsp;|&nbsp;<span onClick={()=>setIsGrid(true)}>Grid</span></div>
          {
            isGrid ?
            (
              <div className="product-grid" >
                {
                  filteredProducts.map((prod, i) => (
                    <div className="product-card" key={i} onClick={() => onProductClick(prod.id)}>
                      <img className="product-image" src={prod.image} alt={prod.title}/>
                      <h4 className="product-category">{prod?.category}</h4>
                      <h3 className="product-title">{prod.title}</h3>
                      <StarRatingComponent rating={prod.rating.rate} count={prod.rating.count}/>
                      <h2 className="product-price">${prod.price}</h2>
                    </div>
                  ))
                }
              </div>
            ) : (
              <div className="product-list" >
                {
                  filteredProducts.map((prod, i) => (
                    <div className="product-list-item" key={i} onClick={() => onProductClick(prod.id)}>
                      <div><img className="product-list-image" src={prod.image} alt={prod.title}/></div>
                      <div>
                        <h4 className="product-category">{prod?.category}</h4>
                        <h3 className="product-title">{prod.title}</h3>
                        <StarRatingComponent rating={prod.rating.rate} count={prod.rating.count}/>
                        <h2 className="product-price">${prod.price}</h2>
                      </div>
                    </div>
                  ))
                }
              </div>
            )
          }
        </div>
    );
  };
  
  export default ProductDetail;
  