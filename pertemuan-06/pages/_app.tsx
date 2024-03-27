import "bootstrap/dist/css/bootstrap.min.css"; //install bootstrap
import "@/styles/globals.css";
import { useEffect } from "react";


function myApp({ Component, pageProps}) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  },[]);
  return <Component{...pageProps}/>;
}
export default myApp;