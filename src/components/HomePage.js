import { useState, useEffect } from "react";
import '../App.css';
import '../styles/homepage.component.css';
import StarRatingComponent from "./StarRatingComponent";

// Inside ProductPage.js
const HomePage = () => {
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

    }

  
    return (
      <div className="page-container">
        <div className="banner-bg"></div>
        <div className="hero-component">
            <div className="banner-component">
                <div style={{ marginRight: '10px' }}>
                    <h2>Samsung UHD 4K Curved Smart TV </h2>
                    <h2 className="product-price" style={{ fontSize: '36px' }}>$499</h2>
                    <h3 className="product-description">49" UHD 4K Curved Smart TV KU7350 Series 7</h3>
                    {/* <StarRatingComponent rating={prod.rating.rate} count={prod.rating.count}/> */}
                </div>
                <img src={'/images/tv.png'} style={{ width: 'clamp(200px, 340px, 50%)', height: 'clamp(200px, 250px, 50%)' }}/>
            </div>
            <div className="hero-grid">
                <div class="hero-grid-item">
                    <h3 >Men's Clothing</h3>
                    <div className="hero-grid-item-grid">
                        {
                            products?.map((prod, i) => (
                                prod.category==='men\'s clothing' && <div key={i} style={{ margin: '10px' }}><img src={prod.image} style={{ width: '180px', height: '180px', objectFit: 'contain', padding: '5px', borderRadius: '4px',  }}/><h4 >${prod.price}</h4></div>
                            ))
                        }
                    </div>
                </div>
                <div class="hero-grid-item">
                    <h3 >Women's Clothing</h3>
                    <div className="hero-grid-item-grid">
                        {
                            products?.filter((prod, i) => (prod.category==='women\'s clothing')).slice(0, 4).map((prod, i) => (
                                <div key={i} style={{ margin: '10px' }}><img src={prod.image} style={{ width: '180px', height: '180px', objectFit: 'contain', padding: '5px', borderRadius: '4px',  }}/><h4 >${prod.price}</h4></div>
                            ))
                        }
                    </div>
                </div>
                <div class="hero-grid-item">
                    <h3 >Jewellery</h3>
                    <div className="hero-grid-item-grid">
                        {
                            products?.filter((prod, i) => (prod.category==='jewelery')).slice(0, 4).map((prod, i) => (
                                <div key={i} style={{ margin: '10px' }}><img src={prod.image} style={{ width: '180px', height: '180px', objectFit: 'contain', padding: '5px', borderRadius: '4px',  }}/><h4 >${prod.price}</h4></div>
                            ))
                        }
                    </div>
                </div>
                <div class="hero-grid-item">
                    <h3 >Electronics</h3>
                    <div className="hero-grid-item-grid">
                        {
                            products?.filter((prod, i) => (prod.category==='electronics')).slice(0, 4).map((prod, i) => (
                                <div key={i} style={{ margin: '10px' }}><img src={prod.image} style={{ width: '180px', height: '180px', objectFit: 'contain', padding: '5px', borderRadius: '4px',  }}/><h4 >${prod.price}</h4></div>
                            ))
                        }
                    </div>
                </div>
            </div>
            
        </div>
        
        </div>
    );
  };
  
  export default HomePage;
  