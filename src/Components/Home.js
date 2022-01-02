import React from "react";



export default function Home() {
  return (

    <main className="main bg-gray">
  <section className="intro-section">
    <div className="home-slider owl-carousel owl-theme loaded slide-animate mb-4" data-owl-options="{
              'nav': false,
              'lazyLoad': false
          }">
      <div className="home-slide home-slide-1 banner" style={{backgroundColor: '#d9e2e1'}}>
        <figure>
          <img src="assets/images/demoes/demo35/slider/slide-1.jpg" alt="slide" width={1903} height={520} />
        </figure>
        <div className="banner-layer banner-layer-middle banner-layer-left">
          <h4 className="font-weight-normal text-body m-b-2 appear-animate" data-animation-name="fadeInDownShorter" data-animation-delay={100}>Exclusive Product New
            Arrival</h4>
          <h2 className="appear-animate" data-animation-name="fadeInUpShorter" data-animation-delay={600}>
            Organic Coffee</h2>
          <div className="position-relative appear-animate" data-animation-name="fadeInRightShorter" data-animation-delay={1100}>
            <h3 className="text-uppercase mb-4">Special Blend</h3>
            <h5 className="rotate-text font-weight-normal text-primary">Fresh!</h5>
          </div>
          <p className="font2 text-right text-uppercase appear-animate" data-animation-name="fadeInUpShorter" data-animation-delay={1400}>Breakfast products on
            sale</p>
          <div className="coupon-sale-text m-b-2 appear-animate" data-animation-name="fadeInRightShorter" data-animation-delay={1800}>
            <h6 className="text-uppercase text-right mb-0">
              <sup>up to</sup><strong className=" text-white">50%</strong>
            </h6>
          </div>
        </div>
      </div>
      <div className="home-slide home-slide-2 banner" style={{backgroundColor: '#f7eeef'}}>
        <figure>
          <img src="assets/images/demoes/demo35/slider/slide-2.jpg" alt="slide" width={1903} height={520} />
        </figure>
        <div className="banner-layer banner-layer-middle banner-layer-right">
          <h4 className="font-weight-normal text-body m-b-2 appear-animate" data-animation-name="fadeInDownShorter" data-animation-delay={100}>Exclusive Product New
            Arrival</h4>
          <h2 className="appear-animate" data-animation-name="fadeInRightShorter" data-animation-delay={600}>Fit Low Carb</h2>
          <div className="position-relative appear-animate" data-animation-name="fadeInRightShorter" data-animation-delay={1100}>
            <h3 className="text-uppercase">Candy Bar</h3>
            <h5 className="rotate-text font-weight-normal text-secondary">Sugar-Free</h5>
          </div>
          <p className="font2 text-right text-uppercase appear-animate" data-animation-name="fadeInUpShorter" data-animation-delay={1400}>Breakfast products on
            sale</p>
          <div className="coupon-sale-text pb-0 appear-animate" data-animation-name="fadeInRightShorter" data-animation-delay={1800}>
            <h6 className="text-uppercase text-right mb-0">
              <sup>up to</sup><strong className=" text-white">70%</strong>
            </h6>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="popular-section">
    <div className="container">
      <div className="info-boxes-slider owl-carousel" data-owl-options="{
                  'items': 1,
                  'margin': 0,
                  'dots': false,
                  'loop': false,
                  'autoHeight': true,
                  'responsive': {
                      '576': {
                          'items': 2
                      },
                      '768': {
                          'items': 3
                      },
                      '1200': {
                          'items': 4
                      }
                  }
              }">
        <div className="info-box info-box-icon-left">
          <i className="icon-shipping text-primary" />
          <div className="info-content">
            <h4 className="ls-n-25">Free Shipping &amp; Return</h4>
            <p className="font2 font-weight-light text-body ls-10">Free shipping on all orders over $99.
            </p>
          </div>
        </div>
        <div className="info-box info-box-icon-left">
          <i className="icon-money text-primary" />
          <div className="info-content">
            <h4 className="ls-n-25">Money Back Guarantee</h4>
            <p className="font2 font-weight-light text-body ls-10">100% money back guarantee</p>
          </div>
        </div>
        <div className="info-box info-box-icon-left">
          <i className="icon-support text-primary" />
          <div className="info-content">
            <h4 className="ls-n-25">Online Support 24/7</h4>
            <p className="font2 font-weight-light text-body ls-10">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="info-box info-box-icon-left">
          <i className="icon-secure-payment text-primary" />
          <div className="info-content">
            <h4 className="ls-n-25">Secure Payment</h4>
            <p className="font2 font-weight-light text-body ls-10">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <h2 className="section-title">Popular Departments</h2>
      <p className="section-info font2">Products From These Categories Often Buy</p>
      <div className="categories-slider owl-carousel owl-theme mb-4 appear-animate" data-owl-options="{
                  'items': 1,
                  'responsive': {
                      '576': {
                          'items': 2
                      },
                      '768': {
                          'items': 3
                      },
                      '992': {
                          'items': 4
                      }
                  }
              }" data-animation-name="fadeInUpShorter" data-animation-delay={200}>
        <div className="product-category bg-white">
          <a href="#">
            <figure><img src="assets/images/demoes/demo35/products/cats/cat-3.png" alt="cat" width={341} height={200} /></figure>
            <div className="category-content">
              <h3 className="font2 ls-n-25">Cooking</h3>
              <span className="font2 ls-n-20">4 Products</span>
            </div>
          </a>
        </div>
        <div className="product-category bg-white">
          <a href="#">
            <figure><img src="assets/images/demoes/demo35/products/cats/cat-2.png" alt="cat" width={341} height={200} /></figure>
            <div className="category-content">
              <h3 className="font2 ls-n-25">Fruits</h3>
              <span className="font2 ls-n-20">10 Products</span>
            </div>
          </a>
        </div>
        <div className="product-category bg-white">
          <a href="#">
            <figure><img src="assets/images/demoes/demo35/products/cats/cat-1.png" alt="cat" width={341} height={200} /></figure>
            <div className="category-content">
              <h3 className="font2 ls-n-25">Vegetables</h3>
              <span className="font2 ls-n-20">1 Products</span>
            </div>
          </a>
        </div>
        <div className="product-category bg-white">
          <a href="#">
            <figure><img src="assets/images/demoes/demo35/products/cats/cat-4.png" alt="cat" width={341} height={200} /></figure>
            <div className="category-content">
              <h3 className="font2 ls-n-25">Breakfast</h3>
              <span className="font2 ls-n-20">8 Products</span>
            </div>
          </a>
        </div>
      </div>
      <div className="appear-animate" data-animation-name="fadeIn" data-animation-delay={200}>
        <h2 className="section-title">Most Popular</h2>
        <p className="section-info font2">All our new arrivals in a exclusive brand selection</p>
        <div className="products-container product-slider-tab rounded">
          <ul className="nav nav-tabs border-0 px-4 pb-0 m-b-3">
            <li className="nav-item">
              <a className="nav-link active" data-toggle="tab" href="#all">View All</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#breakfast">Breakfast</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#cooking">Cooking</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#frozen">Frozen</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#fruits">Fruits</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#vegetables">Vegetables</a>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane fade show active" id="all">
              <div className="products-slider owl-carousel owl-theme nav-outer" data-owl-options="{
                                      'dots': false,
                                      'nav': true,
                                      'margin': 0,
                                      'responsive': {
                                          '576': {
                                              'items': 3
                                          },
                                          '768': {
                                              'items': 4
                                          },
                                          '1200': {
                                              'items': 6
                                          }
                                      }
                                  }">
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <a href="/products">
                      <img src="assets/images/demoes/demo35/products/product-1.jpg" width={217} height={217} alt="product" />
                    </a>
                    <div className="label-group">
                      <div className="product-label label-hot">HOT</div>
                    </div>
                    <div className="btn-icon-group">
                      <a href="/products" className="btn-icon btn-add-cart"><i className="fa fa-arrow-right" /></a>
                    </div>
                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                      View</a>
                  </figure>
                  <div className="product-details">
                    <div className="category-wrap">
                      <div className="category-list">
                        <a href="demo35-shop.html" className="product-category">category</a>
                      </div>
                      <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                    </div>
                    <h3 className="product-title">
                      <a href="/products">Trafilati al Bronzo</a>
                    </h3>
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style={{width: '0%'}} />
                        {/* End .ratings */}
                        <span className="tooltiptext tooltip-top" />
                      </div>{/* End .product-ratings */}
                    </div>{/* End .product-container */}
                    <div className="price-box">
                      <span className="product-price">$69.00 – $89.00</span>
                    </div>{/* End .price-box */}
                  </div>{/* End .product-details */}
                </div>
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <a href="/products">
                      <img src="assets/images/demoes/demo35/products/product-2.jpg" width={217} height={217} alt="product" />
                    </a>
                    <div className="label-group">
                      <div className="product-label label-hot">HOT</div>
                    </div>
                    <div className="btn-icon-group">
                      <a href="/products" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                    </div>
                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                      View</a>
                  </figure>
                  <div className="product-details">
                    <div className="category-wrap">
                      <div className="category-list">
                        <a href="demo35-shop.html" className="product-category">category</a>
                      </div>
                      <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                    </div>
                    <h3 className="product-title">
                      <a href="/products">Pineapple</a>
                    </h3>
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style={{width: '100%'}} />
                        {/* End .ratings */}
                        <span className="tooltiptext tooltip-top" />
                      </div>{/* End .product-ratings */}
                    </div>{/* End .product-container */}
                    <div className="price-box">
                      <span className="product-price">$19.00</span>
                    </div>{/* End .price-box */}
                  </div>{/* End .product-details */}
                </div>
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <a href="/products">
                      <img src="assets/images/demoes/demo35/products/product-3.jpg" width={217} height={217} alt="product" />
                    </a>
                    <div className="label-group">
                      <div className="product-label label-hot">HOT</div>
                      <div className="product-label label-sale">-16%</div>
                    </div>
                    <div className="btn-icon-group">
                      <a href="/products" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                    </div>
                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                      View</a>
                  </figure>
                  <div className="product-details">
                    <div className="category-wrap">
                      <div className="category-list">
                        <a href="demo35-shop.html" className="product-category">category</a>
                      </div>
                      <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                    </div>
                    <h3 className="product-title">
                      <a href="/products">Banana</a>
                    </h3>
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style={{width: '100%'}} />
                        {/* End .ratings */}
                        <span className="tooltiptext tooltip-top" />
                      </div>{/* End .product-ratings */}
                    </div>{/* End .product-container */}
                    <div className="price-box">
                      <span className="old-price">$129.00</span>
                      <span className="product-price">$108.00</span>
                    </div>{/* End .price-box */}
                  </div>{/* End .product-details */}
                </div>
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <a href="/products">
                      <img src="assets/images/demoes/demo35/products/product-4.jpg" width={217} height={217} alt="product" />
                    </a>
                    <div className="label-group">
                      <div className="product-label label-hot">HOT</div>
                    </div>
                    <div className="btn-icon-group">
                      <a href="/products" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                    </div>
                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                      View</a>
                  </figure>
                  <div className="product-details">
                    <div className="category-wrap">
                      <div className="category-list">
                        <a href="demo35-shop.html" className="product-category">category</a>
                      </div>
                      <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                    </div>
                    <h3 className="product-title">
                      <a href="/products">Leon Bayer</a>
                    </h3>
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style={{width: '0%'}} />
                        {/* End .ratings */}
                        <span className="tooltiptext tooltip-top" />
                      </div>{/* End .product-ratings */}
                    </div>{/* End .product-container */}
                    <div className="price-box">
                      <span className="product-price">$39.00</span>
                    </div>{/* End .price-box */}
                  </div>{/* End .product-details */}
                </div>
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <a href="/products">
                      <img src="assets/images/demoes/demo35/products/product-5.jpg" width={217} height={217} alt="product" />
                    </a>
                    <div className="label-group">
                      <div className="product-label label-sale">-17%</div>
                    </div>
                    <div className="btn-icon-group">
                      <a href="/products" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                    </div>
                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                      View</a>
                  </figure>
                  <div className="product-details">
                    <div className="category-wrap">
                      <div className="category-list">
                        <a href="demo35-shop.html" className="product-category">category</a>
                      </div>
                      <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                    </div>
                    <h3 className="product-title">
                      <a href="/products">Azeite de oliva extra Vergem</a>
                    </h3>
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style={{width: '0%'}} />
                        {/* End .ratings */}
                        <span className="tooltiptext tooltip-top" />
                      </div>{/* End .product-ratings */}
                    </div>{/* End .product-container */}
                    <div className="price-box">
                      <span className="old-price">$59.00</span>
                      <span className="product-price">$49.00</span>
                    </div>{/* End .price-box */}
                  </div>{/* End .product-details */}
                </div>
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <a href="/products">
                      <img src="assets/images/demoes/demo35/products/product-6.jpg" width={217} height={217} alt="product" />
                    </a>
                    <div className="btn-icon-group">
                      <a href="/products" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                    </div>
                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                      View</a>
                  </figure>
                  <div className="product-details">
                    <div className="category-wrap">
                      <div className="category-list">
                        <a href="demo35-shop.html" className="product-category">category</a>
                      </div>
                      <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                    </div>
                    <h3 className="product-title">
                      <a href="/products">Fonte de fibras</a>
                    </h3>
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style={{width: '0%'}} />
                        {/* End .ratings */}
                        <span className="tooltiptext tooltip-top" />
                      </div>{/* End .product-ratings */}
                    </div>{/* End .product-container */}
                    <div className="price-box">
                      <span className="product-price">$129.00</span>
                    </div>{/* End .price-box */}
                  </div>{/* End .product-details */}
                </div>
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <a href="/products">
                      <img src="assets/images/demoes/demo35/products/product-7.jpg" width={217} height={217} alt="product" />
                    </a>
                    <div className="label-group">
                      <div className="product-label label-hot">HOT</div>
                    </div>
                    <div className="btn-icon-group">
                      <a href="/products" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                    </div>
                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                      View</a>
                  </figure>
                  <div className="product-details">
                    <div className="category-wrap">
                      <div className="category-list">
                        <a href="demo35-shop.html" className="product-category">category</a>
                      </div>
                      <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                    </div>
                    <h3 className="product-title">
                      <a href="/products">Meat</a>
                    </h3>
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style={{width: '0%'}} />
                        {/* End .ratings */}
                        <span className="tooltiptext tooltip-top" />
                      </div>{/* End .product-ratings */}
                    </div>{/* End .product-container */}
                    <div className="price-box">
                      <span className="product-price">$19.00</span>
                    </div>{/* End .price-box */}
                  </div>{/* End .product-details */}
                </div>
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <a href="/products">
                      <img src="assets/images/demoes/demo35/products/product-8.jpg" width={217} height={217} alt="product" />
                    </a>
                    <div className="label-group">
                      <div className="product-label label-hot">HOT</div>
                    </div>
                    <div className="btn-icon-group">
                      <a href="/products" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                    </div>
                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                      View</a>
                  </figure>
                  <div className="product-details">
                    <div className="category-wrap">
                      <div className="category-list">
                        <a href="demo35-shop.html" className="product-category">category</a>
                      </div>
                      <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                    </div>
                    <h3 className="product-title">
                      <a href="/products">Coconut</a>
                    </h3>
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style={{width: '0%'}} />
                        {/* End .ratings */}
                        <span className="tooltiptext tooltip-top" />
                      </div>{/* End .product-ratings */}
                    </div>{/* End .product-container */}
                    <div className="price-box">
                      <span className="product-price">$25.00</span>
                    </div>{/* End .price-box */}
                  </div>{/* End .product-details */}
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="breakfast">
              <div className="products-slider owl-carousel owl-theme nav-outer" data-owl-options="{
                                      'dots': false,
                                      'nav': true,
                                      'margin': 0,
                                      'responsive': {
                                          '576': {
                                              'items': 3
                                          },
                                          '768': {
                                              'items': 4
                                          },
                                          '1200': {
                                              'items': 6
                                          }
                                      }
                                  }">
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <a href="/products">
                      <img src="assets/images/demoes/demo35/products/product-1.jpg" width={217} height={217} alt="product" />
                    </a>
                    <div className="label-group">
                      <div className="product-label label-hot">HOT</div>
                    </div>
                    <div className="btn-icon-group">
                      <a href="/products" className="btn-icon btn-add-cart"><i className="fa fa-arrow-right" /></a>
                    </div>
                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                      View</a>
                  </figure>
                  <div className="product-details">
                    <div className="category-wrap">
                      <div className="category-list">
                        <a href="demo35-shop.html" className="product-category">category</a>
                      </div>
                      <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                    </div>
                    <h3 className="product-title">
                      <a href="/products">Trafilati al Bronzo</a>
                    </h3>
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style={{width: '0%'}} />
                        {/* End .ratings */}
                        <span className="tooltiptext tooltip-top" />
                      </div>{/* End .product-ratings */}
                    </div>{/* End .product-container */}
                    <div className="price-box">
                      <span className="product-price">$69.00 – $89.00</span>
                    </div>{/* End .price-box */}
                  </div>{/* End .product-details */}
                </div>
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <a href="/products">
                      <img src="assets/images/demoes/demo35/products/product-3.jpg" width={217} height={217} alt="product" />
                    </a>
                    <div className="label-group">
                      <div className="product-label label-hot">HOT</div>
                      <div className="product-label label-sale">-16%</div>
                    </div>
                    <div className="btn-icon-group">
                      <a href="/products" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                    </div>
                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                      View</a>
                  </figure>
                  <div className="product-details">
                    <div className="category-wrap">
                      <div className="category-list">
                        <a href="demo35-shop.html" className="product-category">category</a>
                      </div>
                      <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                    </div>
                    <h3 className="product-title">
                      <a href="/products">Banana</a>
                    </h3>
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style={{width: '100%'}} />
                        {/* End .ratings */}
                        <span className="tooltiptext tooltip-top" />
                      </div>{/* End .product-ratings */}
                    </div>{/* End .product-container */}
                    <div className="price-box">
                      <span className="old-price">$129.00</span>
                      <span className="product-price">$108.00</span>
                    </div>{/* End .price-box */}
                  </div>{/* End .product-details */}
                </div>
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <a href="/products">
                      <img src="assets/images/demoes/demo35/products/product-4.jpg" width={217} height={217} alt="product" />
                    </a>
                    <div className="label-group">
                      <div className="product-label label-hot">HOT</div>
                    </div>
                    <div className="btn-icon-group">
                      <a href="/products" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                    </div>
                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                      View</a>
                  </figure>
                  <div className="product-details">
                    <div className="category-wrap">
                      <div className="category-list">
                        <a href="demo35-shop.html" className="product-category">category</a>
                      </div>
                      <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                    </div>
                    <h3 className="product-title">
                      <a href="/products">Leon Bayer</a>
                    </h3>
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style={{width: '0%'}} />
                        {/* End .ratings */}
                        <span className="tooltiptext tooltip-top" />
                      </div>{/* End .product-ratings */}
                    </div>{/* End .product-container */}
                    <div className="price-box">
                      <span className="product-price">$39.00</span>
                    </div>{/* End .price-box */}
                  </div>{/* End .product-details */}
                </div>
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <a href="/products">
                      <img src="assets/images/demoes/demo35/products/product-5.jpg" width={217} height={217} alt="product" />
                    </a>
                    <div className="label-group">
                      <div className="product-label label-sale">-17%</div>
                    </div>
                    <div className="btn-icon-group">
                      <a href="/products" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                    </div>
                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                      View</a>
                  </figure>
                  <div className="product-details">
                    <div className="category-wrap">
                      <div className="category-list">
                        <a href="demo35-shop.html" className="product-category">category</a>
                      </div>
                      <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                    </div>
                    <h3 className="product-title">
                      <a href="/products">Azeite de oliva extra Vergem</a>
                    </h3>
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style={{width: '0%'}} />
                        {/* End .ratings */}
                        <span className="tooltiptext tooltip-top" />
                      </div>{/* End .product-ratings */}
                    </div>{/* End .product-container */}
                    <div className="price-box">
                      <span className="old-price">$59.00</span>
                      <span className="product-price">$49.00</span>
                    </div>{/* End .price-box */}
                  </div>{/* End .product-details */}
                </div>
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <a href="/products">
                      <img src="assets/images/demoes/demo35/products/product-6.jpg" width={217} height={217} alt="product" />
                    </a>
                    <div className="btn-icon-group">
                      <a href="/products" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                    </div>
                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                      View</a>
                  </figure>
                  <div className="product-details">
                    <div className="category-wrap">
                      <div className="category-list">
                        <a href="demo35-shop.html" className="product-category">category</a>
                      </div>
                      <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                    </div>
                    <h3 className="product-title">
                      <a href="/products">Fonte de fibras</a>
                    </h3>
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style={{width: '0%'}} />
                        {/* End .ratings */}
                        <span className="tooltiptext tooltip-top" />
                      </div>{/* End .product-ratings */}
                    </div>{/* End .product-container */}
                    <div className="price-box">
                      <span className="product-price">$129.00</span>
                    </div>{/* End .price-box */}
                  </div>{/* End .product-details */}
                </div>
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <a href="/products">
                      <img src="assets/images/demoes/demo35/products/product-7.jpg" width={217} height={217} alt="product" />
                    </a>
                    <div className="label-group">
                      <div className="product-label label-hot">HOT</div>
                    </div>
                    <div className="btn-icon-group">
                      <a href="/products" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                    </div>
                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                      View</a>
                  </figure>
                  <div className="product-details">
                    <div className="category-wrap">
                      <div className="category-list">
                        <a href="demo35-shop.html" className="product-category">category</a>
                      </div>
                      <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                    </div>
                    <h3 className="product-title">
                      <a href="/products">Meat</a>
                    </h3>
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style={{width: '0%'}} />
                        {/* End .ratings */}
                        <span className="tooltiptext tooltip-top" />
                      </div>{/* End .product-ratings */}
                    </div>{/* End .product-container */}
                    <div className="price-box">
                      <span className="product-price">$19.00</span>
                    </div>{/* End .price-box */}
                  </div>{/* End .product-details */}
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="cooking">
              <div className="products-slider owl-carousel owl-theme nav-outer" data-owl-options="{
                                      'dots': false,
                                      'nav': true,
                                      'margin': 0,
                                      'responsive': {
                                          '576': {
                                              'items': 3
                                          },
                                          '768': {
                                              'items': 4
                                          },
                                          '1200': {
                                              'items': 6
                                          }
                                      }
                                  }">
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <a href="/products">
                      <img src="assets/images/demoes/demo35/products/product-3.jpg" width={217} height={217} alt="product" />
                    </a>
                    <div className="label-group">
                      <div className="product-label label-hot">HOT</div>
                      <div className="product-label label-sale">-16%</div>
                    </div>
                    <div className="btn-icon-group">
                      <a href="/products" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                    </div>
                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                      View</a>
                  </figure>
                  <div className="product-details">
                    <div className="category-wrap">
                      <div className="category-list">
                        <a href="demo35-shop.html" className="product-category">category</a>
                      </div>
                      <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                    </div>
                    <h3 className="product-title">
                      <a href="/products">Banana</a>
                    </h3>
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style={{width: '100%'}} />
                        {/* End .ratings */}
                        <span className="tooltiptext tooltip-top" />
                      </div>{/* End .product-ratings */}
                    </div>{/* End .product-container */}
                    <div className="price-box">
                      <span className="old-price">$129.00</span>
                      <span className="product-price">$108.00</span>
                    </div>{/* End .price-box */}
                  </div>{/* End .product-details */}
                </div>
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <a href="/products">
                      <img src="assets/images/demoes/demo35/products/product-4.jpg" width={217} height={217} alt="product" />
                    </a>
                    <div className="label-group">
                      <div className="product-label label-hot">HOT</div>
                    </div>
                    <div className="btn-icon-group">
                      <a href="/products" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                    </div>
                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                      View</a>
                  </figure>
                  <div className="product-details">
                    <div className="category-wrap">
                      <div className="category-list">
                        <a href="demo35-shop.html" className="product-category">category</a>
                      </div>
                      <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                    </div>
                    <h3 className="product-title">
                      <a href="/products">Leon Bayer</a>
                    </h3>
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style={{width: '0%'}} />
                        {/* End .ratings */}
                        <span className="tooltiptext tooltip-top" />
                      </div>{/* End .product-ratings */}
                    </div>{/* End .product-container */}
                    <div className="price-box">
                      <span className="product-price">$39.00</span>
                    </div>{/* End .price-box */}
                  </div>{/* End .product-details */}
                </div>
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <a href="/products">
                      <img src="assets/images/demoes/demo35/products/product-7.jpg" width={217} height={217} alt="product" />
                    </a>
                    <div className="label-group">
                      <div className="product-label label-hot">HOT</div>
                    </div>
                    <div className="btn-icon-group">
                      <a href="/products" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                    </div>
                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                      View</a>
                  </figure>
                  <div className="product-details">
                    <div className="category-wrap">
                      <div className="category-list">
                        <a href="demo35-shop.html" className="product-category">category</a>
                      </div>
                      <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                    </div>
                    <h3 className="product-title">
                      <a href="/products">Meat</a>
                    </h3>
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style={{width: '0%'}} />
                        {/* End .ratings */}
                        <span className="tooltiptext tooltip-top" />
                      </div>{/* End .product-ratings */}
                    </div>{/* End .product-container */}
                    <div className="price-box">
                      <span className="product-price">$19.00</span>
                    </div>{/* End .price-box */}
                  </div>{/* End .product-details */}
                </div>
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <a href="/products">
                      <img src="assets/images/demoes/demo35/products/product-9.jpg" width={217} height={217} alt="product" />
                    </a>
                    <div className="btn-icon-group">
                      <a href="/products" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                    </div>
                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                      View</a>
                  </figure>
                  <div className="product-details">
                    <div className="category-wrap">
                      <div className="category-list">
                        <a href="demo35-shop.html" className="product-category">category</a>
                      </div>
                      <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                    </div>
                    <h3 className="product-title">
                      <a href="/products">Temperos</a>
                    </h3>
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style={{width: '0%'}} />
                        {/* End .ratings */}
                        <span className="tooltiptext tooltip-top" />
                      </div>{/* End .product-ratings */}
                    </div>{/* End .product-container */}
                    <div className="price-box">
                      <span className="product-price">$39.00</span>
                    </div>{/* End .price-box */}
                  </div>{/* End .product-details */}
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="frozen">
              <div className="products-slider owl-carousel owl-theme nav-outer" data-owl-options="{
                                      'dots': false,
                                      'nav': true,
                                      'margin': 0,
                                      'responsive': {
                                          '576': {
                                              'items': 3
                                          },
                                          '768': {
                                              'items': 4
                                          },
                                          '1200': {
                                              'items': 6
                                          }
                                      }
                                  }">
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <a href="/products">
                      <img src="assets/images/demoes/demo35/products/product-1.jpg" width={217} height={217} alt="product" />
                    </a>
                    <div className="label-group">
                      <div className="product-label label-hot">HOT</div>
                    </div>
                    <div className="btn-icon-group">
                      <a href="/products" className="btn-icon btn-add-cart"><i className="fa fa-arrow-right" /></a>
                    </div>
                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                      View</a>
                  </figure>
                  <div className="product-details">
                    <div className="category-wrap">
                      <div className="category-list">
                        <a href="demo35-shop.html" className="product-category">category</a>
                      </div>
                      <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                    </div>
                    <h3 className="product-title">
                      <a href="/products">Trafilati al Bronzo</a>
                    </h3>
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style={{width: '0%'}} />
                        {/* End .ratings */}
                        <span className="tooltiptext tooltip-top" />
                      </div>{/* End .product-ratings */}
                    </div>{/* End .product-container */}
                    <div className="price-box">
                      <span className="product-price">$69.00 – $89.00</span>
                    </div>{/* End .price-box */}
                  </div>{/* End .product-details */}
                </div>
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <a href="/products">
                      <img src="assets/images/demoes/demo35/products/product-2.jpg" width={217} height={217} alt="product" />
                    </a>
                    <div className="label-group">
                      <div className="product-label label-hot">HOT</div>
                    </div>
                    <div className="btn-icon-group">
                      <a href="/products" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                    </div>
                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                      View</a>
                  </figure>
                  <div className="product-details">
                    <div className="category-wrap">
                      <div className="category-list">
                        <a href="demo35-shop.html" className="product-category">category</a>
                      </div>
                      <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                    </div>
                    <h3 className="product-title">
                      <a href="/products">Pineapple</a>
                    </h3>
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style={{width: '100%'}} />
                        {/* End .ratings */}
                        <span className="tooltiptext tooltip-top" />
                      </div>{/* End .product-ratings */}
                    </div>{/* End .product-container */}
                    <div className="price-box">
                      <span className="product-price">$19.00</span>
                    </div>{/* End .price-box */}
                  </div>{/* End .product-details */}
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="fruits">
              <div className="products-slider owl-carousel owl-theme nav-outer" data-owl-options="{
                                      'dots': false,
                                      'nav': true,
                                      'margin': 0,
                                      'responsive': {
                                          '576': {
                                              'items': 3
                                          },
                                          '768': {
                                              'items': 4
                                          },
                                          '1200': {
                                              'items': 6
                                          }
                                      }
                                  }">
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <a href="/products">
                      <img src="assets/images/demoes/demo35/products/product-1.jpg" width={217} height={217} alt="product" />
                    </a>
                    <div className="label-group">
                      <div className="product-label label-hot">HOT</div>
                    </div>
                    <div className="btn-icon-group">
                      <a href="/products" className="btn-icon btn-add-cart"><i className="fa fa-arrow-right" /></a>
                    </div>
                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                      View</a>
                  </figure>
                  <div className="product-details">
                    <div className="category-wrap">
                      <div className="category-list">
                        <a href="demo35-shop.html" className="product-category">category</a>
                      </div>
                      <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                    </div>
                    <h3 className="product-title">
                      <a href="/products">Trafilati al Bronzo</a>
                    </h3>
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style={{width: '0%'}} />
                        {/* End .ratings */}
                        <span className="tooltiptext tooltip-top" />
                      </div>{/* End .product-ratings */}
                    </div>{/* End .product-container */}
                    <div className="price-box">
                      <span className="product-price">$69.00 – $89.00</span>
                    </div>{/* End .price-box */}
                  </div>{/* End .product-details */}
                </div>
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <a href="/products">
                      <img src="assets/images/demoes/demo35/products/product-2.jpg" width={217} height={217} alt="product" />
                    </a>
                    <div className="label-group">
                      <div className="product-label label-hot">HOT</div>
                    </div>
                    <div className="btn-icon-group">
                      <a href="/products" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                    </div>
                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                      View</a>
                  </figure>
                  <div className="product-details">
                    <div className="category-wrap">
                      <div className="category-list">
                        <a href="demo35-shop.html" className="product-category">category</a>
                      </div>
                      <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                    </div>
                    <h3 className="product-title">
                      <a href="/products">Pineapple</a>
                    </h3>
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style={{width: '100%'}} />
                        {/* End .ratings */}
                        <span className="tooltiptext tooltip-top" />
                      </div>{/* End .product-ratings */}
                    </div>{/* End .product-container */}
                    <div className="price-box">
                      <span className="product-price">$19.00</span>
                    </div>{/* End .price-box */}
                  </div>{/* End .product-details */}
                </div>
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <a href="/products">
                      <img src="assets/images/demoes/demo35/products/product-4.jpg" width={217} height={217} alt="product" />
                    </a>
                    <div className="label-group">
                      <div className="product-label label-hot">HOT</div>
                    </div>
                    <div className="btn-icon-group">
                      <a href="/products" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                    </div>
                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                      View</a>
                  </figure>
                  <div className="product-details">
                    <div className="category-wrap">
                      <div className="category-list">
                        <a href="demo35-shop.html" className="product-category">category</a>
                      </div>
                      <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                    </div>
                    <h3 className="product-title">
                      <a href="/products">Leon Bayer</a>
                    </h3>
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style={{width: '0%'}} />
                        {/* End .ratings */}
                        <span className="tooltiptext tooltip-top" />
                      </div>{/* End .product-ratings */}
                    </div>{/* End .product-container */}
                    <div className="price-box">
                      <span className="product-price">$39.00</span>
                    </div>{/* End .price-box */}
                  </div>{/* End .product-details */}
                </div>
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <a href="/products">
                      <img src="assets/images/demoes/demo35/products/product-6.jpg" width={217} height={217} alt="product" />
                    </a>
                    <div className="btn-icon-group">
                      <a href="/products" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                    </div>
                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                      View</a>
                  </figure>
                  <div className="product-details">
                    <div className="category-wrap">
                      <div className="category-list">
                        <a href="demo35-shop.html" className="product-category">category</a>
                      </div>
                      <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                    </div>
                    <h3 className="product-title">
                      <a href="/products">Fonte de fibras</a>
                    </h3>
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style={{width: '0%'}} />
                        {/* End .ratings */}
                        <span className="tooltiptext tooltip-top" />
                      </div>{/* End .product-ratings */}
                    </div>{/* End .product-container */}
                    <div className="price-box">
                      <span className="product-price">$129.00</span>
                    </div>{/* End .price-box */}
                  </div>{/* End .product-details */}
                </div>
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <a href="/products">
                      <img src="assets/images/demoes/demo35/products/product-7.jpg" width={217} height={217} alt="product" />
                    </a>
                    <div className="label-group">
                      <div className="product-label label-hot">HOT</div>
                    </div>
                    <div className="btn-icon-group">
                      <a href="/products" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                    </div>
                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                      View</a>
                  </figure>
                  <div className="product-details">
                    <div className="category-wrap">
                      <div className="category-list">
                        <a href="demo35-shop.html" className="product-category">category</a>
                      </div>
                      <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                    </div>
                    <h3 className="product-title">
                      <a href="/products">Meat</a>
                    </h3>
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style={{width: '0%'}} />
                        {/* End .ratings */}
                        <span className="tooltiptext tooltip-top" />
                      </div>{/* End .product-ratings */}
                    </div>{/* End .product-container */}
                    <div className="price-box">
                      <span className="product-price">$19.00</span>
                    </div>{/* End .price-box */}
                  </div>{/* End .product-details */}
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="vegetables">
              <div className="products-slider owl-carousel owl-theme nav-outer" data-owl-options="{
                                      'dots': false,
                                      'nav': true,
                                      'margin': 0,
                                      'responsive': {
                                          '576': {
                                              'items': 3
                                          },
                                          '768': {
                                              'items': 4
                                          },
                                          '1200': {
                                              'items': 6
                                          }
                                      }
                                  }">
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <a href="/products">
                      <img src="assets/images/demoes/demo35/products/product-7.jpg" width={217} height={217} alt="product" />
                    </a>
                    <div className="label-group">
                      <div className="product-label label-hot">HOT</div>
                    </div>
                    <div className="btn-icon-group">
                      <a href="/products" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                    </div>
                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                      View</a>
                  </figure>
                  <div className="product-details">
                    <div className="category-wrap">
                      <div className="category-list">
                        <a href="demo35-shop.html" className="product-category">category</a>
                      </div>
                      <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                    </div>
                    <h3 className="product-title">
                      <a href="/products">Meat</a>
                    </h3>
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style={{width: '0%'}} />
                        {/* End .ratings */}
                        <span className="tooltiptext tooltip-top" />
                      </div>{/* End .product-ratings */}
                    </div>{/* End .product-container */}
                    <div className="price-box">
                      <span className="product-price">$19.00</span>
                    </div>{/* End .price-box */}
                  </div>{/* End .product-details */}
                </div>
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <a href="/products">
                      <img src="assets/images/demoes/demo35/products/product-9.jpg" width={217} height={217} alt="product" />
                    </a>
                    <div className="btn-icon-group">
                      <a href="/products" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                    </div>
                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                      View</a>
                  </figure>
                  <div className="product-details">
                    <div className="category-wrap">
                      <div className="category-list">
                        <a href="demo35-shop.html" className="product-category">category</a>
                      </div>
                      <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                    </div>
                    <h3 className="product-title">
                      <a href="/products">Temperos</a>
                    </h3>
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style={{width: '0%'}} />
                        {/* End .ratings */}
                        <span className="tooltiptext tooltip-top" />
                      </div>{/* End .product-ratings */}
                    </div>{/* End .product-container */}
                    <div className="price-box">
                      <span className="product-price">$39.00</span>
                    </div>{/* End .price-box */}
                  </div>{/* End .product-details */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="special-section">
    <div className="container">
      <div className="appear-animate" data-animation-name="fadeIn" data-animation-delay={200}>
        <h2 className="section-title">This Week's Specials</h2>
        <p className="section-info font2">All our new arrivals in a exclusive brand selection</p>
        <div className="products-container bg-white mb-4 rounded">
          <div className="row">
            <div className="products-slider owl-carousel owl-theme nav-outer" data-owl-options="{
                              'dots': false,
                              'nav': true,
                              'margin': 0,
                              'responsive': {
                                  '576': {
                                      'items': 3
                                  },
                                  '768': {
                                      'items': 4
                                  },
                                  '1200': {
                                      'items': 6
                                  }
                              }
                          }">
              <div className="product-default inner-quickview inner-icon">
                <figure>
                  <a href="/products">
                    <img src="assets/images/demoes/demo35/products/product-9.jpg" width={217} height={217} alt="product" />
                  </a>
                  <div className="btn-icon-group">
                    <a href="/products" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                  </div>
                  <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                    View</a>
                </figure>
                <div className="product-details">
                  <div className="category-wrap">
                    <div className="category-list">
                      <a href="demo35-shop.html" className="product-category">category</a>
                    </div>
                    <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                  </div>
                  <h3 className="product-title">
                    <a href="/products">Temperos</a>
                  </h3>
                  <div className="ratings-container">
                    <div className="product-ratings">
                      <span className="ratings" style={{width: '0%'}} />
                      {/* End .ratings */}
                      <span className="tooltiptext tooltip-top" />
                    </div>{/* End .product-ratings */}
                  </div>{/* End .product-container */}
                  <div className="price-box">
                    <span className="product-price">$39.00</span>
                  </div>{/* End .price-box */}
                </div>{/* End .product-details */}
              </div>
              <div className="product-default inner-quickview inner-icon">
                <figure>
                  <a href="/products">
                    <img src="assets/images/demoes/demo35/products/product-10.jpg" width={217} height={217} alt="product" />
                  </a>
                  <div className="label-group">
                    <div className="product-label label-hot">HOT</div>
                  </div>
                  <div className="btn-icon-group">
                    <a href="/products" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                  </div>
                  <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                    View</a>
                </figure>
                <div className="product-details">
                  <div className="category-wrap">
                    <div className="category-list">
                      <a href="demo35-shop.html" className="product-category">category</a>
                    </div>
                    <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                  </div>
                  <h3 className="product-title">
                    <a href="/products">Clasico</a>
                  </h3>
                  <div className="ratings-container">
                    <div className="product-ratings">
                      <span className="ratings" style={{width: '0%'}} />
                      {/* End .ratings */}
                      <span className="tooltiptext tooltip-top" />
                    </div>{/* End .product-ratings */}
                  </div>{/* End .product-container */}
                  <div className="price-box">
                    <span className="product-price">$119.00</span>
                  </div>{/* End .price-box */}
                </div>{/* End .product-details */}
              </div>
              <div className="product-default inner-quickview inner-icon">
                <figure>
                  <a href="/products">
                    <img src="assets/images/demoes/demo35/products/product-11.jpg" width={217} height={217} alt="product" />
                  </a>
                  <div className="btn-icon-group">
                    <a href="/products" className="btn-icon btn-add-cart"><i className="fa fa-arrow-right" /></a>
                  </div>
                  <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                    View</a>
                </figure>
                <div className="product-details">
                  <div className="category-wrap">
                    <div className="category-list">
                      <a href="demo35-shop.html" className="product-category">category</a>
                    </div>
                    <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                  </div>
                  <h3 className="product-title">
                    <a href="/products">Coffee</a>
                  </h3>
                  <div className="ratings-container">
                    <div className="product-ratings">
                      <span className="ratings" style={{width: '0%'}} />
                      {/* End .ratings */}
                      <span className="tooltiptext tooltip-top" />
                    </div>{/* End .product-ratings */}
                  </div>{/* End .product-container */}
                  <div className="price-box">
                    <span className="product-price">$34.00</span>
                  </div>{/* End .price-box */}
                </div>{/* End .product-details */}
              </div>
              <div className="product-default inner-quickview inner-icon">
                <figure>
                  <a href="/products">
                    <img src="assets/images/demoes/demo35/products/product-12.jpg" width={217} height={217} alt="product" />
                  </a>
                  <div className="btn-icon-group">
                    <a href="/products" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                  </div>
                  <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                    View</a>
                </figure>
                <div className="product-details">
                  <div className="category-wrap">
                    <div className="category-list">
                      <a href="demo35-shop.html" className="product-category">category</a>
                    </div>
                    <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                  </div>
                  <h3 className="product-title">
                    <a href="/products">Grape</a>
                  </h3>
                  <div className="ratings-container">
                    <div className="product-ratings">
                      <span className="ratings" style={{width: '100%'}} />
                      {/* End .ratings */}
                      <span className="tooltiptext tooltip-top" />
                    </div>{/* End .product-ratings */}
                  </div>{/* End .product-container */}
                  <div className="price-box">
                    <span className="product-price">$29.00</span>
                  </div>{/* End .price-box */}
                </div>{/* End .product-details */}
              </div>
              <div className="product-default inner-quickview inner-icon">
                <figure>
                  <a href="/products">
                    <img src="assets/images/demoes/demo35/products/product-13.jpg" width={217} height={217} alt="product" />
                  </a>
                  <div className="label-group">
                    <div className="product-label label-hot">HOT</div>
                  </div>
                  <div className="btn-icon-group">
                    <a href="/products" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                  </div>
                  <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                    View</a>
                </figure>
                <div className="product-details">
                  <div className="category-wrap">
                    <div className="category-list">
                      <a href="demo35-shop.html" className="product-category">category</a>
                    </div>
                    <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                  </div>
                  <h3 className="product-title">
                    <a href="/products">Magic Toast</a>
                  </h3>
                  <div className="ratings-container">
                    <div className="product-ratings">
                      <span className="ratings" style={{width: '100%'}} />
                      {/* End .ratings */}
                      <span className="tooltiptext tooltip-top" />
                    </div>{/* End .product-ratings */}
                  </div>{/* End .product-container */}
                  <div className="price-box">
                    <span className="old-price">$29.00</span>
                    <span className="product-price">$18.00</span>
                  </div>{/* End .price-box */}
                </div>{/* End .product-details */}
              </div>
              <div className="product-default inner-quickview inner-icon">
                <figure>
                  <a href="/products">
                    <img src="assets/images/demoes/demo35/products/product-14.jpg" width={217} height={217} alt="product" />
                  </a>
                  <div className="btn-icon-group">
                    <a href="/products" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                  </div>
                  <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                    View</a>
                </figure>
                <div className="product-details">
                  <div className="category-wrap">
                    <div className="category-list">
                      <a href="demo35-shop.html" className="product-category">category</a>
                    </div>
                    <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                  </div>
                  <h3 className="product-title">
                    <a href="/products">Water Melon</a>
                  </h3>
                  <div className="ratings-container">
                    <div className="product-ratings">
                      <span className="ratings" style={{width: '80%'}} />
                      {/* End .ratings */}
                      <span className="tooltiptext tooltip-top" />
                    </div>{/* End .product-ratings */}
                  </div>{/* End .product-container */}
                  <div className="price-box">
                    <span className="product-price">$12.00</span>
                  </div>{/* End .price-box */}
                </div>{/* End .product-details */}
              </div>
              <div className="product-default inner-quickview inner-icon">
                <figure>
                  <a href="/products">
                    <img src="assets/images/demoes/demo35/products/product-15.jpg" width={217} height={217} alt="product" />
                  </a>
                  <div className="label-group">
                    <div className="product-label label-sale">-17%</div>
                  </div>
                  <div className="btn-icon-group">
                    <a href="/products" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                  </div>
                  <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                    View</a>
                </figure>
                <div className="product-details">
                  <div className="category-wrap">
                    <div className="category-list">
                      <a href="demo35-shop.html" className="product-category">category</a>
                    </div>
                    <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                  </div>
                  <h3 className="product-title">
                    <a href="/products">Melon</a>
                  </h3>
                  <div className="ratings-container">
                    <div className="product-ratings">
                      <span className="ratings" style={{width: '0%'}} />
                      {/* End .ratings */}
                      <span className="tooltiptext tooltip-top" />
                    </div>{/* End .product-ratings */}
                  </div>{/* End .product-container */}
                  <div className="price-box">
                    <span className="old-price">$129.00</span>
                    <span className="product-price">$109.00</span>
                  </div>{/* End .price-box */}
                </div>{/* End .product-details */}
              </div>
              <div className="product-default inner-quickview inner-icon">
                <figure>
                  <a href="/products">
                    <img src="assets/images/demoes/demo35/products/product-16.jpg" width={217} height={217} alt="product" />
                  </a>
                  <div className="label-group">
                    <div className="product-label label-sale">-17%</div>
                  </div>
                  <div className="btn-icon-group">
                    <a href="/products" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                  </div>
                  <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                    View</a>
                </figure>
                <div className="product-details">
                  <div className="category-wrap">
                    <div className="category-list">
                      <a href="demo35-shop.html" className="product-category">category</a>
                    </div>
                    <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                  </div>
                  <h3 className="product-title">
                    <a href="/products">Raw Meat</a>
                  </h3>
                  <div className="ratings-container">
                    <div className="product-ratings">
                      <span className="ratings" style={{width: '0%'}} />
                      {/* End .ratings */}
                      <span className="tooltiptext tooltip-top" />
                    </div>{/* End .product-ratings */}
                  </div>{/* End .product-container */}
                  <div className="price-box">
                    <span className="old-price">$59.00</span>
                    <span className="product-price">$49.00</span>
                  </div>{/* End .price-box */}
                </div>{/* End .product-details */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <div className="banner banner1 rounded m-b-4" style={{backgroundColor: '#d9e1e1'}}>
            <figure>
              <img src="assets/images/demoes/demo35/banners/banner-1.png" alt="banner" width={939} height={235} />
            </figure>
            <div className="banner-layer banner-layer-middle banner-layer-right">
              <h4 className="font-weight-normal text-body appear-animate" data-animation-name="fadeInDownShorter" data-animation-delay={100}>Exclusive
                Product New Arrival</h4>
              <h2 className="m-l-n-1 p-r-5 m-r-2 appear-animate" data-animation-name="fadeInUpShorter" data-animation-delay={600}>Organic Coffee</h2>
              <div className="position-relative appear-animate" data-animation-name="fadeInRightShorter" data-animation-delay={1100}>
                <h3 className="text-uppercase">Special Blend</h3>
                <h5 className="rotate-text font-weight-normal text-primary">Fresh!</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="banner banner2 rounded mb-3" style={{backgroundColor: '#b28475'}}>
            <figure>
              <img src="assets/images/demoes/demo35/banners/banner-2.png" alt="banner" width={460} height={235} />
            </figure>
            <div className="banner-layer banner-layer-middle banner-layer-right">
              <h4 className="font-weight-normal appear-animiate" data-animation-name="fadeInUpShorter" data-animation-delay={200}>Stay Healthy</h4>
              <h2 className="text-white appear-animate" data-animation-name="fadeInUpShorter" data-animation-delay={400}>Low Carb</h2>
              <h3 className="text-white text-uppercase mb-2 appear-animate" data-animation-name="fadeInUpShorter" data-animation-delay={600}>Strawberry</h3>
              <h5 className="font-weight-normal text-white mb-0 appear-animate" data-animation-name="fadeInUpShorter" data-animation-delay={800}>Sugar-Free</h5>
            </div>
          </div>
        </div>
      </div>
      <h2 className="section-title">Special Offers</h2>
      <p className="section-info font2">All our new arrivals in a exclusive brand selection</p>
      <div className="row offer-products">
        <div className="col-md-4 appear-animate" data-animation-name="fadeInRightShorter" data-animation-delay={100}>
          <div className="count-deal bg-white rounded mb-md-0">
            <div className="product-default">
              <figure>
                <a href="/products">
                  <img src="assets/images/demoes/demo35/products/product-16.jpg" alt="product" width={1200} height={1200} />
                </a>
                <div className="product-countdown-container">
                  <span className="product-countdown-title">offer ends in:</span>
                  <div className="product-countdown countdown-compact" data-until="2021, 10, 5" data-compact="true">
                  </div>{/* End .product-countdown */}
                </div>{/* End .product-countdown-container */}
              </figure>
              <div className="product-details">
                <div className="category-list">
                  <a href="demo35-shop.html" className="product-category">Category</a>
                </div>
                <h3 className="product-title">
                  <a href="/products">Raw Meat</a>
                </h3>
                <div className="ratings-container">
                  <div className="product-ratings">
                    <span className="ratings" style={{width: '80%'}} />{/* End .ratings */}
                    <span className="tooltiptext tooltip-top" />
                  </div>{/* End .product-ratings */}
                </div>{/* End .product-container */}
                <div className="price-box">
                  <del className="old-price">$59.00</del>
                  <span className="product-price">$49.00</span>
                </div>{/* End .price-box */}
                <div className="product-action">
                  <a href="wishlist.html" className="btn-icon-wish" title="wishlist"><i className="icon-heart" /></a>
                  <a href="product.html" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /><span>ADD TO CART</span></a>
                  <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View"><i className="fas fa-external-link-alt" /></a>
                </div>
              </div>{/* End .product-details */}
            </div>
          </div>
        </div>
        <div className="col-md-8 appear-animate" data-animation-name="fadeInLeftShorter" data-animation-delay={300}>
          <div className="custom-products bg-white rounded">
            <div className="row">
              <div className="col-6 col-sm-4 col-xl-3">
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <a href="/products">
                      <img src="assets/images/demoes/demo35/products/product-6.jpg" width={217} height={217} alt="product" />
                    </a>
                    <div className="btn-icon-group">
                      <a href="/products" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                    </div>
                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                      View</a>
                  </figure>
                  <div className="product-details">
                    <div className="category-wrap">
                      <div className="category-list">
                        <a href="demo35-shop.html" className="product-category">category</a>
                      </div>
                      <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                    </div>
                    <h3 className="product-title">
                      <a href="/products">Fonte de fibras</a>
                    </h3>
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style={{width: '0%'}} />
                        {/* End .ratings */}
                        <span className="tooltiptext tooltip-top" />
                      </div>{/* End .product-ratings */}
                    </div>{/* End .product-container */}
                    <div className="price-box">
                      <span className="product-price">$129.00</span>
                    </div>{/* End .price-box */}
                  </div>{/* End .product-details */}
                </div>
              </div>
              <div className="col-6 col-sm-4 col-xl-3">
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <a href="/products">
                      <img src="assets/images/demoes/demo35/products/product-7.jpg" width={217} height={217} alt="product" />
                    </a>
                    <div className="label-group">
                      <div className="product-label label-hot">HOT</div>
                    </div>
                    <div className="btn-icon-group">
                      <a href="/products" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                    </div>
                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                      View</a>
                  </figure>
                  <div className="product-details">
                    <div className="category-wrap">
                      <div className="category-list">
                        <a href="demo35-shop.html" className="product-category">category</a>
                      </div>
                      <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                    </div>
                    <h3 className="product-title">
                      <a href="/products">Meat</a>
                    </h3>
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style={{width: '0%'}} />
                        {/* End .ratings */}
                        <span className="tooltiptext tooltip-top" />
                      </div>{/* End .product-ratings */}
                    </div>{/* End .product-container */}
                    <div className="price-box">
                      <span className="product-price">$19.00</span>
                    </div>{/* End .price-box */}
                  </div>{/* End .product-details */}
                </div>
              </div>
              <div className="col-6 col-sm-4 col-xl-3">
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <a href="/products">
                      <img src="assets/images/demoes/demo35/products/product-8.jpg" width={217} height={217} alt="product" />
                    </a>
                    <div className="label-group">
                      <div className="product-label label-hot">HOT</div>
                    </div>
                    <div className="btn-icon-group">
                      <a href="/products" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                    </div>
                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                      View</a>
                  </figure>
                  <div className="product-details">
                    <div className="category-wrap">
                      <div className="category-list">
                        <a href="demo35-shop.html" className="product-category">category</a>
                      </div>
                      <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                    </div>
                    <h3 className="product-title">
                      <a href="/products">Coconut</a>
                    </h3>
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style={{width: '0%'}} />
                        {/* End .ratings */}
                        <span className="tooltiptext tooltip-top" />
                      </div>{/* End .product-ratings */}
                    </div>{/* End .product-container */}
                    <div className="price-box">
                      <span className="product-price">$25.00</span>
                    </div>{/* End .price-box */}
                  </div>{/* End .product-details */}
                </div>
              </div>
              <div className="col-6 col-sm-4 col-xl-3">
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <a href="/products">
                      <img src="assets/images/demoes/demo35/products/product-1.jpg" width={217} height={217} alt="product" />
                    </a>
                    <div className="label-group">
                      <div className="product-label label-hot">HOT</div>
                    </div>
                    <div className="btn-icon-group">
                      <a href="/products" className="btn-icon btn-add-cart"><i className="fa fa-arrow-right" /></a>
                    </div>
                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                      View</a>
                  </figure>
                  <div className="product-details">
                    <div className="category-wrap">
                      <div className="category-list">
                        <a href="demo35-shop.html" className="product-category">category</a>
                      </div>
                      <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                    </div>
                    <h3 className="product-title">
                      <a href="/products">Trafilati al Bronzo</a>
                    </h3>
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style={{width: '0%'}} />
                        {/* End .ratings */}
                        <span className="tooltiptext tooltip-top" />
                      </div>{/* End .product-ratings */}
                    </div>{/* End .product-container */}
                    <div className="price-box">
                      <span className="product-price">$69.00 – $89.00</span>
                    </div>{/* End .price-box */}
                  </div>{/* End .product-details */}
                </div>
              </div>
              <div className="col-6 col-sm-4 col-xl-3">
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <a href="/products">
                      <img src="assets/images/demoes/demo35/products/product-2.jpg" width={217} height={217} alt="product" />
                    </a>
                    <div className="label-group">
                      <div className="product-label label-hot">HOT</div>
                    </div>
                    <div className="btn-icon-group">
                      <a href="/products" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                    </div>
                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                      View</a>
                  </figure>
                  <div className="product-details">
                    <div className="category-wrap">
                      <div className="category-list">
                        <a href="demo35-shop.html" className="product-category">category</a>
                      </div>
                      <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                    </div>
                    <h3 className="product-title">
                      <a href="/products">Pineapple</a>
                    </h3>
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style={{width: '100%'}} />
                        {/* End .ratings */}
                        <span className="tooltiptext tooltip-top" />
                      </div>{/* End .product-ratings */}
                    </div>{/* End .product-container */}
                    <div className="price-box">
                      <span className="product-price">$19.00</span>
                    </div>{/* End .price-box */}
                  </div>{/* End .product-details */}
                </div>
              </div>
              <div className="col-6 col-sm-4 col-xl-3">
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <a href="/products">
                      <img src="assets/images/demoes/demo35/products/product-3.jpg" width={217} height={217} alt="product" />
                    </a>
                    <div className="label-group">
                      <div className="product-label label-hot">HOT</div>
                      <div className="product-label label-sale">-16%</div>
                    </div>
                    <div className="btn-icon-group">
                      <a href="/products" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                    </div>
                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                      View</a>
                  </figure>
                  <div className="product-details">
                    <div className="category-wrap">
                      <div className="category-list">
                        <a href="demo35-shop.html" className="product-category">category</a>
                      </div>
                      <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                    </div>
                    <h3 className="product-title">
                      <a href="/products">Banana</a>
                    </h3>
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style={{width: '100%'}} />
                        {/* End .ratings */}
                        <span className="tooltiptext tooltip-top" />
                      </div>{/* End .product-ratings */}
                    </div>{/* End .product-container */}
                    <div className="price-box">
                      <span className="old-price">$129.00</span>
                      <span className="product-price">$108.00</span>
                    </div>{/* End .price-box */}
                  </div>{/* End .product-details */}
                </div>
              </div>
              <div className="col-6 col-sm-4 col-xl-3">
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <a href="/products">
                      <img src="assets/images/demoes/demo35/products/product-4.jpg" width={217} height={217} alt="product" />
                    </a>
                    <div className="label-group">
                      <div className="product-label label-hot">HOT</div>
                    </div>
                    <div className="btn-icon-group">
                      <a href="/products" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                    </div>
                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                      View</a>
                  </figure>
                  <div className="product-details">
                    <div className="category-wrap">
                      <div className="category-list">
                        <a href="demo35-shop.html" className="product-category">category</a>
                      </div>
                      <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                    </div>
                    <h3 className="product-title">
                      <a href="/products">Leon Bayer</a>
                    </h3>
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style={{width: '0%'}} />
                        {/* End .ratings */}
                        <span className="tooltiptext tooltip-top" />
                      </div>{/* End .product-ratings */}
                    </div>{/* End .product-container */}
                    <div className="price-box">
                      <span className="product-price">$39.00</span>
                    </div>{/* End .price-box */}
                  </div>{/* End .product-details */}
                </div>
              </div>
              <div className="col-6 col-sm-4 col-xl-3">
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <a href="/products">
                      <img src="assets/images/demoes/demo35/products/product-5.jpg" width={217} height={217} alt="product" />
                    </a>
                    <div className="label-group">
                      <div className="product-label label-sale">-17%</div>
                    </div>
                    <div className="btn-icon-group">
                      <a href="/products" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                    </div>
                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                      View</a>
                  </figure>
                  <div className="product-details">
                    <div className="category-wrap">
                      <div className="category-list">
                        <a href="demo35-shop.html" className="product-category">category</a>
                      </div>
                      <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                    </div>
                    <h3 className="product-title">
                      <a href="/products">Azeite de oliva extra Vergem</a>
                    </h3>
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style={{width: '0%'}} />
                        {/* End .ratings */}
                        <span className="tooltiptext tooltip-top" />
                      </div>{/* End .product-ratings */}
                    </div>{/* End .product-container */}
                    <div className="price-box">
                      <span className="old-price">$59.00</span>
                      <span className="product-price">$49.00</span>
                    </div>{/* End .price-box */}
                  </div>{/* End .product-details */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="brands-section">
    <div className="container">
      <div className="appear-animate" data-animation-name="fadeInUpShorter" data-animation-delay={100}>
        <h2 className="section-title">Featured Brands</h2>
        <p className="section-info font2">All our new arrivals in a exclusive brand selection</p>
      </div>
      <div className="slider-wrapper bg-white rounded appear-animate" data-animation-name="fadeInUpShorter" data-animation-delay={300}>
        <div className="brands-slider owl-carousel owl-theme nav-outer" data-owl-options="{
                      'navText': ['<i class=icon-angle-left>', '<i class=icon-angle-right>'],
                      'center': true,
                      'loop': true,
                      'nav': true,
                      'responsive': {
                          '992': {
                              'items': 6
                          },
                          '1200': {
                              'items': 8
                          }
                      }
                  }">
          <div className="d-inline-block">
            <img src="assets/images/brands/small/brand1.png" alt="brand" width={140} height={40} />
          </div>
          <div className="d-inline-block">
            <img src="assets/images/brands/small/brand1.png" alt="brand" width={140} height={40} />
          </div>
          <div className="d-inline-block">
            <img src="assets/images/brands/small/brand6.png" alt="brand" width={140} height={40} />
          </div>
          <div className="d-inline-block">
            <img src="assets/images/brands/small/brand3.png" alt="brand" width={140} height={40} />
          </div>
          <div className="d-inline-block">
            <img src="assets/images/brands/small/brand3.png" alt="brand" width={140} height={40} />
          </div>
          <div className="d-inline-block">
            <img src="assets/images/brands/small/brand2.png" alt="brand" width={140} height={40} />
          </div>
          <div className="d-inline-block">
            <img src="assets/images/brands/small/brand3.png" alt="brand" width={140} height={40} />
          </div>
          <div className="d-inline-block">
            <img src="assets/images/brands/small/brand5.png" alt="brand" width={140} height={40} />
          </div>
          <div className="d-inline-block">
            <img src="assets/images/brands/small/brand6.png" alt="brand" width={140} height={40} />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="post-section">
    <div className="container">
      <div className="appear-animate" data-animation-name="fadeInUpShorter" data-animation-delay={300}>
        <h2 className="section-title">Recipes For This Week</h2>
        <p className="section-info font2">All our new arrivals in a exclusive brand selection</p>
      </div>
      <div className="post-date-in-media media-with-zoom bg-white rounded appear-animate" data-animation-name="fadeInUpShorter" data-animation-delay={300}>
        <div className="owl-carousel owl-theme mb-2 appear-animate" data-owl-options="{
                      'loop': false,
                      'nav': false,
                      'dots': false,
                      'margin': 20,
                      'items': 1,
                      'responsive': {
                          '576': {
                              'items': 2
                          }
                      }
                  }">
          <article className="post">
            <div className="post-media">
              <a href="single.html">
                <img src="assets/images/demoes/demo35/blogs/blog-2.png" data-zoom-image="assets/images/demoes/demo35/blogs/blog-2.png" alt="Post" width={400} height={185} />
              </a>
              <span className="prod-full-screen">
                <i className="fas fa-search" />
              </span>
            </div>{/* End .post-media */}
            <div className="post-body">
              <div className="category-list">Fresh Vegetables</div>
              <h2 className="post-title">
                <a href="single.html">Pasta With Pesto</a>
              </h2>
              <div className="post-content">
                <p>A tasty way to incorporate more veggies into your diet!</p>
              </div>{/* End .post-content */}
            </div>{/* End .post-body */}
          </article>{/* End .post */}
          <article className="post">
            <div className="post-media">
              <a href="single.html">
                <img src="assets/images/demoes/demo35/blogs/blog-1.png" data-zoom-image="assets/images/demoes/demo35/blogs/blog-1.png" alt="Post" width={400} height={185} />
              </a>
              <span className="prod-full-screen">
                <i className="fas fa-search" />
              </span>
            </div>{/* End .post-media */}
            <div className="post-body">
              <div className="category-list">Fresh Vegetables</div>
              <h2 className="post-title">
                <a href="single.html">Strawberry Waffles</a>
              </h2>
              <div className="post-content">
                <p>A tasty way to incorporate more veggies into your diet!</p>
              </div>{/* End .post-content */}
            </div>{/* End .post-body */}
          </article>{/* End .post */}
        </div>
      </div>
    </div>
  </section>
  <section className="newsletter-section appear-animate" data-animation-name="fadeInUpShorter" data-animation-delay={200}>
    <div className="container">
      <div className="row no-gutters m-0 align-items-center">
        <div className="col-lg-6 col-xl-4 mb-2 mb-lg-0">
          <div className="info-box d-block d-sm-flex text-center text-sm-left">
            <i className="icon-envolope text-dark mr-4" />
            <div className="widget-newsletter-info">
              <h4 className="font-weight-bold line-height-1">Subscribe To Our Newsletter
              </h4>
              <p className="font2">Get all the latest information on Events, Sales and
                Offers.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-xl-8">
          <form action="#" className="mb-0">
            <div className="footer-submit-wrapper d-flex">
              <input type="email" className="form-control rounded mb-0" placeholder="Your E-mail Address" size={40} required />
              <button type="submit" className="btn btn-primary">Subscribe Now!</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</main>

  );
}
