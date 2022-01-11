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
          <img src="assets/images/banners/bgg.png" alt="slide" width={1903} height={520} />
        </figure>
        <div className="banner-layer banner-layer-middle banner-layer-left">
          <h4 className="font-weight-normal text-body m-b-2 appear-animate" data-animation-name="fadeInDownShorter" data-animation-delay={100}>Exclusive Product New
            Arrival</h4>
          <h2 className="appear-animate text-light" data-animation-name="fadeInUpShorter" data-animation-delay={600}>
            Home Services</h2>
          <div className="position-relative appear-animate" data-animation-name="fadeInRightShorter" data-animation-delay={1100}>
            <h3 className="text-uppercase mb-4 text-white">Special Blend</h3>
            <h5 className="rotate-text font-weight-normal text-primary">Fresh!</h5>
          </div>
          <p className="font2 text-right text-uppercase appear-animate text-white" data-animation-name="fadeInUpShorter" data-animation-delay={1400}>Breakfast products on
            sale</p>
          <div className="coupon-sale-text m-b-2 appear-animate" data-animation-name="fadeInRightShorter" data-animation-delay={1800}>
            <h6 className="text-uppercase text-right mb-0">
              <sup className="text-white">up to</sup><strong className=" text-white">50%</strong>
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
      <div className="bg-white row">
        <div className="col-md-2 info-box info-box-icon-top p-4">
          {/* <i className="icon-shipping text-primary" /> */}
          <img className="icon" src="assets/images/icons/paint.png" role="..." alt="..."/>
          <a href="#">
          <div className="info-content text-center">
            <h4 className="ls-n-25 text-dark">Moving &amp; Painting</h4>
          </div>
          </a>
        </div>
        <div className="col-md-2 info-box info-box-icon-top p-4">
          {/* <i className="icon-money text-primary" /> */}
          <img className="icon" src="assets/images/icons/cleaning.png" role="..." alt="..."/>
          <a href="#">
          <div className="info-content text-center">
            <h4 className="ls-n-25 text-dark">Part Time Cleaning </h4>
          </div>
          </a>
        </div>
        <div className="col-md-2 info-box info-box-icon-top p-4">
          {/* <i className="icon-support text-primary" /> */}
          <img className="icon" src="assets/images/icons/salon-men.png" role="..." alt="..."/>
          <a href="#">
          <div className="info-content text-center">
            <h4 className="ls-n-25 text-dark">Salon For Men</h4>
          </div>
          </a>
        </div>
        <div className="col-md-2 info-box info-box-icon-top p-4">
          {/* <i className="icon-secure-payment text-primary" /> */}
          <img className="icon" src="assets/images/icons/spa-men.png" role="..." alt="..."/>
          <a href="#">
          <div className="info-content text-center">
            <h4 className="ls-n-25 text-dark">Spa For Men</h4>
          </div>
          </a>
        </div>
        <div className="col-md-2 info-box info-box-icon-top p-4">
          {/* <i className="icon-shipping text-primary" /> */}
          <img className="icon" src="assets/images/icons/covid.png" role="..." alt="..."/>
          <a href="#">
          <div className="info-content text-center">
            <h4 className="ls-n-25 text-dark">Covid Test At Home</h4>
          </div>
          </a>
        </div>
        <div className="col-md-2 info-box info-box-icon-top p-4">
          {/* <i className="icon-money text-primary" /> */}
          <img className="icon" src="assets/images/icons/salon-women.png" role="..." alt="..."/>
          <a href="#">
          <div className="info-content text-center">
            <h4 className="ls-n-25 text-dark">Salon For Women </h4>
          </div>
          </a>
        </div>
        <div className="col-md-3 info-box info-box-icon-top p-4">
          {/* <i className="icon-support text-primary" /> */}
          <img className="icon2" src="assets/images/icons/spa-women.png" role="..." alt="..."/>
          <a href="#">
          <div className="info-content text-center">
            <h4 className="ls-n-25 text-dark">Spa For Women</h4>
          </div>
          </a>
        </div>
        <div className="col-md-3 info-box info-box-icon-top p-4">
          {/* <i className="icon-secure-payment text-primary" /> */}
          <img className="icon2" src="assets/images/icons/hair-women.png" role="..." alt="..."/>
          <a href="#">
          <div className="info-content text-center">
            <h4 className="ls-n-25 text-dark">Hair Service For Women</h4>
          </div>
          </a>
        </div>
        <div className="col-md-3 info-box info-box-icon-top p-4">
          {/* <i className="icon-secure-payment text-primary" /> */}
          <img className="icon2" src="assets/images/icons/nails.png" role="..." alt="..."/>
          <a href="#">
          <div className="info-content text-center">
            <h4 className="ls-n-25 text-dark">Nails And Lashes</h4>
          </div>
          </a>
        </div>
        <div className="col-md-3 info-box info-box-icon-top p-4">
          {/* <i className="icon-secure-payment text-primary" /> */}
          <img className="icon2" src="assets/images/icons/repairs.png" role="..." alt="..."/>
          <a href="#">
          <div className="info-content text-center">
            <h4 className="ls-n-25 text-dark">Repairs</h4>
          </div>
          </a>
        </div>
      </div>
      <h2 className="section-title pt-5">Popular Departments</h2>
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
            <figure><img src="assets/images/categories/cat1.jpeg" alt="cat" width={341} height={200} /></figure>
            <div className="category-content">
              <h3 className="font2 ls-n-25">Cooking</h3>
              <span className="font2 ls-n-20">4 Products</span>
            </div>
          </a>
        </div>
        <div className="product-category bg-white">
          <a href="#">
            <figure><img src="assets/images/categories/cat2.jpeg" alt="cat" width={341} height={200} /></figure>
            <div className="category-content">
              <h3 className="font2 ls-n-25">Fruits</h3>
              <span className="font2 ls-n-20">10 Products</span>
            </div>
          </a>
        </div>
        <div className="product-category bg-white">
          <a href="#">
            <figure><img src="assets/images/categories/cat3.jpeg" alt="cat" width={341} height={200} /></figure>
            <div className="category-content">
              <h3 className="font2 ls-n-25">Vegetables</h3>
              <span className="font2 ls-n-20">1 Products</span>
            </div>
          </a>
        </div>
        <div className="product-category bg-white">
          <a href="#">
            <figure><img src="assets/images/categories/cat4.jpeg" alt="cat" width={341} height={200} /></figure>
            <div className="category-content">
              <h3 className="font2 ls-n-25">Breakfast</h3>
              <span className="font2 ls-n-20">8 Products</span>
            </div>
          </a>
        </div>
        <div className="product-category bg-white">
          <a href="#">
            <figure><img src="assets/images/categories/cat5.jpeg" alt="cat" width={341} height={200} /></figure>
            <div className="category-content">
              <h3 className="font2 ls-n-25">Breakfast</h3>
              <span className="font2 ls-n-20">8 Products</span>
            </div>
          </a>
        </div>
        <div className="product-category bg-white">
          <a href="#">
            <figure><img src="assets/images/categories/cat6.jpeg" alt="cat" width={341} height={200} /></figure>
            <div className="category-content">
              <h3 className="font2 ls-n-25">Breakfast</h3>
              <span className="font2 ls-n-20">8 Products</span>
            </div>
          </a>
        </div>
        <div className="product-category bg-white">
          <a href="#">
            <figure><img src="assets/images/categories/cat7.jpeg" alt="cat" width={341} height={200} /></figure>
            <div className="category-content">
              <h3 className="font2 ls-n-25">Breakfast</h3>
              <span className="font2 ls-n-20">8 Products</span>
            </div>
          </a>
        </div>
        <div className="product-category bg-white">
          <a href="#">
            <figure><img src="assets/images/categories/cat8.jpeg" alt="cat" width={341} height={200} /></figure>
            <div className="category-content">
              <h3 className="font2 ls-n-25">Breakfast</h3>
              <span className="font2 ls-n-20">8 Products</span>
            </div>
          </a>
        </div>
        <div className="product-category bg-white">
          <a href="#">
            <figure><img src="assets/images/categories/cat9.jpeg" alt="cat" width={341} height={200} /></figure>
            <div className="category-content">
              <h3 className="font2 ls-n-25">Breakfast</h3>
              <span className="font2 ls-n-20">8 Products</span>
            </div>
          </a>
        </div>
      </div>
      <section className="post-section">
    <div className="container">
      <div className="appear-animate" data-animation-name="fadeInUpShorter" data-animation-delay={300}>
        <h2 className="section-title">Salon at the Saftey of Home</h2>
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
            <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">
                <img src="assets/images/banners/banner1.jpeg" data-zoom-image="assets/images/demoes/demo35/blogs/blog-2.png" alt="Post" width={400} height={185} />
              </a>
              {/* <span className="prod-full-screen">
                <i className="fas fa-search" />
              </span> */}
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
            <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">
                <img src="assets/images/banners/banner2.jpeg" data-zoom-image="assets/images/demoes/demo35/blogs/blog-1.png" alt="Post" width={400} height={185} />
              </a>
              {/* <span className="prod-full-screen">
                <i className="fas fa-search" />
              </span> */}
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
              
    </div>
  </section>
  <section className="brands-section">
    <div className="container">
      <div className="appear-animate" data-animation-name="fadeInUpShorter" data-animation-delay={100}>
        <h2 className="section-title">Home repairs just got easy</h2>
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
                              'items': 4
                          },
                          '1200': {
                              'items': 4
                          }
                      }
                  }">
          <div className="d-inline-block">
            <img src="assets/images/banners/b1.png" alt="brand" width={140} height={40} />
          </div>
          <div className="d-inline-block">
            <img src="assets/images/banners/b2.jpeg" alt="brand" width={140} height={40} />
          </div>
          <div className="d-inline-block">
            <img src="assets/images/banners/b3.png" alt="brand" width={140} height={40} />
          </div>
          <div className="d-inline-block">
            <img src="assets/images/banners/b4.png" alt="brand" width={140} height={40} />
          </div>
          {/* <div className="d-inline-block">
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
          </div> */}
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
