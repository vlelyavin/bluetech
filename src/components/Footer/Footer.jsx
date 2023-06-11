import { forwardRef } from "react";
import { Container } from "../Container";
import "./Footer.css";

export const Footer = forwardRef((props, ref) => {
  return (
    <footer className="footer" ref={ref}>
      <div className="footer__bg"></div>
      <Container>
        <div className="footer__inner">
          <div className="footer__title">
            Get{" "}
            <span className="mediumItalic">
              The Best Product At
              <br /> The Best Price
            </span>
          </div>
          <div className="footer__row">
            <div className="footer__column">
              <div className="footer__column__title lightItalic">
                Address
                <br /> Information
              </div>
              <div className="footer__column__line">
                <div className="footer__column__line__text">Bluelight Limited Ltd.</div>
              </div>
              <div className="footer__column__line">
                <svg
                  width="16"
                  height="22"
                  viewBox="0 0 16 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="footer__column__line__icon"
                >
                  <path
                    d="M7 15.9381C3.05369 15.446 0 12.0796 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.0796 12.9463 15.446 9 15.9381V19H7V15.9381ZM1 20H15V22H1V20Z"
                    fill="white"
                  />
                </svg>

                <div className="footer__column__line__text">
                  128, City Road, London, EC1V
                  <br /> 2NX, UNITED KINGDOM.
                </div>
              </div>
            </div>

            <div className="footer__column">
              <div className="footer__column__title lightItalic">
                Contact
                <br /> Information
              </div>
              <div className="footer__column__line">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="footer__column__line__icon"
                >
                  <path
                    d="M20 7C21.1046 7 22 7.89543 22 9V13C22 14.1046 21.1046 15 20 15H18.9381C18.446 18.9463 15.0796 22 11 22V20C14.3137 20 17 17.3137 17 14V8C17 4.68629 14.3137 2 11 2C7.68629 2 5 4.68629 5 8V15H2C0.89543 15 0 14.1046 0 13V9C0 7.89543 0.89543 7 2 7H3.06189C3.55399 3.05369 6.92038 0 11 0C15.0796 0 18.446 3.05369 18.9381 7H20ZM6.75944 14.7849L7.81958 13.0887C8.74161 13.6662 9.8318 14 11 14C12.1682 14 13.2584 13.6662 14.1804 13.0887L15.2406 14.7849C14.0112 15.5549 12.5576 16 11 16C9.4424 16 7.98882 15.5549 6.75944 14.7849Z"
                    fill="white"
                  />
                </svg>

                <a href="tel:+372 5732 7985" className="footer__column__line__text">
                  +372 5732 7985
                </a>
              </div>
              <div className="footer__column__line">
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="footer__column__line__icon"
                >
                  <path
                    d="M1 0H19C19.5523 0 20 0.44772 20 1V17C20 17.5523 19.5523 18 19 18H1C0.44772 18 0 17.5523 0 17V1C0 0.44772 0.44772 0 1 0ZM10.0606 8.6829L3.64722 3.2377L2.35278 4.7623L10.0731 11.3171L17.6544 4.75616L16.3456 3.24384L10.0606 8.6829Z"
                    fill="white"
                  />
                </svg>

                <a href="mailto:office@bluelight-technology.com" className="footer__column__line__text">
                  office@bluelight-technology.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="footer__lower">
        <Container>
          <div className="footer__lower__inner">
            <div className="footer__rights">
              Bluelight Limited Ltd. ©<br /> all rights reserved
            </div>
            <nav className="footer__nav">
              <div className="footer__nav__link footerLinkHoverUnderline">Accessibility Statement</div>
              <div className="footer__nav__link footerLinkHoverUnderline">Privacy Statement</div>
              <div className="footer__nav__link footerLinkHoverUnderline">CCPA</div>
              <div className="footer__nav__link footerLinkHoverUnderline">Terms And Conditions</div>
            </nav>
          </div>
        </Container>
      </div>
    </footer>
  );
});
