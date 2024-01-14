import { useState, useEffect } from "react";
import '../App.css'
import StarRatingComponent from "./StarRatingComponent";

// Inside ProductPage.js
const ProductPage = () => {
    const [products, setProducts] = useState([]);
    const [isGrid, setIsGrid] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
  
    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
          setFilteredProducts(data);
          console.log('%cDebug jjjjjjjjjjjjjj :: ', 'background: #222; color: #bada55', data);
        });
    }, []);
  
    const handleSearch = () => {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    };

    const onProductClick = (i) => {
      window.location = `/product/${i}`
    }
  
    return (
      <div className="page-container">
        <h2>Product Page</h2>
        <input
          type="text"
          placeholder="Search products"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <div style={{ justifyContent: 'flex-end', width: '100%', display: 'flex', }}><span onClick={()=>setIsGrid(false)}>List</span>&nbsp;|&nbsp;<span onClick={()=>setIsGrid(true)}>Grid</span></div>
          {
            isGrid ?
            (
              <div className="product-grid" >
                {
                  filteredProducts.map((prod, i) => (
                    <div className="product-card" key={i} onClick={() => onProductClick(prod.id)}>
                      <img className="product-image" src={prod.image} alt={prod.title}/>
                      <h4 className="product-category">{prod.category}</h4>
                      <h3 className="product-title" onClick={() => onProductClick(prod.id)}>{prod.title}</h3>
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
                        <h4 className="product-category">{prod.category}</h4>
                        <h3 className="product-title" onClick={() => onProductClick(prod.id)}>{prod.title}</h3>
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
  
  export default ProductPage;
  