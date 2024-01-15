import { useState, useEffect } from "react";
import '../App.css'
import StarRatingComponent from "./StarRatingComponent";
import { useSearchParams } from "react-router-dom";

// Inside ProductPage.js
const ProductPage = () => {
    const [products, setProducts] = useState([]);
    const [isGrid, setIsGrid] = useState(true);
    const [lookUp, setLookUp] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [categorySearchTerm, setCategorySearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filteredCategoryProducts, setFilteredCategoryProducts] = useState([]);
    const [searchParams] = useSearchParams();
  
    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
          setFilteredProducts(data);
          setFilteredCategoryProducts(data);

          if(searchParams.get('category')) {
            setLookUp(true);
            setCategorySearchTerm(searchParams.get('category'));
          }
        });
    }, []);

    useEffect(() => {
      if(lookUp && categorySearchTerm) {
        handleCategorySearch()
        setLookUp(false)
      }
    }, [lookUp, categorySearchTerm])
  
    const handleSearch = () => {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
      setFilteredCategoryProducts(filtered);
      setCategorySearchTerm('')
    };

    const handleCategorySearch = () => {
      const filteredCategories = filteredProducts.filter((product) =>
        product.category.toLowerCase().includes(categorySearchTerm.toLowerCase())
      );
      setFilteredCategoryProducts(filteredCategories);
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

        <input
          style={{ marginLeft: '10px' }}
          type="text"
          placeholder="Search categories"
          value={categorySearchTerm}
          onChange={(e) => setCategorySearchTerm(e.target.value)}
        />
        <button onClick={handleCategorySearch}>Search</button>

        <div style={{ justifyContent: 'flex-end', width: '100%', display: 'flex', }}><span onClick={()=>setIsGrid(false)}>List</span>&nbsp;|&nbsp;<span onClick={()=>setIsGrid(true)}>Grid</span></div>
          {
            isGrid ?
            (
              <div className="product-grid" >
                {
                  filteredCategoryProducts.map((prod, i) => (
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
                  filteredCategoryProducts.map((prod, i) => (
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