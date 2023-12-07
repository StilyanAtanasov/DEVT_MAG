import HeaderStyles from "../styles/header.module.css";
import styles from "../styles/main.module.css";
import FooterStyles from "../styles/footer.module.css";

export default function MyApp() {
  return (
    <div className={styles.all}>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <title>DEVT</title>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.css"
      />
      <link rel="stylesheet" href="css/animate.css" />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
        integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB"
        crossOrigin="anonymous"
      />
      <link rel="stylesheet" type="text/css" href="style.css" />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
        integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt"
        crossOrigin="anonymous"
      />
      {/* Font Google */}
      <link
        href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700"
        rel="stylesheet"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n* {\n\tpadding:0;\n\tmargin:0;\n}\nbody {\n\tfont-family: \'Poppins\', sans-serif;\n\tfont-size: 14px;\n}\na {\n\tcolor:#5f0099;\n}\na:hover {\n\tcolor:#5f0099;\n}\nh1, h2, h3 {\n\tfont-weight: 700;\n}\nh4, h5 {\n\tfont-weight:600;\n}\nh6 {\n\tfont-weight:500;\n}\n.white {\n\tcolor:#ffffff !important;\n}\n.black {\n\tcolor:#000000;\n}\n.navbar {\n\tposition: fixed;\n\tright: 0;\n\tleft: 0;\n\twidth: 100%;\n\tpadding-left: 0;\n\tpadding-right: 0;\n\tmin-height: 50px;\n\tline-height: 50px;\n\tbackground: transparent;\n\tz-index: 1030;\n}\n.navbar .active {\n\tcolor: #5f0099 !important;\n}\n.navbar .navbar-brand {\n}\n.navbar .nav-item {\n\tmargin: 0 5px;\n\tpadding: 0;\n}\n.navbar .nav-item a {\n\tcolor: #fff;\n\ttext-transform: uppercase;\n\tfont-weight: 600;\n\tfont-size: 13px;\n}\n.navbar .nav-item a:hover {\n\tcolor: #5f0099;\n}\n.navbar .nav-link {\n\tposition: relative;\n\tpadding: 0;\n}\n.navbar .navbar-toggler {\n\tcursor: pointer;\n}\n.navbar .navbar-toggler span {\n\tcolor: #fff;\n}\n.navbar-style2 .active:after, .navbar-style2 .nav-link:after {\n\tdisplay: none;\n}\n.nav-scroll {\n\tbackground: #fff;\n\t-webkit-box-shadow: 0 1px 8px 3px rgba(0, 0, 0, 0.0509803922);\n\tbox-shadow: 0 1px 8px 3px rgba(0, 0, 0, 0.0509803922);\n\t-webkit-transition: all .4s ease;\n\ttransition: all .4s ease;\n}\n.nav-scroll .navbar-nav > li > a {\n\tcolor: #333;\n}\n.nav-scroll .navbar-brand img {\n\t-webkit-transform: scale(1.03) !important;\n\ttransform: scale(1.03) !important;\n}\n.nav-scroll .navbar-toggler {\n\tcursor: pointer;\n}\n.nav-scroll .navbar-toggler span {\n\tcolor: #333;\n}\n.nav-scroll .nav-link:hover:after {\n\tbackground-color: #2388ed;\n}\n.nav-scroll .active {\n\tposition: relative;\n}\n.banner {\n\tbackground: #7a60ff;\n\tbackground: linear-gradient(to left, #7a60ff, #cd9ffa);\n\tpadding:100px 0px;\n\tposition:relative;\n}\n.banner::before {\n\tcontent: "";\n\tdisplay: block;\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbackground: url(public/pattern.png);\n}\n.banner a.weblink {\n\tcolor:#ffffff;\n\tborder-bottom:1px dotted #ffffff;\n}\n.banner a:hover {\n\ttext-decoration:none;\n}\n.svg-wave {\n\tposition: absolute;\n\tbottom: 0;\n\twidth: 200px;\n}\n.banner-text {\n\tpadding-right:80px;\n\tmargin:50px 0px 0px;\n}\n.banner-text p {\n\tmargin:40px 0px;\n}\n.banner-text ul {\n\tlist-style: none;\n}\n.banner-text ul li {\n\tdisplay: inline-block;\n\tmargin: 0px 10px 10px 0px;\n}\n.banner-text ul li a {\n\tdisplay: block;\n}\n.banner-text ul li a img {\n\twidth: 150px;\n\tborder-radius: 7px;\n}\n.prelative {\n\tposition:relative\n}\n.section-padding {\n\tpadding:80px 0px;\n}\n.sectioner-header {\n\twidth:69%;\n\tmargin:0 auto;\n}\n\n\n\n\n\n.line {\n\theight: 2px;\n\twidth: 50px;\n\tbackground: #8e1efc;\n\tdisplay: block;\n\tmargin: 20px auto 20px;\n}\n.line::after {\n\tcontent:"";\n\tposition: absolute;\n\tleft: 50%;\n\twidth: 150px;\n\theight: 2px;\n\tborder-bottom: 2px dashed #8e1efc;\n\tmargin-left: -75px;\n}\n.sectioner-header p {\n\tcolor:#818992;\n\tfont-size: 17px;\n}\n.section-content {\n\tmargin-top: 80px;\n}\n.icon-box {\n\tmargin-bottom:50px;\n}\n.icon-box i {\n\tdisplay: block;\n\tposition: relative;\n\twidth: 135px;\n\theight: 135px;\n\tborder-radius: 100px;\n\tbackground: #7a60ff;\n\tbackground:  linear-gradient(to left, #7a60ff, #cd9ffa);\n\tcolor: #ffffff;\n\tfont-size: 50px;\n\tline-height: 135px;\n\tmargin: 0 auto;\n}\n.icon-box h5 {\n\tmargin-top:30px;\n}\n.icon-box p {\n\tcolor: #818992;\n\tfont-size: 14px;\n\twidth: 80%;\n\tmargin: 0 auto;\n}\n.about-btn {\n\tcolor: #8e1efc;\n\tpadding: 10px 40px;\n\tborder: 2px solid #8e1efc;\n\tborder-radius: 7px;\n\tmargin-top: 30px;\n\tdisplay: inline-block;\n\tfont-size: 18px;\n}\n.about-btn:hover {\n\tbackground:#8e1efc;\n\tcolor:#ffffff;\n\ttext-decoration:none;\n}\n.video-section {\n\tbackground: url(public/video-bg.jpg) no-repeat fixed center;\n\tbackground-size: cover;\n\toverflow: hidden;\n}\n.video-overlay {\n\tbackground: linear-gradient(to left, rgba(122, 96, 255, 0.90), rgba(205, 159, 250, 0.90));\n}\n.video-section h3 {\n\tfont-weight: 600;\n\tfont-size: 38px;\n}\n.video-section i {\n\tdisplay: block;\n\tposition: relative;\n\twidth: 70px;\n\theight: 70px;\n\tborder-radius: 100px;\n\tbackground: #ffffff;\n\tcolor: #8e1efc;\n\tfont-size: 30px;\n\tline-height: 70px;\n\tmargin: 0 auto;\n\tcursor:pointer;\n}\n.video-popup {\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tz-index: 99999;\n\tbackground: rgba(0, 0, 0, 0.5);\n\tdisplay: none;\n\talign-content: center !important;\n\t-ms-flex-line-pack: center !important;\n\t-ms-flex-align: center !important;\n\talign-items: center !important;\n\t-ms-flex-pack: center !important;\n\tjustify-content: center !important;\n}\n.video-popup .video-src {\n\tposition: relative;\n\twidth: 700px;\n\tmax-width: 80%;\n}\n.video-popup .iframe-src {\n\twidth: 100%;\n\theight: 0;\n\tpadding-top: 56.3%;\n\tposition: relative;\n\tdisplay: none;\n}\n.video-popup .iframe-src iframe {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n}\n.single-feature {\n\tmargin-bottom: 80px;\n\tmargin-top: 40px;\n}\n.single-feature h5 {\n\tfont-size: 16px;\n}\n.media-right-margin {\n\tmargin-right:25px;\n}\n.single-feature p {\n\tfont-size: 13px;\n}\n\n\n\n\n\n.icon-border span {\n\tdisplay: block;\n\tposition: relative;\n\twidth: 50px;\n\theight: 50px;\n\tborder-radius: 100px;\n\tcolor: rgb(142, 30, 252);\n\tfont-size: 18px;\n\tline-height: 50px;\n\tborder: 1px solid rgb(142, 30, 252);\n}\n.team {\n\tbackground: #fafafa;\n\tborder-top: 1px solid #e4e4e4;\n}\n.team-detail {\n\tmargin-top:40px;\n}\n.team-detail img {\n\tborder-radius: 50%;\n\twidth: 70%;\n}\n.team-detail h4 {\n\tcolor:rgb(142, 30, 252);\n\tmargin-top: 20px;\n\tfont-size: 17px;\n\tmargin-bottom: 0px;\n}\n.testimonial {\n\tbackground: #7a60ff;\n\tbackground: linear-gradient(to left, #7a60ff, #cd9ffa);\n\tpadding:100px 0px;\n\tposition:relative;\n}\n.testimonial::before {\n\tcontent: "";\n\tdisplay: block;\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbackground: url(public/pattern.png);\n}\n.bx-prev {\n\tleft: -90px !important;\n\tbackground: url(public/arrow-left.png) no-repeat !important;\n\tbackground-size: auto auto !important;\n\tbackground-size: 100% 100% !important;\n}\n.bx-next {\n\tright: -90px !important;\n\tbackground: url(public/arrow-right.png) no-repeat !important;\n\tbackground-size: auto auto !important;\n\tbackground-size: 100% 100% !important;\n}\n.bx-wrapper {\n\tborder: none !important;\n\tbackground: rgba(255, 255, 255, 0.81) !important;\n\tborder-radius: 5px !important;\n\tbox-shadow:none !important;\n}\n.slider-item {\n\tpadding:20px;\n}\n.slider .test-img img {\n\tborder: 12px solid #fff;\n\tborder-radius: 50%;\n\twidth: 100%;\n\theight: auto;\n}\n.test-img {\n\tfloat: left;\n\twidth: 20%;\n\tmargin-right:5%;\n}\n.test-text {\n\tfloat: left;\n\twidth: 75%;\n}\n.slider .title {\n\tdisplay: block;\n\tposition: relative;\n\tmargin: 0 0 20px;\n\tfont-size: 1.125em;\n\tline-height: 1.25;\n}\n.slider .title span {\n\tdisplay: block;\n\tfont-size: 1.5em;\n\tfont-weight: 700;\n}\n.faq {\n\tbackground: #fafafa;\n\tborder-bottom: 1px solid #e4e4e4;\n}\n.faq-content {\n\tmargin: 20px 0px;\n}\n.faq-content h4 {\n\tfont-weight: 400;\n\tfont-size: 20px;\n}\n.faq-content p {\n\tcolor: #818992;\n\tfont-weight:300;\n\tmargin-top:15px;\n}\n#contact_form .form-input {\n\tborder: 1px solid #e4e4e4;\n}\ninput {\n\theight: 42px;\n\tpadding: 0 1rem;\n\tbackground: #fff;\n\tborder-radius: 30px;\n\tmargin-bottom: 1rem;\n\t-webkit-transition: all 0.3s ease-in-out;\n\t-moz-transition: all 0.3s ease-in-out;\n\t-o-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n\tborder:0;\n}\n#contact_form textarea {\n\tresize: none;\n\tpadding: 1rem;\n\theight: 150px;\n\tbackground: #fff;\n\tborder: 0;\n\tborder-radius: 30px;\n\tmargin-bottom: 1rem;\n\t-webkit-transition: all 0.3s ease-in-out;\n\t-moz-transition: all 0.3s ease-in-out;\n\t-o-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n}\n.btn-grad {\n padding: .7rem 2rem;\n\tdisplay: inline-block;\n\tcolor: #fff;\n\tborder-radius: 2rem;\n\tborder: 0;\n\tbackground: #7a60ff;\n\tbackground: linear-gradient(to left, #7a60ff, #cd9ffa);\n\tcursor:pointer;\n}\n\n\n\n\n\n.contact-info {\n\tpadding: 2rem 2rem 1rem;\n\tborder-radius: 8px;\n\tbackground: #7a60ff;\n\tbackground: linear-gradient(to left, #7a60ff, #cd9ffa);\n}\n.contact-item {\n\tmargin:23px 0px;\n}\n.contact-item i {\n\tfont-size: 20px;\n}\n.contact-item p {\n\tline-height: 20px;\n\tmargin: 0;\n}\n.download {\n\tbackground: #7a60ff;\n\tbackground: linear-gradient(to left, #7a60ff, #cd9ffa);\n\tpadding:100px 0px;\n\tposition:relative;\n}\n.download::before {\n\tcontent: "";\n\tdisplay: block;\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbackground: url(public/pattern.png);\n}\n.download ul {\n\tlist-style: none;\n}\n.download ul li {\n\tdisplay: inline-block;\n\tmargin: 0px 10px 10px 0px;\n}\n.download ul li a {\n\tdisplay: block;\n}\n.download ul li a img {\n\twidth: 150px;\n\tborder-radius: 7px;\n}\n.footer-copy {\n\tbackground: #ffffff;\n\tcolor: #242424;\n\tfont-size: 13px;\n\ttext-align: center;\n\tpadding:15px 0px;\n}\n.footer-copy p {\n\tmargin-bottom:0px;\n}\n@media all and (max-width:991px) {\n.navbar .navbar-collapse {\n\toverflow: auto;\n\tbackground:  rgb(213, 198, 221);\n\tcolor: #fff !important;\n\ttext-align: center;\n\tpadding: 10px 0;\n}\n.nav-scroll .navbar-collapse {\n\tbackground: #fff !important;\n}\n#contact_form {\n\tmargin-bottom:20px;\n}\n}\n@media all and (max-width:768px) {\n.nav-scroll .navbar-brand img, .navbar-brand img {\n\ttransform: scale(0.75) !important;\n\t-webkit-transform: scale(0.75) !important;\n}\n.banner-text {\n\tpadding-right: 0px;\n\tmargin: 10px 0px 0px;\n}\nh2 {\n\tfont-size: 25px;\n}\nh3 {\n\tfont-size: 23px;\n}\n.section-padding {\n\tpadding: 40px 0px;\n}\n.banner-text p {\n\tmargin: 25px 0px;\n}\n.banner-text ul li a img {\n\twidth: 140px;\n\tborder-radius: 7px;\n}\n.sectioner-header {\n\twidth: 90%;\n}\n.sectioner-header p {\n\tfont-size: 14px;\n}\n.about-btn {\n\tpadding: 5px 30px;\n\tmargin-top: 0px;\n\tfont-size: 16px;\n}\n.single-feature {\n\tmargin-bottom: 20px;\n\tmargin-top: 20px;\n}\n.team-detail {\n\tmargin-top: 20px;\n}\n.team-detail img {\n\twidth: 50%;\n}\n.bx-controls\n{\n\tdisplay:none;\n}\n.bx-wrapper {\n\tmargin: 0px 20px !important;\n}\n.slider .test-img img {\n\tmargin: 0 auto;\n}\n.test-img {\n\tfloat:none;\n\twidth: 200px;\n\theight: 200px;\n\tmargin: 0 auto;\n}\n.test-text {\n\tfloat: none;\n\twidth: 100%;\n\ttext-align: center;\n}\n.section-content {\n\tmargin-top: 40px;\n}\n.faq-content {\n\tmargin: 10px 0px;\n}\n.faq-content h4 {\n\tfont-size: 16px;\n}\n.faq-content p {\n\tfont-size: 13px;\n}\n#contact_form {\n\tmargin-bottom:20px;\n}\n.contact-item {\n\tfont-size: 12px;\n}\n.download ul li a img {\n\twidth: 120px;\n}\n.footer-copy p {\n\tfont-size: 10px;\n}\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* buy */ \nbody {\n\tbackground-color: lavender;\n  }\n  \n  .feature {\n\t/* Add your styles here */\n  }\n  \n  .product-item {\n\tbackground-color: #f9f9f9;\n\tpadding: 20px;\n\tmargin: 10px;\n\tborder-radius: 5px;\n\ttransition: background-color 0.3s;\n\ttext-align: center;\n  }\n  \n  .product-item:hover {\n\tbackground-color: #d8b6ff;\n  }\n  \n  .product-image {\n\twidth: 200px;\n\theight: 200px;\n\tobject-fit: cover;\n\tborder-radius: 5px;\n  }\n  \n  .product-price {\n\tmargin-top: 10px;\n\tfont-weight: bold;\n  }\n  \n  /* Add more styles for your other elements */\n  \n\n',
        }}
      />

      {/* Header */}
      <header className={HeaderStyles.header}>
        <a href="#">
          <img
            className={HeaderStyles.headerLogo}
            src="../devt-mag-high-resolution-logo-transparent.png"
            alt="Logo"
          />
        </a>

        <div className={HeaderStyles.barsSection}>
          <span className={HeaderStyles.bars}>
            <i className="fa-solid fa-bars" />
          </span>
          <div className={HeaderStyles.dropMenu}>
            <span className={HeaderStyles.pageDescriberLow}>Home Page</span>
            <div className={HeaderStyles.headerNavLow}>
              <a
                className={`${HeaderStyles.selected} ${HeaderStyles.headerLink}`}
                href="/"
              >
                Home
              </a>
              <a className={HeaderStyles.headerLink} href="./buy">
                Buy
              </a>
              <a className={HeaderStyles.headerLink} href="./sell">
                Sell
              </a>
              <a className={HeaderStyles.headerLink} href="./account">
                Profile
              </a>
            </div>
          </div>
        </div>

        <span className={HeaderStyles.pageDescriberHigh}>Home Page</span>

        <div className={HeaderStyles.headerNavHigh}>
          <a
            className={`${HeaderStyles.selected} ${HeaderStyles.headerLink}`}
            href="#"
          >
            Home
          </a>
          <a className={HeaderStyles.headerLink} href="./buy">
            Buy
          </a>
          <a className={HeaderStyles.headerLink} href="./sell">
            Sell
          </a>
          <a className={HeaderStyles.headerLink} href="./account">
            Profile
          </a>
        </div>
      </header>

      {/*-----Banner Start-----*/}
      <section className="banner" data-scroll-index={0}>
        <div className="banner-overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-12">
                <div className="banner-text">
                  <h2 className="white">DEVT MAG</h2>
                  <p className="banner-text white">
                    Welcome to our online store where quality comes first. We
                    offer a wide range of the best products on the market,
                    carefully selected to meet your requirements and
                    preferences. From fashion accessories and clothing to
                    technological devices and home accessories, we are committed
                    to providing our customers with the best shopping
                    experience. Our goal is to provide our customers with
                    convenience, quality, and reliability with every purchase.
                    Browse our store and find the perfect product for you. And
                    don't forget, you can also sell goods through us.
                  </p>
                </div>
              </div>

              <a className="svg-wave" href="./register">
                <img
                  className={styles.topIMG}
                  src="register-removebg-preview (1).png"
                />
              </a>
              <div id="img" className="col-md-4 col-sm-12">
                <img
                  src="/devt-mag-high-resolution-logo-transparent.png"
                  className="img-fluid wow fadeInUp"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*-----Banner End-----*/}
      {/*-----About End-----*/}
      <section
        className="about section-padding prelative"
        data-scroll-index={1}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sectioner-header text-center">
                <h3 className={styles.title}>What is DEVT MAG</h3>
                <span className="line" />
                <p>
                  DEVT MAG is a website that allows you to shop quickly, easily,
                  and conveniently. it provides:
                </p>
              </div>
              <div className="section-content text-center">
                <div className="row">
                  <div className="col-md-4">
                    <div
                      className="icon-box wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <i className="fa-solid fa-shield" area-hidden="true" />
                      <h5>Secure Shopping</h5>
                      <p>
                        Our website is designed to protect your personal data
                        from criminals.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div
                      className="icon-box wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <i
                        className="fa-solid fa-user-shield"
                        area-hidden="true"
                      />
                      <h5>Safety</h5>
                      <p>
                        We take full responsibility for the shipping and
                        receiving of the selected product.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div
                      className="icon-box wow fadeInUp"
                      data-wow-delay="0.6s"
                    >
                      <i className="fa fa-bolt" aria-hidden="true" />
                      <h5>Fast Delivery</h5>
                      <p>We offer delivery within 2 to 3 working days.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*-----About End-----*/}

      {/*-----About Us-----*/}
      <div className={styles.descOfUsAll}>
        <section className="feature section-padding" data-scroll-index={2}>
          <div className={"container"}>
            <h1 className={styles.descOfUsTitle}>About Us</h1>
            <div className="row" id="product-row">
              <div className="col-md-6">
                <h2 className={styles.descOfUs}>
                  We are students of the "Vasil Drumev" PMG from Veliko Tarnovo,
                  we are 15 years old in the 9th grade and we love to program
                  and develop web applications. Our passion for technology and
                  programming inspires us to engage in web application
                  development. We exchange ideas, learn new programming
                  languages and work together on projects to improve our skills
                </h2>
              </div>
              <div className="col-md-6">
                <img src="/we.jpg" alt="Нашата група" />
              </div>
            </div>
          </div>
        </section>
      </div>
      {/*-----FAQ Start-----*/}
      <section data-scroll-index={5}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sectioner-header text-center">
                <h3 className={styles.title}>Frequently asked questions</h3>
                <span className="line" />
              </div>
              <div className="section-content">
                <div className="row">
                  <div
                    className="col-md-6 faq-content wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <h4 className={styles.title}>
                      How to sell products through your website?
                    </h4>
                    <p>
                      To sell products through our website, you first need to
                      create an account. Then, you can upload your products, set
                      prices, and manage your sales through your personal
                      profile.
                    </p>
                  </div>
                  <div
                    className="col-md-6 faq-content wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <h4 className={styles.title}>
                      What types of products can I sell?
                    </h4>
                    <p>
                      We support a wide range of products, including fashion,
                      electronics, home appliances, books, and much more. You
                      can sell almost anything that complies with our product
                      listing policies.
                    </p>
                  </div>
                  <div
                    className="col-md-6 faq-content wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <h4 className={styles.title}>
                      What is the procedure for payment and delivery?
                    </h4>
                    <p>
                      Payments are processed through secure online platforms,
                      and delivery is carried out by our delivery partners. You
                      can choose different delivery methods depending on your
                      preferences.
                    </p>
                  </div>
                  <div
                    className="col-md-6 faq-content wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <h4 className={styles.title}>
                      Are there any restrictions on the number of products I can
                      sell?
                    </h4>
                    <p>
                      Currently, there are no restrictions on the number of
                      products you can sell. You can upload as many as you wish,
                      provided they comply with our rules and regulations.
                    </p>
                  </div>
                  <div
                    className="col-md-6 faq-content wow fadeInUp"
                    data-wow-delay="0.6s"
                  >
                    <h4 className={styles.title}>
                      What is the delivery process like?
                    </h4>
                    <p>
                      Regular orders are processed within 24 hours and delivered
                      within 2-3 working days. For urgent deliveries, please
                      contact our customer service team.
                    </p>
                  </div>
                  <div
                    className="col-md-6 faq-content wow fadeInUp"
                    data-wow-delay="0.6s"
                  >
                    <h4 className={styles.title}>
                      How can I pay for my purchases?
                    </h4>
                    <p>
                      We accept various payment methods, including credit cards,
                      debit cards, and online payments through platforms such as
                      Stripe.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*-----Testimonial Start-----*/}
      <section className="testimonial section-padding" data-scroll-index={4}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sectioner-header text-center white">
                <h3>Feedback</h3>
                <span className="line" />
                <p className="white">
                  It is very important for us to create a connection with the
                  client, and we will be happy if you contact us if you have any
                  questions or problems.
                </p>
              </div>
              <div className="section-content">
                <div className="row">
                  <div className="offset-md-2 col-md-8 col-sm-12">
                    <div className="slider">
                      <div className="slider-item">
                        <div className="test-img">
                          <img
                            src="/user1.jpg"
                            alt="Placeholder"
                            width={157}
                            height={157}
                          />
                        </div>
                        <div className="test-text">
                          <span className="title">
                            <span>Maria Grigorova</span> Buyer
                          </span>
                          Your online store offers an incredible variety of
                          high-class products that impressed me. I found exactly
                          what I was looking for, and the quality is
                          exceptional.
                        </div>
                      </div>
                      <div className="slider-item">
                        <div className="test-img">
                          <img
                            src="/user2.jpg"
                            alt="Placeholder"
                            width={157}
                            height={157}
                          />
                        </div>
                        <div className="test-text">
                          <span className="title">
                            <span>Georgi Ivanov</span> Seller
                          </span>
                          The site is very easy to navigate, which made my
                          shopping extremely convenient. Finding the desired
                          product and completing the order were quick and
                          hassle-free.
                        </div>
                      </div>
                      <div className="slider-item">
                        <div className="test-img">
                          <img
                            src="/user3.jpg"
                            alt="Placeholder"
                            width={157}
                            height={157}
                          />
                        </div>
                        <div className="test-text">
                          <span className="title">
                            <span>Peter Dimitrov</span> Buyer
                          </span>
                          My experience with the purchase and delivery was
                          extremely positive. My order was delivered on time,
                          and the customer service team was very responsive and
                          handled any of my inquiries professionally.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*-----Testimonial End-----*/}

      <footer className={FooterStyles.footer}>
        <div
          className="container grid grid--footer"
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 15fr)" }}
        >
          <div className="logo-col col" style={{ marginRight: "20px" }}>
            <a href="#">
              <img
                className={FooterStyles.img}
                alt=" logo"
                src="/devt-mag-high-resolution-logo-transparent.png"
              />
            </a>
          </div>
          <div className={FooterStyles.contact} style={{ flex: 2 }}>
            <p className="footer-heading">Contact us on:</p>
            <address className="contacts">
              <p>
                <a className="footer-link" href>
                  softunifest@gmail.com
                </a>
              </p>
            </address>
          </div>

          <div className="nav-col col" style={{ flex: 1 }}>
            <p className="footer-heading">Pages</p>
            <ul className={HeaderStyles.ul} type="none">
              <li>
                <a className={FooterStyles.link} href="#">
                  Home
                </a>
              </li>
              <li>
                <a className={FooterStyles.link} href="./sell">
                  Sell
                </a>
              </li>
              <li>
                <a className={FooterStyles.link} href="./buy">
                  Buy
                </a>
              </li>
              <li>
                <a className={FooterStyles.link} href="./account">
                  Profile
                </a>
              </li>
            </ul>
          </div>
          <div className="nav-col col" style={{ flex: 1 }}>
            <p className="footer-heading">Follow us</p>
            <ul className={HeaderStyles.ul} type="none">
              <li>
                <a
                  className={FooterStyles.link}
                  href="https://www.facebook.com"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a className={FooterStyles.link} href="https://www.twitter.com">
                  Twitter
                </a>
              </li>
              <li>
                <a
                  className={FooterStyles.link}
                  href="https://www.instagram.com"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* scrollIt js */}
    </div>
  );
}
