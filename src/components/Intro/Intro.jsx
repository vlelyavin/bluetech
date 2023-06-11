import { observerOptions } from "../../constants/constants";
import { Container } from "../Container";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";
import "./Intro.css";
import { forwardRef } from "react";

export const Intro = forwardRef((props, ref) => {
  const observer = useInView(observerOptions);

  return (
    <div className="intro" ref={observer.ref}>
      <Container>
        <div className="intro__title__section">
          <div className={classNames("intro__heading", { headingAnim: observer.inView })} ref={ref}>
            Let's Introduce
            <br />
            <span className="mediumItalic">Ourselves</span>
          </div>
          <div className={classNames("intro__subheading lightItalic", { subheadingAnim: observer.inView })}>
            Who We Are and
            <br />
            What We Do?
          </div>
        </div>
        <div className="intro__text__container">
          <p className={classNames("intro__text", { introTextAnim: observer.inView })}>
            Our team is united by a shared passion for producing exceptional digital products and presenting them in a
            compelling way to users around the world. We specialize in the following areas:
          </p>
        </div>
        <div className="intro__row">
          <div className={classNames("intro__row__item", { introRowItemAnim: observer.inView })}>
            <svg
              width="207"
              height="207"
              viewBox="0 0 207 207"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="intro__row__item__icon"
            >
              <path d="M90.428 75.72V69.09H108.686V141H101.24V75.72H90.428Z" fill="white" />
              <circle cx="103.5" cy="103.5" r="102" stroke="white" stroke-width="3" />
            </svg>
            <div className="intro__row__item__info">
              <div className="intro__row__item__info__title">
                Digital and Web
                <br /> Development
              </div>
              <div className="intro__row__item__info__text">
                We offer services for the development, optimization, refinement, and maintenance of digital products
                designed for both web and mobile devices.
              </div>
            </div>
          </div>
          <div className={classNames("intro__row__item", { introRowItemAnim: observer.inView })}>
            <svg
              width="207"
              height="207"
              viewBox="0 0 207 207"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="intro__row__item__icon"
            >
              <path
                d="M78.59 135.594C90.626 127.638 100.214 119.648 107.354 111.624C114.562 103.6 118.166 96.086 118.166 89.082C118.166 84.662 117.01 81.092 114.698 78.372C112.386 75.584 108.646 74.19 103.478 74.19C98.174 74.19 94.128 75.856 91.34 79.188C88.62 82.452 87.09 86.906 86.75 92.55H79.712C80.188 84.73 82.602 78.712 86.954 74.496C91.306 70.212 96.984 68.07 103.988 68.07C110.38 68.07 115.548 69.804 119.492 73.272C123.436 76.74 125.408 81.806 125.408 88.47C125.408 94.114 123.538 99.894 119.798 105.81C116.058 111.658 111.4 117.098 105.824 122.13C100.248 127.094 94.57 131.31 88.79 134.778H127.448V140.694H78.59V135.594Z"
                fill="white"
              />
              <circle cx="103.5" cy="103.5" r="102" stroke="white" stroke-width="3" />
            </svg>

            <div className="intro__row__item__info">
              <div className="intro__row__item__info__title">Marketing Services</div>
              <div className="intro__row__item__info__text">
                In addition, we specialize in promiting products in the digital space, analyzing and identifying target
                audiences, and implementing effective advertising monetization strategies
              </div>
            </div>
          </div>
          <div className="intro__row__button__container">
            <div
              className={classNames("intro__row__button", {
                introRowButtonAnim: observer.inView,
              })}
            >
              Contact us
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
});
