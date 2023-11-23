import React, { useEffect } from "react";
import "./Style.css";

function Footer() {
  useEffect(() => {
    // Get the button after the component has mounted
    let mybutton = document.getElementById("btn-back-to-top");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }

    // When the user clicks on the button, scroll to the top of the document
    mybutton.addEventListener("click", backToTop);

    function backToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }

    // Clean up the event listener when the component is unmounted
    return () => {
      window.onscroll = null;
      mybutton.removeEventListener("click", backToTop);
    };
  }, []);

  return (
    <>
      <button
        type="button"
        className="btn btn-primary btn-floating btn-lg"
        id="btn-back-to-top"
      >
        <i className="fas fa-arrow-up "></i>
      </button>

      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
      />
      <a
        href="https://api.whatsapp.com/send?phone=7019180686&text=Hi%21%20This%20is%20from%20Sankhyana....%20How%20can%20help%20you.%20?"
        class="float"
        target="_blank"
      >
        <i class="fa fa-whatsapp my-float"></i>
      </a>

      <footer>
        <section>
          <div className="container text-center text-md-start mt-2">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="fw-bold mb-2">
                  Sankhyana Consultancy Services Pvt. Ltd
                </h6>
                <p>THE BEST YOU GET, THE BEST WE OFFER</p>
                <div>
                  <a
                    href="https://www.facebook.com/SankhyanaConsultancyServices"
                    className="me-4 link-secondary"
                  >
                    <i class="fab fa-facebook-f white-icon-color"></i>
                  </a>
                  <a
                    href="https://twitter.com/sankhayana"
                    className="me-4 link-secondary"
                  >
                    <i class="fab fa-twitter white-icon-color"></i>
                  </a>
                  <a
                    href="https://Sankhyana.com/"
                    className="me-4 link-secondary"
                  >
                    <i className="fab fa-google white-icon-color"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/sankhyanakenya/"
                    className="me-4 link-secondary"
                  >
                    <i className="fab fa-instagram white-icon-color"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/13343717/admin/feed/posts/"
                    className="me-4 link-secondary"
                  >
                    <i className="fab fa-linkedin white-icon-color"></i>
                  </a>
                  

              
                </div><br/>
                <div>
                   <h6 className=" fw-bold mb-4">Contacts</h6>
                <p>
                  <i className="fas fa-envelope me-3 text-white"></i>
                  www.sankhyana.com
                </p>
                <p>
                  <i className="fas fa-phone me-3 text-white"></i> +91
                  9591295524 
                </p> 
                </div>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-12">
                {/* Links */}
                <h6 className="fw-bold mb-2">Quick Links</h6>
                <p>
                  <a href="/Navbar" className="text-reset">
                    Home
                  </a>
                </p>
                <p>
                  <a href="/about" className="text-reset">
                    About Us
                  </a>
                </p>
                <p>
                  <a href="/training" className="text-reset">
                    Training
                  </a>
                </p>
                <p>
                  <a href="/consulting" className="text-reset">
                    Consultancy
                  </a>
                </p>
                <p>
                  <a href="/Analytics" className="text-reset">
                    Analitycs
                  </a>
                </p>
                <p></p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-12">
                <h6 className=" fw-bold mb-2">Useful Links</h6>
                <p>
                  <a href="/training" className="text-reset">
                    Training
                  </a>
                </p>
                <p>
                  <a href="/Analytics" className="text-reset">
                    Analytics
                  </a>
                </p>
                <p>
                  <a href="/consulting" className="text-reset">
                    Counsulting
                  </a>
                </p>
                <p>
                  <a href="/Support" className="text-reset">
                    Help
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className=" fw-bold mb-2">Locations</h6>
                <p>
                  <i className="fas fa-home me-3 text-white"></i>Bengaluru -
                  #1678,HDFC ATM, near Kullappa Circle, Kammanahalli,
                  Bengaluru(Karnataka 560084).
                </p>
                <p>
                  <i className="fas fa-home me-3 text-white"></i>Bengaluru -
                  #1188, HNR Tower, Near Parangipalya Bus Stop Above Udupi
                  Palace, HSR Layout, Bengaluru(Karnataka 560102).
                </p>
                <p>
                  <i className="fas fa-home me-3 text-white"></i>Kenya - View
                  Park Towers, 9 & 10 Utali Lane, CBD, Nairobi, Kenya PR88+VC
                </p>
                <p>
                  <i className="fas fa-home me-3 text-white"></i>Bihar - Amber
                  Hotel, Dehri-On-Sone, Near Station Rd.(821305)
                </p>
                {/* <h6 className=" fw-bold mb-4">Contacts</h6>
                <p>
                  <i className="fas fa-envelope me-3 text-white"></i>
                  www.sankhyana.com
                </p>
                <p>
                  <i className="fas fa-phone me-3 text-white"></i> +91
                  9591295524
                </p> */}
              </div>
            </div>
          </div>
        </section>

        <footer className="">
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2020 Copyright:
            <a className="text-white" href="https://Sankhyana.com/">
              Sankhyana.com
            </a>
          </div>
        </footer>
      </footer>
    </>
  );
}
export default Footer;
