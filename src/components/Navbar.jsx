import { useContext, useEffect, useRef, useState } from "react"
import { Link, NavLink } from "react-router"
import styled from "styled-components"
import { ThemeContext } from "../context/ThemeContextWrapper";
import { useSelector } from "react-redux";
import Cart from "./Cart";

const Navbar = () => {

  const courses = useSelector(state => state.cart.value);
  const [cartOpen, toggleCart] = useState(false);

  const [isLoggedIn] = useState(false);
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      {cartOpen && <Cart toggleCart={toggleCart}/>}
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/assets/img/logo.png" className="h-12" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">mylms</span>
        </NavLink>
        <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink to="/" className={({ isActive }) => `block py-2 px-3 rounded-sm  md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 
                            ${isActive ? 'dark:text-blue-600 text-blue-600' : 'md:hover:text-blue-700 text-white'}
                            `} aria-current="page">Home</NavLink>
            </li>
            <li>
              <NavLink to={"/courses"} id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className={({ isActive }) => `flex items-center justify-between w-full py-2 px-3 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto  md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent ${isActive ? 'dark:text-blue-600 text-blue-600' : 'md:hover:text-blue-700 text-white'}`}>Courses<svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
              </svg>
              </NavLink>
              <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                  <li>
                    <NavLink to="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</NavLink>
                  </li>
                  <li aria-labelledby="dropdownNavbarLink">
                    <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dropdown<svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                    </svg></button>
                    <div id="doubleDropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
                      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                        <li>
                          <NavLink to="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Overview</NavLink>
                        </li>
                        <li>
                          <NavLink to="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">My downloads</NavLink>
                        </li>
                        <li>
                          <NavLink to="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Billing</NavLink>
                        </li>
                        <li>
                          <NavLink to="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Rewards</NavLink>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <NavLink to="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</NavLink>
                  </li>
                </ul>
                <div className="py-1">
                  <NavLink to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Practice</NavLink>
                </div>
              </div>
            </li>
            <li>
              <NavLink to="/resources" className={({ isActive }) => `block py-2 px-3 rounded-sm  md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 
                            ${isActive ? 'dark:text-blue-600 text-blue-600' : 'md:hover:text-blue-700 text-white'}
                            `}>Resources</NavLink>
            </li>
            <li>
              <NavLink to="/events" className={({ isActive }) => `block py-2 px-3 rounded-sm  md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 
                            ${isActive ? 'dark:text-blue-600 text-blue-600' : 'md:hover:text-blue-700 text-white'}
                            `}>Events</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => `block py-2 px-3 rounded-sm  md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 
                            ${isActive ? 'dark:text-blue-600 text-blue-600' : 'md:hover:text-blue-700 text-white'}
                            `}>Contact</NavLink>
            </li>
            <li>
              <span className="text-white" onClick={() => toggleCart(!cartOpen)}>Cart ({courses.length})</span>
            </li>
            <li>
              {isLoggedIn ? <LoggedInComponent /> :
                <div className="flex items-center">
                  <Link to="/login">
                    <button className="bg-[#283c7a] px-2.5 py-1 rounded text-white hover:bg-[#4d8f9e] cursor-pointer ">login</button>
                  </Link>
                  <Link to="/register">
                    <button className="bg-[orange] px-2.5 mr-2 py-1 rounded text-white hover:bg-[#85704a] cursor-pointer ml-2.5 ">register</button>
                  </Link>
                  <ThemeButton />
                </div>
              }
            </li>
          </ul>
        </div>
      </div>
    </nav >
  )
}

export default Navbar;

const UserMenu = () => {
  return (
    <div className="absolute top-7 left-[-120px] z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
      <div className="px-4 py-3">
        <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
        <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
      </div>
      <ul className="py-2" aria-labelledby="user-menu-button">
        <li>
          <NavLink to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</NavLink>
        </li>
        <li>
          <NavLink to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</NavLink>
        </li>
        <li>
          <NavLink to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</NavLink>
        </li>
      </ul>
    </div>
  )
};

const LoggedInComponent = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="relative flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" onClick={() => setToggle(!toggle)} className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span className="sr-only">Open user menu</span>
        <img className="w-8 h-8 rounded-full" src="/assets/img/user.png" alt="user photo" />
      </button>
      {
        toggle && <UserMenu />
      }
      <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>
    </div>
  )
}

const ThemeButton = () => {
  const { theme: pageTheme, setTheme } = useContext(ThemeContext);
  const inpRef = useRef(null);
  useEffect(() => {
    // console.log(pageTheme);
    // console.log(inpRef.current);
    if (pageTheme === "dark")
      inpRef.current.checked = true;
    else
      inpRef.current.checked = false;
  }, [pageTheme]);
  const changeTheme = () => {
    if (pageTheme === "dark") {
      setTheme("light");
    }
    else {
      setTheme("dark");
    }
  }
  return (
    <StyledWrapper>
      <label class="ui-switch">
        <input type="checkbox" name="theme"
          value={pageTheme}
          ref={inpRef}
          onChange={changeTheme} />
        <div class="slider">
          <div class="circle"></div>
        </div>
      </label>
    </StyledWrapper>
  );
}


const StyledWrapper = styled.div`
  /* switch settings 👇 */

  .ui-switch {
    /* switch */
    --switch-bg: rgb(135, 150, 165);
    --switch-width: 48px;
    --switch-height: 20px;
    /* circle */
    --circle-diameter: 32px;
    --circle-bg: rgb(0, 56, 146);
    --circle-inset: calc((var(--circle-diameter) - var(--switch-height)) / 2);
  }

  .ui-switch input {
    display: none;
  }

  .slider {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: var(--switch-width);
    height: var(--switch-height);
    background: var(--switch-bg);
    border-radius: 999px;
    position: relative;
    cursor: pointer;
  }

  .slider .circle {
    top: calc(var(--circle-inset) * -1);
    left: 0;
    width: var(--circle-diameter);
    height: var(--circle-diameter);
    position: absolute;
    background: var(--circle-bg);
    border-radius: inherit;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjAiIHdpZHRoPSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiCiAgICAgICAgZD0iTTkuMzA1IDEuNjY3VjMuNzVoMS4zODlWMS42NjdoLTEuMzl6bS00LjcwNyAxLjk1bC0uOTgyLjk4Mkw1LjA5IDYuMDcybC45ODItLjk4Mi0xLjQ3My0xLjQ3M3ptMTAuODAyIDBMMTMuOTI3IDUuMDlsLjk4Mi45ODIgMS40NzMtMS40NzMtLjk4Mi0uOTgyek0xMCA1LjEzOWE0Ljg3MiA0Ljg3MiAwIDAwLTQuODYyIDQuODZBNC44NzIgNC44NzIgMCAwMDEwIDE0Ljg2MiA0Ljg3MiA0Ljg3MiAwIDAwMTQuODYgMTAgNC44NzIgNC44NzIgMCAwMDEwIDUuMTM5em0wIDEuMzg5QTMuNDYyIDMuNDYyIDAgMDExMy40NzEgMTBhMy40NjIgMy40NjIgMCAwMS0zLjQ3MyAzLjQ3MkEzLjQ2MiAzLjQ2MiAwIDAxNi41MjcgMTAgMy40NjIgMy40NjIgMCAwMTEwIDYuNTI4ek0xLjY2NSA5LjMwNXYxLjM5aDIuMDgzdi0xLjM5SDEuNjY2em0xNC41ODMgMHYxLjM5aDIuMDg0di0xLjM5aC0yLjA4NHpNNS4wOSAxMy45MjhMMy42MTYgMTUuNGwuOTgyLjk4MiAxLjQ3My0xLjQ3My0uOTgyLS45ODJ6bTkuODIgMGwtLjk4Mi45ODIgMS40NzMgMS40NzMuOTgyLS45ODItMS40NzMtMS40NzN6TTkuMzA1IDE2LjI1djIuMDgzaDEuMzg5VjE2LjI1aC0xLjM5eiIgLz4KPC9zdmc+");
    background-repeat: no-repeat;
    background-position: center center;
    -webkit-transition: left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    -o-transition: left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transition: left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
    ;
  }

  .slider .circle::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.75);
    border-radius: inherit;
    -webkit-transition: all 500ms;
    -o-transition: all 500ms;
    transition: all 500ms;
    opacity: 0;
  }

  /* actions */

  .ui-switch input:checked+.slider .circle {
    left: calc(100% - var(--circle-diameter));
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjAiIHdpZHRoPSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiCiAgICAgICAgZD0iTTQuMiAyLjVsLS43IDEuOC0xLjguNyAxLjguNy43IDEuOC42LTEuOEw2LjcgNWwtMS45LS43LS42LTEuOHptMTUgOC4zYTYuNyA2LjcgMCAxMS02LjYtNi42IDUuOCA1LjggMCAwMDYuNiA2LjZ6IiAvPgo8L3N2Zz4=");
  }

  .ui-switch input:active+.slider .circle::before {
    -webkit-transition: 0s;
    -o-transition: 0s;
    transition: 0s;
    opacity: 1;
    width: 0;
    height: 0;
  }`;
