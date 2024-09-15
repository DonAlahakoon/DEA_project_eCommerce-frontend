/**
 * config.jsx file,
 * which uses to do the basic initializations in the react project.
 * Owner: Demesh Fernando
 * Created Date: 27 July 2024
 * Last updated Date: 3 September 2024
 * @returns Every single import will returned
 */

//fontawesome initialization
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faX,
  faGlobe,
  faAngleLeft,
  faCaretRight,
  faStar as STAR_FILLED,
  faBars,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as STAR_EMPTY } from "@fortawesome/free-regular-svg-icons";

//import images
import CART_ICON from "../assets/icons/cart-icon.png";
import SEARCH_ICON from "../assets/icons/search-icon.png";

import _1 from "../assets/react.svg";

//components importing
import Layout from "../components/Layout.jsx";
import Index from "../components/index.jsx";
import CreateAccount from "../components/accountCreation.jsx";
import SignIn from "../components/signIn.jsx";

//sub category
import Body from "../components/sub/body.jsx";
import Header from "../components/sub/header.jsx";
import Img from "../components/sub/img.jsx";
import Card from "../components/sub/card.jsx";
import { NavBar, AccountCreationNavBar } from "../components/sub/navbar.jsx";
import Footer from "../components/sub/footer.jsx";
import SideBar from "../components/sub/sideBar.jsx";
import {
  SideBarSubMainSection,
  SingleItemBuildUp,
} from "../components/sub/sideBarSubMain.jsx";
import Stars from "../components/sub/star.jsx";
import {
  TextBox,
  Button,
  TextBoxWithoutLabel,
} from "../components/sub/inputs.jsx";

//Repo importing
import accountDetailsRepo from "../repo/accountDetailsRepo.jsx";
import cardRepo from "../repo/cardRepo.jsx";
import sideBarItemRepo from "../repo/sideBarItemRepo.jsx";
import credentialsRepo from "../repo/credentialsRepo.jsx";

export {
  //icon export
  FontAwesomeIcon,
  faAngleRight,
  CART_ICON,
  SEARCH_ICON,
  faX,
  faGlobe,
  faAngleLeft,
  faCaretRight,
  faBars,
  //image export
  _1,
  STAR_FILLED,
  STAR_EMPTY,
  faUser,
  //components export
  Layout,
  Index,
  CreateAccount,
  SignIn,
  //sub category Components
  Card,
  NavBar,
  Footer,
  AccountCreationNavBar,
  SideBar,
  Body,
  Header,
  Img,
  SideBarSubMainSection,
  SingleItemBuildUp,
  Stars,
  TextBox,
  Button,
  TextBoxWithoutLabel,
  //repo exporting
  accountDetailsRepo,
  cardRepo,
  sideBarItemRepo,
  credentialsRepo,
};
