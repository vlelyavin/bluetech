import { forwardRef, useEffect, useRef, useState } from "react";
import "./Header.css";
import classNames from "classnames";
import SmoothScrollbar from "smooth-scrollbar";

export const Header = forwardRef((props, ref) => {
  const { appRef, introRef, productsRef, areasRef, servicesRef, contactRef } = ref;
  const [isTransparent, setTransparentStatus] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuVisible, setMenuVisibility] = useState(false);
  const menuRef = useRef();
  const handleAboutLinkClick = (e) => {
    setTransparentStatus(false);
    const scrollbar = SmoothScrollbar.get(appRef.current);
    scrollbar.scrollTo(0, introRef.current.offsetTop - 150, 700);
  };

  const handleDevelopmentLinkClick = (e) => {
    setTransparentStatus(false);
    const scrollbar = SmoothScrollbar.get(appRef.current);
    scrollbar.scrollTo(0, productsRef.current.offsetTop - 150, 700);
  };

  const handleMarketingLinkClick = (e) => {
    setTransparentStatus(false);
    const scrollbar = SmoothScrollbar.get(appRef.current);
    scrollbar.scrollTo(0, areasRef.current.offsetTop - 150, 700);
  };

  const handleConsultationsLinkClick = (e) => {
    setTransparentStatus(false);
    const scrollbar = SmoothScrollbar.get(appRef.current);
    scrollbar.scrollTo(0, servicesRef.current.offsetTop - 150, 700);
  };
  const handleContactLinkClick = (e) => {
    setTransparentStatus(false);
    const scrollbar = SmoothScrollbar.get(appRef.current);
    scrollbar.scrollTo(0, contactRef.current.offsetTop - 150, 700);
  };

  const handleCloseMenu = () => {
    if (window.innerWidth > 1020) {
      setMenuVisibility(false);
      setTransparentStatus(false);
    }
  };

  const handleScroll = (e) => {
    const scrollbar = SmoothScrollbar.get(appRef.current);
    if (window.innerWidth > 1020) {
      if (scrollbar.scrollTop > 100) {
        setTransparentStatus(false);
      } else {
        setTransparentStatus(true);
      }

      if (e.deltaY > 0) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    } else {
      setTransparentStatus(false);
      setMenuVisibility(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleCloseMenu);
    window.addEventListener("wheel", handleScroll);
    window.addEventListener("touchstart", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("resize", handleCloseMenu);
      window.removeEventListener("touchstart", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={classNames("header", { transparent: isTransparent }, { visible: isVisible })}>
        <div className="header__inner">
          <div className="header__logo" onClick={() => SmoothScrollbar.get(appRef.current).scrollTo(0, 0, 700)}>
            <svg width="136" height="27" viewBox="0 0 136 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_3_504)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.2058 7.88758C16.0986 7.14589 14.7969 6.75 13.4653 6.75V0C16.1285 0 18.7319 0.791761 20.9463 2.27516C23.1607 3.75855 24.8865 5.86697 25.9057 8.33375C26.9248 10.8005 27.1915 13.515 26.672 16.1337C26.1524 18.7524 24.87 21.1579 22.9868 23.0459C21.1036 24.934 18.7043 26.2197 16.0923 26.7406C13.4803 27.2615 10.7728 26.9941 8.31236 25.9724C5.8519 24.9506 3.74891 23.2203 2.26932 21.0002C0.789729 18.7801 0 16.17 0 13.5H6.73267C6.73267 14.835 7.12754 16.1401 7.86733 17.2501C8.60712 18.3601 9.65863 19.2253 10.8889 19.7362C12.1191 20.2471 13.4728 20.3807 14.7788 20.1203C16.0848 19.8598 17.2845 19.217 18.2261 18.273C19.1677 17.3289 19.8089 16.1262 20.0686 14.8169C20.3284 13.5075 20.1951 12.1503 19.6855 10.9169C19.1759 9.68348 18.313 8.62927 17.2058 7.88758Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.73267 3.56733e-06C6.73267 0.886426 6.55853 1.76417 6.22018 2.58312C5.88183 3.40206 5.38591 4.14618 4.76072 4.77297C4.13553 5.39977 3.39333 5.89697 2.57648 6.23619C1.75963 6.57541 0.884144 6.75 2.94292e-07 6.75L0 13.5C1.76829 13.5 3.51927 13.1508 5.15297 12.4724C6.78667 11.7939 8.27109 10.7995 9.52141 9.54592C10.7718 8.29238 11.7637 6.80414 12.4404 5.16623C13.1171 3.52833 13.4653 1.77284 13.4653 0L6.73267 3.56733e-06Z"
                  fill="white"
                />
                <path d="M84.5752 9.75537H81.3085V20.1587H84.5752V9.75537Z" fill="white" />
                <path
                  d="M81.672 7.80755C82.0134 8.15005 82.4402 8.32129 82.9526 8.32129C83.4649 8.32129 83.8851 8.15005 84.2123 7.80755C84.5401 7.45082 84.7037 7.02266 84.7037 6.5232C84.7037 6.00947 84.5401 5.58133 84.2123 5.23885C83.8851 4.89634 83.4649 4.7251 82.9526 4.7251C82.4402 4.7251 82.0134 4.89634 81.672 5.23885C81.3441 5.58133 81.1805 6.00947 81.1805 6.5232C81.1805 7.02266 81.3441 7.45082 81.672 7.80755Z"
                  fill="white"
                />
                <path d="M34.4419 20.1586V5.0459H37.794V17.2046H44.4769V20.1586H34.4419Z" fill="white" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M50.5134 20.394C49.4459 20.394 48.478 20.1586 47.6097 19.6876C46.7557 19.2024 46.0796 18.546 45.5814 17.7183C45.0832 16.8906 44.8341 15.963 44.8341 14.9355C44.8341 13.908 45.0832 12.9876 45.5814 12.1741C46.0796 11.3607 46.7557 10.7185 47.6097 10.2476C48.4638 9.76237 49.4317 9.51978 50.5134 9.51978C51.5953 9.51978 52.5631 9.75528 53.4172 10.2262C54.2712 10.6971 54.9474 11.3465 55.4455 12.1741C55.9438 12.9876 56.1929 13.908 56.1929 14.9355C56.1929 15.963 55.9438 16.8906 55.4455 17.7183C54.9474 18.546 54.2712 19.2024 53.4172 19.6876C52.5631 20.1586 51.5953 20.394 50.5134 20.394ZM50.5134 17.4186C50.9832 17.4186 51.396 17.3187 51.7519 17.1189C52.1077 16.9049 52.3781 16.6123 52.5631 16.2413C52.7624 15.856 52.8621 15.4207 52.8621 14.9355C52.8621 14.4503 52.7624 14.0293 52.5631 13.6726C52.3639 13.3015 52.0863 13.0161 51.7304 12.8163C51.3888 12.6022 50.9832 12.4952 50.5134 12.4952C50.058 12.4952 49.6523 12.6022 49.2965 12.8163C48.9406 13.0161 48.663 13.3015 48.4638 13.6726C48.2645 14.0436 48.1649 14.4717 48.1649 14.9569C48.1649 15.4278 48.2645 15.856 48.4638 16.2413C48.663 16.6123 48.9406 16.9049 49.2965 17.1189C49.6523 17.3187 50.058 17.4186 50.5134 17.4186Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M58.78 24.2258C59.6483 24.6253 60.6518 24.8251 61.7905 24.8251C62.9008 24.8251 63.8901 24.604 64.7583 24.1616C65.6266 23.7192 66.3098 23.1056 66.808 22.3207C67.3061 21.5358 67.5556 20.6082 67.5556 19.5379V9.75537H64.3526V10.4543C64.1144 10.2533 63.8439 10.0846 63.5413 9.94801C62.9861 9.67687 62.3527 9.54126 61.6411 9.54126C60.6874 9.54126 59.8404 9.76961 59.1003 10.2262C58.36 10.6686 57.7765 11.2823 57.3495 12.0672C56.9224 12.8378 56.709 13.7083 56.709 14.6788C56.709 15.6349 56.9224 16.5054 57.3495 17.2903C57.7765 18.0751 58.36 18.6959 59.1003 19.1526C59.8404 19.6092 60.6874 19.8376 61.6411 19.8376C62.3385 19.8376 62.9719 19.702 63.5413 19.4309C63.8171 19.2995 64.0662 19.1448 64.2886 18.9665V19.6235C64.2886 20.3513 64.0537 20.915 63.584 21.3146C63.1285 21.7142 62.4951 21.9139 61.6838 21.9139C61.029 21.9139 60.4668 21.7998 59.997 21.5714C59.5416 21.3432 59.1287 21.0078 58.7586 20.5654L56.7517 22.5775C57.2498 23.2911 57.926 23.8405 58.78 24.2258ZM63.4345 16.6267C63.1071 16.8265 62.7157 16.9264 62.2602 16.9264C61.8047 16.9264 61.4062 16.8265 61.0646 16.6267C60.7371 16.4269 60.481 16.1557 60.2959 15.8132C60.1109 15.4565 60.0184 15.0783 60.0184 14.6788C60.0184 14.2506 60.1109 13.8653 60.2959 13.5228C60.481 13.1803 60.7443 12.9092 61.0859 12.7094C61.4275 12.5096 61.8189 12.4097 62.2602 12.4097C62.7157 12.4097 63.1071 12.5096 63.4345 12.7094C63.7761 12.9092 64.0323 13.1803 64.2032 13.5228C64.3882 13.8653 64.4807 14.2506 64.4807 14.6788C64.4807 15.1068 64.3882 15.4921 64.2032 15.8346C64.0323 16.1629 63.7761 16.4269 63.4345 16.6267Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M74.4304 20.394C73.3626 20.394 72.3945 20.1586 71.5266 19.6876C70.6722 19.2024 69.9963 18.546 69.4981 17.7183C68.9998 16.8906 68.7507 15.963 68.7507 14.9355C68.7507 13.908 68.9998 12.9876 69.4981 12.1741C69.9963 11.3607 70.6722 10.7185 71.5266 10.2476C72.3803 9.76237 73.3485 9.51978 74.4304 9.51978C75.5117 9.51978 76.4798 9.75528 77.3335 10.2262C78.1879 10.6971 78.8639 11.3465 79.3621 12.1741C79.8603 12.9876 80.1094 13.908 80.1094 14.9355C80.1094 15.963 79.8603 16.8906 79.3621 17.7183C78.8639 18.546 78.1879 19.2024 77.3335 19.6876C76.4798 20.1586 75.5117 20.394 74.4304 20.394ZM74.4304 17.4186C74.8997 17.4186 75.3124 17.3187 75.6686 17.1189C76.024 16.9049 76.2947 16.6123 76.4798 16.2413C76.6791 15.856 76.7788 15.4207 76.7788 14.9355C76.7788 14.4503 76.6791 14.0293 76.4798 13.6726C76.2806 13.3015 76.0032 13.0161 75.647 12.8163C75.3057 12.6022 74.8997 12.4952 74.4304 12.4952C73.9746 12.4952 73.5686 12.6022 73.2131 12.8163C72.857 13.0161 72.5796 13.3015 72.3803 13.6726C72.181 14.0436 72.0814 14.4717 72.0814 14.9569C72.0814 15.4278 72.181 15.856 72.3803 16.2413C72.5796 16.6123 72.857 16.9049 73.2131 17.1189C73.5686 17.3187 73.9746 17.4186 74.4304 17.4186Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M92.4268 20.3727C91.73 20.3727 91.089 20.2372 90.5053 19.966C90.1983 19.8233 89.9209 19.653 89.6731 19.4549V24.5469H86.4489V9.75537H89.7155V10.4734C89.9525 10.279 90.2158 10.111 90.5053 9.96941C91.089 9.68395 91.73 9.54126 92.4268 9.54126C93.4091 9.54126 94.2776 9.77677 95.0317 10.2477C95.8005 10.7186 96.3984 11.3608 96.8253 12.1742C97.2669 12.9877 97.4871 13.9153 97.4871 14.957C97.4871 15.9988 97.2669 16.9264 96.8253 17.7398C96.3984 18.5533 95.8005 19.1954 95.0317 19.6663C94.2776 20.1373 93.4091 20.3727 92.4268 20.3727ZM91.8296 17.4187C92.2989 17.4187 92.7049 17.3117 93.0462 17.0976C93.4024 16.8836 93.6798 16.591 93.879 16.22C94.0783 15.8489 94.178 15.4279 94.178 14.957C94.178 14.4718 94.0783 14.0437 93.879 13.6727C93.6798 13.3016 93.4024 13.0162 93.0462 12.8164C92.7049 12.6023 92.3063 12.4953 91.8505 12.4953C91.3954 12.4953 90.9894 12.6023 90.6339 12.8164C90.2919 13.0162 90.0219 13.3016 89.8226 13.6727C89.6233 14.0437 89.5237 14.4718 89.5237 14.957C89.5237 15.4279 89.6159 15.8489 89.8011 16.22C90.0003 16.591 90.2777 16.8836 90.6339 17.0976C90.9894 17.3117 91.3879 17.4187 91.8296 17.4187Z"
                  fill="white"
                />
                <path
                  d="M100.685 20.1802C101.282 20.3372 101.887 20.4157 102.499 20.4157C103.794 20.4157 104.819 20.116 105.574 19.5166C106.342 18.9173 106.726 18.111 106.726 17.0978C106.726 16.4413 106.606 15.9133 106.364 15.5137C106.122 15.0999 105.809 14.7716 105.424 14.529C105.04 14.2864 104.634 14.0937 104.207 13.951C103.78 13.8083 103.374 13.687 102.99 13.5871C102.606 13.4872 102.293 13.3731 102.051 13.2447C101.809 13.1162 101.688 12.945 101.688 12.7309C101.688 12.5311 101.781 12.3813 101.965 12.2814C102.15 12.1672 102.428 12.1102 102.798 12.1102C103.182 12.1102 103.573 12.1886 103.972 12.3456C104.385 12.5026 104.755 12.7738 105.082 13.1591L106.94 11.2753C106.471 10.6759 105.859 10.2264 105.104 9.92676C104.364 9.61282 103.553 9.45581 102.67 9.45581C101.83 9.45581 101.097 9.59851 100.471 9.8839C99.8443 10.1694 99.3602 10.5618 99.0188 11.0612C98.6775 11.5464 98.5065 12.1244 98.5065 12.7952C98.5065 13.4231 98.6277 13.944 98.8694 14.3578C99.1111 14.7573 99.4248 15.0713 99.8086 15.2996C100.193 15.528 100.599 15.7064 101.026 15.8348C101.453 15.9632 101.859 16.0845 102.243 16.1987C102.627 16.2986 102.941 16.4199 103.182 16.5626C103.439 16.6911 103.567 16.8837 103.567 17.1406C103.567 17.3404 103.46 17.4973 103.246 17.6115C103.047 17.7256 102.755 17.7827 102.371 17.7827C101.816 17.7827 101.303 17.6828 100.834 17.483C100.364 17.269 99.958 16.9765 99.6167 16.6054L97.7592 18.4891C98.1153 18.8744 98.5422 19.217 99.0404 19.5166C99.5527 19.802 100.101 20.0232 100.685 20.1802Z"
                  fill="white"
                />
                <path
                  d="M112.683 20.3941C111.73 20.3941 110.883 20.2015 110.143 19.8162C109.417 19.4166 108.848 18.8743 108.435 18.1893C108.022 17.4901 107.816 16.6909 107.816 15.7918V9.75537H111.082V15.749C111.082 16.1058 111.139 16.4126 111.253 16.6695C111.381 16.9264 111.566 17.1262 111.808 17.2689C112.051 17.4116 112.342 17.4829 112.683 17.4829C113.167 17.4829 113.552 17.3331 113.837 17.0334C114.121 16.7194 114.264 16.2913 114.264 15.749V9.75537H117.53V15.7704C117.53 16.6838 117.324 17.4901 116.911 18.1893C116.498 18.8743 115.929 19.4166 115.203 19.8162C114.477 20.2015 113.637 20.3941 112.683 20.3941Z"
                  fill="white"
                />
                <path
                  d="M122.421 9.75537H119.154V20.1587H122.421V14.0794C122.421 13.7226 122.492 13.4229 122.634 13.1803C122.791 12.9377 122.998 12.7522 123.254 12.6238C123.51 12.481 123.802 12.4097 124.129 12.4097C124.599 12.4097 124.99 12.5595 125.303 12.8592C125.631 13.1446 125.795 13.5514 125.795 14.0794V20.1587H129.061V14.0794C129.061 13.7226 129.133 13.4229 129.275 13.1803C129.432 12.9377 129.638 12.7522 129.894 12.6238C130.15 12.481 130.442 12.4097 130.769 12.4097C131.239 12.4097 131.63 12.5595 131.944 12.8592C132.271 13.1446 132.434 13.5514 132.434 14.0794V20.1587H135.702V13.7155C135.702 12.845 135.517 12.1029 135.146 11.4892C134.79 10.8613 134.299 10.3833 133.673 10.0551C133.061 9.71251 132.356 9.54126 131.559 9.54126C130.748 9.54126 130.015 9.71966 129.36 10.0765C128.935 10.3037 128.563 10.5971 128.245 10.9565C127.948 10.5806 127.587 10.273 127.161 10.0336C126.592 9.70542 125.944 9.54126 125.218 9.54126C124.449 9.54126 123.759 9.70542 123.147 10.0336C122.881 10.1702 122.639 10.3337 122.421 10.5243V9.75537Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_3_504">
                  <rect width="136" height="27" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <nav className="header__nav">
            <div className="header__link hoverUnderline" onClick={handleAboutLinkClick}>
              About Us
            </div>
            <div className="header__link hoverUnderline" onClick={handleDevelopmentLinkClick}>
              Development
            </div>
            <div className="header__link hoverUnderline" onClick={handleMarketingLinkClick}>
              Marketing
            </div>
            <div className="header__link hoverUnderline" onClick={handleConsultationsLinkClick}>
              Consultations
            </div>
            <div className="header__button buttonHover" onClick={handleContactLinkClick}>
              Contact us
            </div>
          </nav>
          <div
            className={classNames("header__menu", { menuIconTrasform: isMenuVisible })}
            onClick={() => setMenuVisibility(!isMenuVisible)}
          >
            <div className="header__menu__line"></div>
            <div className="header__menu__line"></div>
            <div className="header__menu__line"></div>
          </div>
        </div>
      </header>
      <div className={classNames("menu", { menuVisible: isMenuVisible })} ref={menuRef}>
        <div className="header__link" onClick={handleAboutLinkClick}>
          About Us
        </div>
        <div className="header__link" onClick={handleDevelopmentLinkClick}>
          Development
        </div>
        <div className="header__link" onClick={handleMarketingLinkClick}>
          Marketing
        </div>
        <div className="header__link" onClick={handleConsultationsLinkClick}>
          Consultations
        </div>
        <div className="header__button buttonHover" onClick={handleContactLinkClick}>
          Contact us
        </div>
      </div>
    </>
  );
});
