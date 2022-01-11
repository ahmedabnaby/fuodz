import React from "react"
export default function Header()
{
    return(
        <div>
        <header className="header">
  <div className="header-middle sticky-header" data-sticky-options="{'mobile': true}">
    <div className="container">
      <div className="header-left w-lg-max">
        <button className="mobile-menu-toggler text-primary mr-2" type="button">
          <i className="fas fa-bars" />
        </button>
        <a href="/" className="logo">
          <img src="assets/images/webteklabs.png" className="w-100" width={111} height={44} alt="Porto Logo" />
        </a>
        <div className="header-icon header-search header-search-inline header-search-category d-lg-block d-none text-right mt-0">
          <a href="#" className="search-toggle" role="button"><i className="icon-magnifier" /></a>
          <form action="#" method="get">
            <div className="header-search-wrapper">
              <input type="search" className="form-control" name="q" id="q" placeholder="Search..." required />
              <div className="select-custom">
                <select id="cat" name="cat">
                  <option value>All Categories</option>
                  <option value={4}>Part Time Cleaning</option>
                  <option value={12}>Salon for Men</option>
                  <option value={13}>Spa for Men</option>
                  <option value={66}>Covid Test at Home</option> 
                </select>
              </div>{/* End .select-custom */}
              <button className="btn icon-magnifier p-0" title="search" type="submit" />
            </div>{/* End .header-search-wrapper */}
          </form>
        </div>{/* End .header-search */}
      </div>{/* End .header-left */}
      <div className="header-right">
        <a href="#" className="header-icon position-relative d-lg-none mr-2">
          <i className="icon-wishlist-2" />
          <span className="badge-circle">0</span>
        </a>
        <div className="header-user d-lg-flex align-items-center">
          <a href="#" className="header-icon mr-0" title="login"><i className="icon-user-2 mr-2" /></a>
          <h6 className="font1 d-none d-lg-block mb-0"><span className="d-block text-body">Welcome</span><a href="#" className="font-weight-bold">Sign In
              / Register</a></h6>
        </div>
        <div className="cart-dropdown-wrapper d-flex align-items-center">
          <div className="dropdown cart-dropdown">
            <a href="#" title="Cart" className="dropdown-toggle cart-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
              <i className="icon-cart-thick" />
              <span className=" cart-count badge-circle">3</span>
            </a>
            <div className="cart-overlay" />
            <div className="dropdown-menu mobile-cart">
              <a href="#" title="Close (Esc)" className="btn-close">×</a>
              <div className="dropdownmenu-wrapper custom-scrollbar">
                <div className="dropdown-cart-header">Shopping Cart</div>
                {/* End .dropdown-cart-header */}
                <div className="dropdown-cart-products">
                  <div className="product">
                    <div className="product-details">
                      <h4 className="product-title">
                        <a href="/products">Spring Onion</a>
                      </h4>
                      <span className="cart-product-info">
                        <span className="cart-product-qty">1</span>
                        × $99.00
                      </span>
                    </div>{/* End .product-details */}
                    <figure className="product-image-container">
                      <a href="/products" className="product-image">
                        <img src="assets/images/products/product-1.jpg" alt="product" width={80} height={80} />
                      </a>
                      <a href="#" className="btn-remove" title="Remove Product"><span>×</span></a>
                    </figure>
                  </div>{/* End .product */}
                  <div className="product">
                    <div className="product-details">
                      <h4 className="product-title">
                        <a href="/products">Potatoes</a>
                      </h4>
                      <span className="cart-product-info">
                        <span className="cart-product-qty">1</span>
                        × $35.00
                      </span>
                    </div>{/* End .product-details */}
                    <figure className="product-image-container">
                      <a href="/products" className="product-image">
                        <img src="assets/images/products/product-2.jpg" alt="product" width={80} height={80} />
                      </a>
                      <a href="#" className="btn-remove" title="Remove Product"><span>×</span></a>
                    </figure>
                  </div>{/* End .product */}
                  <div className="product">
                    <div className="product-details">
                      <h4 className="product-title">
                        <a href="/products">Rocca</a>
                      </h4>
                      <span className="cart-product-info">
                        <span className="cart-product-qty">1</span>
                        × $35.00
                      </span>
                    </div>{/* End .product-details */}
                    <figure className="product-image-container">
                      <a href="/products" className="product-image">
                        <img src="assets/images/products/product-3.jpg" alt="product" width={80} height={80} />
                      </a>
                      <a href="#" className="btn-remove" title="Remove Product"><span>×</span></a>
                    </figure>
                  </div>{/* End .product */}
                </div>{/* End .cart-product */}
                <div className="dropdown-cart-total">
                  <span>SUBTOTAL:</span>
                  <span className="cart-total-price float-right">$134.00</span>
                </div>{/* End .dropdown-cart-total */}
                <div className="dropdown-cart-action">
                  <a href="cart.html" className="btn btn-gray btn-block view-cart">View
                    Cart</a>
                  <a href="checkout.html" className="btn btn-dark btn-block">Checkout</a>
                </div>{/* End .dropdown-cart-total */}
              </div>{/* End .dropdownmenu-wrapper */}
            </div>{/* End .dropdown-menu */}
          </div>{/* End .dropdown */}
          <span className="cart-subtotal font2 d-none d-sm-inline">Shopping Cart
            <span className="cart-price d-block font2">$0.00</span>
          </span>
        </div>
      </div>{/* End .header-right */}
    </div>{/* End .container */}
  </div>{/* End .header-middle */}
  <div className="header-bottom border-bottom sticky-header d-none d-lg-flex" data-sticky-options="{'mobile': false}">
    <div className="container">
      <div className="header-center w-100 ml-0">
        <nav className="main-nav d-flex font2">
          <div className="menu-depart">
            <a href="#"><i className="fa fa-bars align-middle mr-3" />All
              Departments</a>
            <ul className="menu menu-vertical">
              <li>
                <a href="#"><i className="icon-category-garden" />Category 1</a>
                <span className="menu-btn" />
                <div className="megamenu megamenu-fixed-width megamenu-one">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-6 mb-1">
                          <a href="#" className="nolink pl-0">Salon for Men</a>
                          <ul className="submenu">
                            <li><a href="/products">Spa for Men</a>
                            </li>
                            <li><a href="/products">Covid Test at Home</a></li>
                            <li><a href="/products">Deep Cleaning</a>
                            </li>
                            <li><a href="/products">Repairs</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6 mb-1">
                          <a href="#" className="nolink pl-0">Salon for Women</a>
                          <ul className="submenu">
                            <li><a href="/products">Salon for Women</a></li>
                            <li><a href="/products">Spa for Women</a></li>
                            <li><a href="/products">Hair Service for Women</a></li>
                            <li><a href="/products">Nails and Lashes</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 text-left">
                      <div className="menu-banner menu-banner-2 d-inline-block position-relative h-auto">
                        <figure className="text-right">
                          <img src="assets/images/categories/cat1.jpeg" alt="Menu banner" className="product-promo d-inline-block" width={300} height={383} />
                        </figure>
                        {/* <div className="banner-content text-right">
                          <h4>
                            <span className="text-dark">UP TO</span><br />
                            <b className="text-dark">50%</b>
                          </h4>
                        </div> */}
                      </div>
                    </div>
                    <div className="col-md-3 text-left">
                      <div className="menu-banner menu-banner-2 d-inline-block position-relative h-auto">
                        <figure className="text-right">
                          <img src="assets/images/categories/cat2.jpeg" alt="Menu banner" className="product-promo d-inline-block" width={300} height={383} />
                        </figure>
                        {/* <div className="banner-content text-right">
                          <h4>
                            <span className="text-dark">UP TO</span><br />
                            <b className="text-dark">50%</b>
                          </h4>
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <div className="row px-5">
                    <div className="col-lg-12">
                      <div className="partners-container mb-2">
                        <div className="owl-carousel owl-theme" data-owl-options="{
                                                      'dots': false,
                                                      'items': 4,
                                                      'margin': 20,
                                                      'responsive': {
                                                          '1200': {
                                                              'items': 5
                                                          }
                                                      }
                                                  }">
                          <div className="partner">
                            <img src="assets/images/brands/small/brand1.png" alt="logo image" width={140} height={60} />
                          </div>
                          <div className="partner">
                            <img src="assets/images/brands/small/brand2.png" alt="logo image" width={140} height={60} />
                          </div>
                          <div className="partner">
                            <img src="assets/images/brands/small/brand3.png" alt="logo image" width={140} height={60} />
                          </div>
                          <div className="partner">
                            <img src="assets/images/brands/small/brand4.png" alt="logo image" width={140} height={60} />
                          </div>
                          <div className="partner">
                            <img src="assets/images/brands/small/brand5.png" alt="logo image" width={140} height={60} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{/* End .megamenu */}
              </li>
              <li>
                <a href="#"><i className="icon-category-saddle" />Category 2</a>
                <span className="menu-btn" />
                <div className="megamenu megamenu-fixed-width megamenu-two">
                  <div className="row">
                    <div className="col-lg-4 mb-1">
                      <a href="#" className="nolink pl-0">ANGUS MEAT</a>
                      <ul className="submenu">
                        <li><a href="/products">Top Side Steak - Angus</a>
                        </li>
                        <li><a href="/products">Escalope - Angus</a>
                        </li>
                        <li><a href="/products">Fillet - Angus</a>
                        </li>
                        <li><a href="/products">Strip Lion Steak - Angus</a>
                        </li>
                      </ul>
                    </div>{/* End .col-lg-4 */}
                    <div className="col-lg-4 mb-1">
                      <a href="#" className="nolink pl-0">BALADY MEAT</a>
                      <ul className="submenu">
                        <li><a href="/products">Fillet Roast</a></li>
                        <li><a href="/products">Whole Fillet Roast</a>
                        </li>
                        <li><a href="/products">Bottom Round Roast</a>
                        </li>
                        <li><a href="/products">Round Roast</a>
                        </li>
                      </ul>
                    </div>{/* End .col-lg-4 */}
                    <div className="col-lg-4 mb-1">
                      <a href="#" className="nolink pl-0">LAMB MEAT</a>
                      <ul className="submenu">
                        <li><a href="/products">Lamb Liver</a></li>
                        <li><a href="/products">Lamb Ribs Connected</a>
                        </li>
                        <li><a href="/products">Lamb Ribs</a>
                        </li>
                        <li><a href="/products">Boneless Lamb Shoulder</a>
                        </li>
                      </ul>
                    </div>{/* End .col-lg-4 */}
                  </div>{/* End .row */}
                  <div className="row px-5">
                    <div className="col-md-6">
                      <div className="banner menu-banner-3 banner-md-vw text-transform-none">
                        <figure>
                          <img src="assets/images/demoes/demo35/products/product-7.jpg" alt="banner" />
                        </figure>
                        <div className="banner-layer banner-layer-middle d-flex align-items-center justify-content-end pt-0">
                          <div className="content-left">
                            <h4 className="banner-layer-circle-item mb-0 ls-0">
                              40<sup>%<small className="ls-0">OFF</small></sup>
                            </h4>
                          </div>
                          <div className="content-right text-right">
                            <h5 className=" ls-0"><del className="d-block m-b-2 text-secondary">$450</del>$270
                            </h5>
                            <h4 className="m-b-1 ls-n-25">Meat</h4>
                            <h3 className="mb-0">HURRY UP!</h3>
                          </div>
                        </div>
                      </div>{/* End .banner */}
                    </div>
                    <div className="col-md-6">
                      <div className="banner menu-banner-4 banner-md-vw">
                        <figure>
                          <img src="assets/images/demoes/demo35/products/product-16.jpg" alt="banner" />
                        </figure>
                        <div className="banner-layer banner-layer-middle d-flex align-items-end flex-column">
                          <h3 className="text-dark text-right">
                            Balady Meat<br />Deals</h3>
                          <div className="coupon-sale-content">
                            <h4 className="custom-coupon-sale-text bg-dark text-white d-block font1 text-transform-none">
                              Exclusive
                              COUPON</h4>
                            <h5 className="custom-coupon-sale-text font1 text-dark ls-n-10 p-0">
                              <b className="text-dark">$100</b> OFF
                            </h5>
                          </div>
                        </div>
                      </div>{/* End .banner */}
                    </div>
                  </div>
                </div>{/* End .megamenu */}
              </li>
              <li>
                <a href="#"><i className="icon-category-gifts" />Category 3</a>
                <span className="menu-btn" />
                <div className="megamenu megamenu-fixed-width megamenu-three">
                  <div className="row">
                    <div className="col-lg-3 mb-1">
                      <div className="image-wrapper">
                        <img src="assets/images/demoes/demo35/icons/boy.png" alt="icon" width={50} height={68} />
                      </div>
                      <a href="#" className="nolink">FOR HIM</a>
                      <ul className="submenu pb-0">
                        <li><a href="/products">Gifts for Boyfriend</a>
                        </li>
                        <li><a href="/products">Gifts for Husband</a>
                        </li>
                        <li><a href="/products">Gifts for Dad</a>
                        </li>
                        <li><a href="/products">Gifts for Grandpa</a>
                        </li>
                      </ul>
                    </div>{/* End .col-lg-4 */}
                    <div className="col-lg-3 mb-1">
                      <div className="image-wrapper">
                        <img src="assets/images/demoes/demo35/icons/girl.png" alt="icon" width={50} height={68} />
                      </div>
                      <a href="#" className="nolink">FOR HER</a>
                      <ul className="submenu pb-0">
                        <li><a href="/products">Gifts for Girlfriend</a>
                        </li>
                        <li><a href="/products">Gifts for Wife</a>
                        </li>
                        <li><a href="/products">Gifts for Mom</a>
                        </li>
                        <li><a href="/products">Gifts for Grandma</a>
                        </li>
                      </ul>
                    </div>{/* End .col-lg-4 */}
                    <div className="col-lg-3 mb-1">
                      <div className="image-wrapper">
                        <img src="assets/images/demoes/demo35/icons/kid.png" alt="icon" width={50} height={68} />
                      </div>
                      <a href="#" className="nolink">FOR KIDS</a>
                      <ul className="submenu pb-0">
                        <li><a href="/products">Gifts for Boys</a></li>
                        <li><a href="/products">Gifts for Girls</a>
                        </li>
                        <li><a href="/products">Gifts for Twin Boys</a>
                        </li>
                        <li><a href="/products">Gifts for Twin Girls</a>
                        </li>
                      </ul>
                    </div>{/* End .col-lg-4 */}
                    <div className="col-lg-3 mb-1">
                      <div className="image-wrapper">
                        <img src="assets/images/demoes/demo35/icons/supermarket.png" alt="icon" width={50} height={68} />
                      </div>
                      <a href="#" className="nolink">BIRTHDAY</a>
                      <ul className="submenu pb-0">
                        <li><a href="/products">Birthday for Him</a></li>
                        <li><a href="/products">Birthday for Her</a>
                        </li>
                        <li><a href="/products">Boyfriend Gifts</a>
                        </li>
                        <li><a href="/products">Girlfriend Gifts</a>
                        </li>
                      </ul>
                    </div>{/* End .col-lg-4 */}
                  </div>{/* End .row */}
                </div>{/* End .megamenu */}
              </li>
            </ul>
          </div>
          <ul className="menu">
            <li className="active"><a href="/"><img className="icon-heading" src="assets/images/icons/salon-men.png" role="..." alt="..."/>Salon For Men</a></li>
            <li>
              <a href="/products"> <img className="icon-heading" src="assets/images/icons/spa-men.png" role="..." alt="..."/>Spa For Men</a>
              {/* <div className="megamenu megamenu-fixed-width megamenu-3cols">
                <div className="row">
                  <div className="col-lg-6">
                    <a href="#" className="nolink">Categories</a>
                    <ul className="submenu">
                      <li><a href="#">Vegetables</a></li>
                      <li><a href="category-banner-boxed-slider.html">Fruits</a>
                      </li>
                      <li><a href="category-banner-boxed-image.html">Meat</a>
                      </li>
                      <li><a href="#">Fish and Seafood</a></li>
                    </ul>
                  </div>
                  <div className="col-lg-6 p-0">
                    <div className="menu-banner">
                      <figure>
                        <img src="assets/images/demoes/demo35/products/product-14.jpg" alt="Menu banner" width={300} height={300} />
                      </figure>
                      <div className="banner-content">
                        <h4>
                          <span>UP TO</span><br />
                          <b>50%</b>
                          <i>OFF</i>
                        </h4>
                        <a href="#" className="btn btn-sm btn-dark">SHOP NOW</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </li>
            <li><a href="/about-us"><img className="icon-heading" src="assets/images/icons/covid.png" role="..." alt="..."/>Covid Test At..</a></li>
            <li><a href="/whatsnew"><img className="icon-heading" src="assets/images/icons/salon-women.png" role="..." alt="..."/>Salon For Women</a></li>

            <li><a href="/contact-us"><img className="icon-heading" src="assets/images/icons/spa-women.png" role="..." alt="..."/>Spa For Women</a></li>
          </ul>
        </nav>
        <div className="info-boxes font2 align-items-center ml-auto">
          <div className="info-item">
            <a href="#"><i className="icon-percent-shape" />Special Offers</a>
          </div>
          <div className="info-item">
            <a href="#"><i className="icon-business-book" />Recipes</a>
          </div>
        </div>
      </div>
      <div className="header-right" />
    </div>
  </div>
</header>

<div>
  <div className="mobile-menu-overlay" />{/* End .mobil-menu-overlay */}
  <div className="mobile-menu-container">
    <div className="mobile-menu-wrapper">
      <span className="mobile-menu-close"><i className="fa fa-times" /></span>
      <nav className="mobile-nav">
        <ul className="mobile-menu">
        <li><a href="/">Home</a></li>
        <li>
        <a href="/">Products</a>
        <ul>
              <li><a href="/products">Vegetables</a></li>
              <li><a href="/products">Fruits</a></li>
              <li><a href="/products">Meat</a></li>
              <li><a href="/products">Fish and Seafood</a></li>
            </ul>
            </li>
        <li><a href="/about-us">About Us</a></li>
        <li><a href="/whatsnew">What's New</a></li>
        <li><a href="/contact-us">Contact</a></li>
        </ul>
        
        <ul className="mobile-menu mt-2 ">
          <li><a href="#">My Account</a></li>
          <li><a href="#">My Wishlist</a></li>
          <li><a href="#">Cart</a></li>
          <li><a href="#" className="login-link">Log In</a></li>
        </ul>
      </nav>{/* End .mobile-nav */}
      <form className="search-wrapper mb-2" action="#">
        <input type="text" className="form-control mb-0" placeholder="Search..." required />
        <button className="btn icon-search text-white bg-transparent p-0" type="submit" />
      </form>
      <div className="social-icons">
        <a href="#" className="social-icon social-facebook icon-facebook" target="_blank">
        </a>
        <a href="#" className="social-icon social-twitter icon-twitter" target="_blank">
        </a>
        <a href="#" className="social-icon social-instagram icon-instagram" target="_blank">
        </a>
      </div>
    </div>{/* End .mobile-menu-wrapper */}
  </div>{/* End .mobile-menu-container */}
  <div className="sticky-navbar">
    <div className="sticky-info">
      <a href="demo35.html">
        <i className="icon-home" />Home
      </a>
    </div>
    <div className="sticky-info">
      <a href="/products">
        <i className="icon-bars" />Categories
      </a>
    </div>
    <div className="sticky-info">
      <a href="#">
        <i className="icon-wishlist-2" />Wishlist
      </a>
    </div>
    <div className="sticky-info">
      <a href="#">
        <i className="icon-user-2" />Account
      </a>
    </div>
    <div className="sticky-info">
      <a href="cart.html">
        <i className="icon-shopping-cart position-relative">
          <span className="cart-count badge-circle">3</span>
        </i>Cart
      </a>
    </div>
  </div>
</div>

</div>
    )
}