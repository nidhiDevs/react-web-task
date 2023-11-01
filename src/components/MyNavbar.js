import { useState } from "react";
// import logo from "../assets/img/headerLogo.png";
import { Link } from "react-scroll";
import logo from "../assets/logo.png"

export default function MyNavbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <div className="main-nav ">
      <nav className="w-full bg-[#e72e77] backdrop-blur-md shadow fixed z-10 lg:px-14 px-5 py-2 ">
        <div className="justify-between px-4  lg:items-center lg:flex lg:px-8">
          <div>
            <div className="flex items-center justify-between py-0 lg:py-0 lg:block">
              <div className="py-0">
                <a href="/">
                  <img className="lg:w-[50px] w-[40px]" src={logo} alt="logo" />
                </a>
              </div>

              <div className="lg:hidden">
                <button
                  className="p-2 rounded outline-none focus:border-white focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 sm:w-6 sm:h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 sm:w-6 sm:h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-4 md:pb-4 mt-8 lg:block lg:pb-0 lg:mt-0 group-li: ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="text-decoration-none nav-menu nav-item items-center text-white justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 cursor-pointer ">
                <li className="font-Roboto capitalize">
                  <Link
                    to="Home"
                    spy={true}
                    activeClass="active"
                    smooth={true}
                    offset={-100}
                    duration={800}
                    className="no-focuse"
                  >
                    Vendor
                  </Link>
                </li>
                <li className="font-Roboto capitalize">
                  <Link
                    to="Wall4all"
                    spy={true}
                    activeClass="active"
                    smooth={true}
                    offset={-50}
                    duration={800}
                  >
                    Photos
                  </Link>
                </li>
                <li className="font-Roboto capitalize ">
                  <Link
                    to="Speaker_Cleaner"
                    spy={true}
                    activeClass="active"
                    smooth={true}
                    offset={-90}
                    duration={800}
                  >
                    Blog
                  </Link>
                </li>
                <li className="font-Roboto capitalize">
                  <Link
                    to="Font_Fusion"
                    spy={true}
                    activeClass="active"
                    smooth={true}
                    offset={-50}
                    duration={800}
                  >
                    Shop
                  </Link>
                </li>
                <li className="font-Roboto capitalize">
                  <Link
                    to="Quotes_Of_The_Day"
                    spy={true}
                    activeClass="active"
                    smooth={true}
                    offset={-80}
                    duration={800}
                  >
                    E-Invite
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}