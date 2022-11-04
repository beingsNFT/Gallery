
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";

import "@fontsource/poppins";
import { const_token } from "../utils/contants";
function MyApp({ Component, pageProps }) {
 

  return (
    <>
    <Component {...pageProps} />

        <ToastContainer
          position="top-center"
          autoClose={5000}
          bodyClassName="bg-white text-primary font-bold "
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </>
  );
}

export default MyApp;
