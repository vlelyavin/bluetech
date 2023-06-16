import { useInView } from "react-intersection-observer";
import { Container } from "../Container";
import { observerOptions } from "../../constants/constants";
import classNames from "classnames";
import { forwardRef } from "react";
import "./Areas.css";
import SmoothScrollbar from "smooth-scrollbar";

export const Areas = forwardRef((props, ref) => {
  const observer = useInView(observerOptions);
  const { areasRef, contactRef, appRef } = ref;
  return (
    <section className="areas" ref={areasRef}>
      <Container>
        <div className="areas__inner" ref={observer.ref}>
          <div className="areas__info">
            <div
              className={classNames("areas__info__subtitle lightItalic", { areasInfoTitleLineAnim: observer.inView })}
            >
              What We work with
            </div>
            <div className="areas__info__title">
              <span className={classNames("areas__info__title__line", { areasInfoTitleLineAnim: observer.inView })}>
                Areas Of
              </span>
              <span className={classNames("areas__info__title__line", { areasInfoTitleLineAnim: observer.inView })}>
                <span
                  className={classNames("mediumItalic", { areasInfoTitleLineAnim: observer.inView })}
                  style={{ color: "var(--red)" }}
                >
                  Marketing&nbsp;
                </span>
                In
              </span>
              <span className={classNames("areas__info__title__line", { areasInfoTitleLineAnim: observer.inView })}>
                Which
                <span
                  className={classNames("mediumItalic", { areasInfoTitleLineAnim: observer.inView })}
                  style={{ color: "var(--green)" }}
                >
                  We
                </span>
              </span>
              <span
                className={classNames("areas__info__title__line mediumItalic", {
                  areasInfoTitleLineAnim: observer.inView,
                })}
                style={{ color: "var(--blue)" }}
              >
                Specialize
              </span>
            </div>
            <div className="areas__info__text">
              Here is a brief description of the areas in which we work and help our clients achieve their goals
            </div>
            <div
              className="areas__info__button__container"
              onClick={() => SmoothScrollbar.get(appRef.current).scrollTo(0, contactRef.current.offsetTop, 700)}
            >
              <div className="areas__info__button buttonHover">Contact us</div>
            </div>
          </div>
          <div className="areas__grid">
            <div className="areas__grid__item">
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="areas__grid__item__icon"
              >
                <path
                  d="M21 0C32.5058 0 41.8333 9.3274 41.8333 20.8333C41.8333 32.3392 32.5058 41.6667 21 41.6667C9.49405 41.6667 0.166656 32.3392 0.166656 20.8333C0.166656 9.3274 9.49405 0 21 0ZM29.3423 22.6619C28.6227 21.5694 28.1035 20.7804 26.1296 21.0933C22.3994 21.6854 21.9858 22.3383 21.8077 23.4115L21.7575 23.7381L21.7069 24.0827C21.5033 25.5058 21.511 26.0442 22.1644 26.7308C24.8002 29.4962 26.3792 31.4896 26.8575 32.6554C27.091 33.2258 27.6914 34.9481 27.2783 36.6515C29.8275 35.6387 32.0742 34.0275 33.8444 31.9915C34.0739 31.2127 34.2398 30.2429 34.2398 29.0662V28.8483C34.2398 26.9265 34.2398 26.05 32.8814 25.2737C32.3083 24.9481 31.8806 24.7521 31.5379 24.5967C30.7729 24.2487 30.2664 24.0202 29.5829 23.0206C29.5014 22.9017 29.4219 22.7829 29.3423 22.6619ZM21 3.81944C16.1721 3.81944 11.8138 5.83037 8.71707 9.06033C9.08574 9.31637 9.40701 9.6761 9.62768 10.172C10.0527 11.1256 10.0527 12.1067 10.0527 12.9742C10.0518 13.6588 10.0509 14.3067 10.2707 14.7771C10.5717 15.4195 11.8675 15.6922 13.0114 15.932C13.4201 16.0181 13.8416 16.1059 14.2249 16.212C15.2793 16.5049 16.0949 17.451 16.7487 18.2108C17.02 18.5273 17.4206 18.9923 17.6214 19.1077C17.7262 19.0325 18.0625 18.6683 18.2289 18.0698C18.3556 17.614 18.3196 17.2077 18.1331 16.9881C16.9683 15.6134 17.0317 12.965 17.3917 11.9895C17.9587 10.4501 19.7302 10.5637 21.025 10.6479C21.5079 10.6789 21.9637 10.7088 22.3035 10.6662C23.6004 10.5035 23.9992 8.53204 24.2812 8.14583C24.8898 7.3121 26.7514 6.05646 27.9079 5.28029C25.7969 4.34129 23.4594 3.81944 21 3.81944Z"
                  fill="white"
                />
              </svg>

              <div className="areas__grid__item__title">SMM</div>
              <div className="areas__grid__item__text">
                The fastest promotion
                <br /> in social networks
              </div>
            </div>
            <div className="areas__grid__item">
              <svg
                width="46"
                height="42"
                viewBox="0 0 46 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="areas__grid__item__icon"
              >
                <path
                  d="M14.6667 0.25C6.61252 0.25 0.0833359 6.77919 0.0833359 14.8333C0.0833359 22.8875 6.61252 29.4167 14.6667 29.4167H16.8977C16.8004 28.7362 16.75 28.0406 16.75 27.3333C16.75 26.626 16.8004 25.9304 16.8977 25.25H14.6667C8.91371 25.25 4.25 20.5862 4.25 14.8333C4.25 9.08037 8.91371 4.41667 14.6667 4.41667H31.3333C37.0863 4.41667 41.75 9.08037 41.75 14.8333C41.75 15.5475 41.6781 16.2448 41.5412 16.9183C42.761 18.1142 43.7717 19.5225 44.5133 21.0833C45.4131 19.189 45.9167 17.07 45.9167 14.8333C45.9167 6.77919 39.3875 0.25 31.3333 0.25H14.6667ZM31.3333 21.0833C27.8815 21.0833 25.0833 23.8815 25.0833 27.3333C25.0833 30.7852 27.8815 33.5833 31.3333 33.5833C34.7852 33.5833 37.5833 30.7852 37.5833 27.3333C37.5833 23.8815 34.7852 21.0833 31.3333 21.0833ZM20.9167 27.3333C20.9167 21.5804 25.5804 16.9167 31.3333 16.9167C37.0863 16.9167 41.75 21.5804 41.75 27.3333C41.75 29.4565 41.1148 31.4312 40.0242 33.0779L45.3065 38.3602L42.3602 41.3065L37.0779 36.0242C35.4313 37.1148 33.4565 37.75 31.3333 37.75C25.5804 37.75 20.9167 33.0863 20.9167 27.3333Z"
                  fill="white"
                />
              </svg>

              <div className="areas__grid__item__title">SEO</div>
              <div className="areas__grid__item__text">We will bring your product to the top of search queries</div>
            </div>
            <div className="areas__grid__item">
              <svg
                width="41"
                height="37"
                viewBox="0 0 41 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="areas__grid__item__icon"
              >
                <path
                  d="M21.7209 26.6667L15.1895 10.3333H11.1062L7.02283 20.5417L7.02082 20.5457L4.57291 26.6667H8.97078L9.78724 24.625H16.5045L17.3211 26.6667H21.7209ZM11.4187 20.5417L13.1478 16.2237L14.8732 20.5417H11.4187ZM30.7083 10.3333H34.7917V26.6667H28.6667C25.2838 26.6667 22.5417 23.9245 22.5417 20.5417C22.5417 17.1588 25.2838 14.4167 28.6667 14.4167H30.7083V10.3333ZM28.6667 18.5C27.5393 18.5 26.625 19.4143 26.625 20.5417C26.625 21.6691 27.5393 22.5833 28.6667 22.5833H30.7083V18.5H28.6667ZM38.875 0.125H2.12501C0.9975 0.125 0.0833435 1.03916 0.0833435 2.16667V34.8333C0.0833435 35.9607 0.9975 36.875 2.12501 36.875H38.875C40.0024 36.875 40.9167 35.9607 40.9167 34.8333V2.16667C40.9167 1.03916 40.0024 0.125 38.875 0.125ZM4.16668 32.7917V4.20833H36.8333V32.7917H4.16668Z"
                  fill="#151515"
                />
              </svg>

              <div className="areas__grid__item__title">Content marketing</div>
              <div className="areas__grid__item__text">Creating the best advertising company for you</div>
            </div>
            <div className="areas__grid__item">
              <svg
                width="38"
                height="42"
                viewBox="0 0 38 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="areas__grid__item__icon"
              >
                <path
                  d="M29.3333 29.3334C32.7852 29.3334 35.5833 32.1315 35.5833 35.5834C35.5833 39.0353 32.7852 41.8334 29.3333 41.8334C25.8815 41.8334 23.0833 39.0353 23.0833 35.5834C23.0833 32.1315 25.8815 29.3334 29.3333 29.3334ZM8.5 21.0001C13.1024 21.0001 16.8333 24.7311 16.8333 29.3334C16.8333 33.9357 13.1024 37.6667 8.5 37.6667C3.89762 37.6667 0.166664 33.9357 0.166664 29.3334C0.166664 24.7311 3.89762 21.0001 8.5 21.0001ZM26.2083 0.166748C32.5367 0.166748 37.6667 5.29681 37.6667 11.6251C37.6667 17.9534 32.5367 23.0834 26.2083 23.0834C19.88 23.0834 14.75 17.9534 14.75 11.6251C14.75 5.29681 19.88 0.166748 26.2083 0.166748Z"
                  fill="#151515"
                />
              </svg>

              <div className="areas__grid__item__title">Affiliate marketing</div>
              <div className="areas__grid__item__text">We promote your product on partner platforms</div>
            </div>
            <div className="areas__grid__item">
              <svg
                width="46"
                height="38"
                viewBox="0 0 46 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="areas__grid__item__icon"
              >
                <path
                  d="M4.16667 5.45833V2.31958C4.16667 1.17658 5.11523 0.25 6.23292 0.25H43.7671C44.9083 0.25 45.8333 1.17698 45.8333 2.31958V35.6804C45.8333 36.8233 44.8848 37.75 43.7671 37.75H6.23292C5.09177 37.75 4.16667 36.8231 4.16667 35.6804V33.5833H41.6667V9.20833L25 24.2083L4.16667 5.45833ZM0 14.8333H10.4167V19H0V14.8333ZM0 25.25H16.6667V29.4167H0V25.25Z"
                  fill="white"
                />
              </svg>

              <div className="areas__grid__item__title">Email marketing</div>
              <div className="areas__grid__item__text">Sending marketing offers to the target audience</div>
            </div>
            <div className="areas__grid__item">
              <svg
                width="42"
                height="38"
                viewBox="0 0 42 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="areas__grid__item__icon"
              >
                <path
                  d="M0.176834 12.75H39.7602C40.9108 12.75 41.8435 13.6827 41.8435 14.8333V35.6667C41.8435 36.8173 40.9108 37.75 39.7602 37.75H2.26017C1.10958 37.75 0.176834 36.8173 0.176834 35.6667V12.75ZM2.26017 0.25H33.5102V8.58333H0.176834V2.33333C0.176834 1.18275 1.10958 0.25 2.26017 0.25ZM27.2602 23.1667V27.3333H33.5102V23.1667H27.2602Z"
                  fill="white"
                />
              </svg>

              <div className="areas__grid__item__title">Paid advertising</div>
              <div className="areas__grid__item__text">Promotion on thematic platforms</div>
            </div>
          </div>
          <div
            className="areas__info__button__container mobile"
            onClick={() => SmoothScrollbar.get(appRef.current).scrollTo(0, contactRef.current.offsetTop, 700)}
          >
            <div className="areas__info__button buttonHover">Contact us</div>
          </div>
        </div>
      </Container>
    </section>
  );
});
