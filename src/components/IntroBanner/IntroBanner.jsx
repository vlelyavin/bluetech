import { useInView } from "react-intersection-observer";
import { Container } from "../Container";
import classNames from "classnames";
import { forwardRef } from "react";
import SmoothScrollbar from "smooth-scrollbar";
import "./IntroBanner.css";
import { observerOptions } from "../../constants/constants";

export const IntroBanner = forwardRef((props, ref) => {
  const observer = useInView(observerOptions);
  const { appRef, contactRef } = ref;

  return (
    <section className="intro__banner" ref={observer.ref}>
      <Container>
        <div className="intro__banner__title upper">
          <div className={classNames("intro__banner__word", { introBannerWordAnim: observer.inView })}>Fresh</div>
          <div className="puzzle">
            <div className="puzzle__inner">
              <svg
                width="257"
                height="264"
                viewBox="0 0 257 264"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={classNames("puzzle__parent", {
                  puzzleParentAnim: observer.inView,
                  puzzleParentAnimBackwards: !observer.inView,
                })}
                ref={observer.ref}
              >
                <path
                  d="M231.018 113.851C228.016 115.367 224.993 116.313 222.711 118.156C209.999 128.436 195.884 129.237 181.863 122.678C165.515 115.026 158.052 100.646 158.092 82.9996C158.123 68.4123 166.759 58.5183 178.976 51.6767C187.838 46.7134 188.559 44.7772 183.325 36.218C176.046 24.3146 168.77 12.4179 161.28 0.169512L111.146 30.828C132.384 45.4628 143.563 63.9972 130.608 88.9668C122.821 103.976 105.471 111.486 89.7295 107.629C68.2687 102.365 58.8777 86.6209 56.7449 64.6329L7.03481 95.0317C8.1743 97.1335 9.381 99.6137 10.8067 101.96C18.7627 115.045 26.805 128.077 34.7544 141.166C39.3412 148.726 37.0601 154.551 28.5059 155.799C14.4003 157.852 4.9145 165.521 1.2785 178.985C-2.47941 192.861 3.39079 204.085 13.3817 213.774C26.5438 226.547 48.9625 219.647 57.41 208.118C64.9477 197.83 69.6371 198.253 76.253 209.012C84.815 222.939 93.3678 236.88 101.943 250.799C102.199 251.217 102.711 251.487 104.346 252.894C107.365 251.048 110.808 248.942 114.252 246.836C124.218 240.742 134.184 234.647 144.133 228.527C156.172 221.11 161.109 223.132 164.196 236.797C168.302 254.944 185.24 266.483 202.386 262.38C215.238 259.306 224.265 251.498 227.162 238.331C230.083 225.04 225.645 213.787 215.319 204.996C204.861 196.094 205.119 191.223 216.723 184.109C228.452 176.919 240.112 169.615 251.973 162.653C256.79 159.826 257.83 157.175 254.607 152.172C246.601 139.766 239.093 127.027 231.031 113.843L231.018 113.851ZM118.123 28.9858C118.079 28.9128 118.038 28.8464 117.994 28.7734L147.009 11.03L147.139 11.2423L118.117 28.9898L118.123 28.9858Z"
                  fill="white"
                />
              </svg>
              <div
                className={classNames("puzzle__child", {
                  puzzleFirstChildAnim: observer.inView,
                })}
              ></div>
              <div
                className={classNames("puzzle__child", {
                  puzzleSecondChildAnim: observer.inView,
                })}
              ></div>
              <div
                className={classNames("puzzle__child", {
                  puzzleThirdChildAnim: observer.inView,
                })}
              ></div>
            </div>
          </div>
          <div className={classNames("intro__banner__word", { introBannerWordAnim: observer.inView })}>Approaches</div>
        </div>
        <div className="intro__banner__title lower">
          <div className={classNames("intro__banner__word lightItalic", { introBannerWordAnim: observer.inView })}>
            For
          </div>
          <div className={classNames("intro__banner__word", { introBannerWordAnim: observer.inView })}>Changing</div>
          <div className={classNames("intro__banner__word lightItalic", { introBannerWordAnim: observer.inView })}>
            Times
          </div>
        </div>
        <div className="intro__banner__row">
          <div
            className="intro__banner__column link"
            onClick={() => SmoothScrollbar.get(appRef.current).scrollTo(0, contactRef.current.offsetTop, 700)}
          >
            <div
              className={classNames("intro__banner__link__icon__container", { introBannerLinkAnim: observer.inView })}
            >
              <svg
                width="37"
                height="37"
                viewBox="0 0 37 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="intro__banner__link__icon"
              >
                <path
                  d="M30.3443 10.8504L4.88317 36.3115L0.699463 32.1279L26.1606 6.66667H3.71939V0.75H36.261V33.2917H30.3443V10.8504Z"
                  fill="#78E37E"
                />
              </svg>
            </div>
            <div
              className={classNames("intro__banner__link__title buttonTextUnderline", {
                introBannerLinkAnim: observer.inView,
              })}
            >
              Contact us
            </div>
          </div>
          <div className="intro__banner__column">
            <div className="intro__banner__column__text">
              <div className="intro__banner__column__text__block">
                <p className={classNames({ introBannerTextBlockAnim: observer.inView })}>
                  At our company, we take pride in our ability to conceive and execute innovative projects in the
                  market.
                </p>
              </div>
              <div className="intro__banner__column__text__block">
                <p className={classNames({ introBannerTextBlockAnim: observer.inView })}>
                  We offer comprehensive services that span from project creation to achieving top-tier rankings
                  worldwide.
                </p>
              </div>
              <div className="intro__banner__column__text__block">
                <p className={classNames({ introBannerTextBlockAnim: observer.inView })}>
                  We are dedicated to helping our clients bring their visions to life and succeed in their endeavors.
                </p>
              </div>
            </div>
          </div>
          <div className="intro__banner__column">
            <div className="intro__banner__column__row">
              <div
                className={classNames("intro__banner__column__row__item", {
                  introBannerColumnRowItemAnim: observer.inView,
                })}
              >
                <div className="intro__banner__column__row__item__number">30+</div>
                <div className="intro__banner__column__row__item__text">Partners</div>
              </div>
              <div
                className={classNames("intro__banner__column__row__item", {
                  introBannerColumnRowItemAnim: observer.inView,
                })}
              >
                <div className="intro__banner__column__row__item__number">70+</div>
                <div className="intro__banner__column__row__item__text">Projects</div>
              </div>
              <div
                className={classNames("intro__banner__column__row__item", {
                  introBannerColumnRowItemAnim: observer.inView,
                })}
              >
                <div className="intro__banner__column__row__item__number">15+</div>
                <div className="intro__banner__column__row__item__text">Specialists</div>
              </div>
              <div
                className="intro__banner__column link"
                onClick={() => SmoothScrollbar.get(appRef.current).scrollTo(0, contactRef.current.offsetTop, 700)}
              >
                <div className="intro__banner__link__icon__container">
                  <svg
                    width="37"
                    height="37"
                    viewBox="0 0 37 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="intro__banner__link__icon"
                  >
                    <path
                      d="M30.3443 10.8504L4.88317 36.3115L0.699463 32.1279L26.1606 6.66667H3.71939V0.75H36.261V33.2917H30.3443V10.8504Z"
                      fill="#78E37E"
                    />
                  </svg>
                </div>
                <div className="intro__banner__link__title buttonTextUnderline">Contact us</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
});
