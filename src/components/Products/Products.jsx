import uniqueWebProjects from "../../assets/uniqueWebProjects.png";
import modernDesignsAndInterfaces from "../../assets/modernDesignsAndInterfaces.png";
import creationOfMavelousMobileApps from "../../assets/creationOfMavelousMobileApps.png";
import { Container } from "../Container";
import { useInView } from "react-intersection-observer";
import { observerOptions } from "../../constants/constants";
import classNames from "classnames";
import "./Products.css";
import { forwardRef } from "react";
import SmoothScrollbar from "smooth-scrollbar";

export const Products = forwardRef((props, ref) => {
  const observer = useInView(observerOptions);
  const { contactRef, appRef, productsRef } = ref;
  return (
    <section className="products" ref={observer.ref}>
      <Container>
        <div className="products__title__section" ref={productsRef}>
          <div className={classNames("products__subheading lightItalic", { subheadingAnimInverted: observer.inView })}>
            What We Create?
          </div>
          <div
            className={classNames("products__heading", {
              headingAnimInverted: observer.inView,
            })}
          >
            Implementing <span className="mediumItalic">Digital </span>
            <br />
            <span className="mediumItalic">Products</span> With Technology
          </div>
        </div>
      </Container>
      <div className="products__row">
        <Container>
          <div className="products__row__inner">
            <div className={classNames("products__column", { productsColumnAnim: observer.inView })}>
              <div className="products__column__image__container">
                <img src={uniqueWebProjects} alt="uniqueWebProjects" className="products__column__image" />
              </div>
              <div className="products__column__info">
                <div className="products__column__info__title">
                  Building unique web
                  <br /> projects
                </div>
                <div className="products__column__info__text">
                  We have expertise to create web projects from scratch across various domains.
                </div>
              </div>
            </div>
            <div className={classNames("products__column", { productsColumnAnim: observer.inView })}>
              <div className="products__column__image__container">
                <img
                  src={modernDesignsAndInterfaces}
                  alt="modernDesignsAndInterfaces"
                  className="products__column__image"
                />
              </div>
              <div className="products__column__info">
                <div className="products__column__info__title">
                  Modern designs and
                  <br /> interfaces
                </div>
                <div className="products__column__info__text">
                  We have expertise to create web projects from scratch across various domains.
                </div>
              </div>
            </div>
            <div className={classNames("products__column", { productsColumnAnim: observer.inView })}>
              <div className="products__column__image__container">
                <img
                  src={creationOfMavelousMobileApps}
                  alt="creationOfMavelousMobileApps"
                  className="products__column__image"
                />
              </div>
              <div className="products__column__info">
                <div className="products__column__info__title">
                  Creation of
                  <br />
                  marvelous mobile
                  <br />
                  apps
                </div>
                <div className="products__column__info__text">
                  Our team excels in creating cross-platform and hybrid mobile applications.
                </div>
              </div>
            </div>
          </div>
        </Container>
        <div
          className="products__button__container"
          onClick={() => SmoothScrollbar.get(appRef.current).scrollTo(0, contactRef.current.offsetTop - 150, 700)}
        >
          <div className="products__button buttonHover">Contact us</div>
        </div>
      </div>
    </section>
  );
});
