import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Footer />
      <div>{children}</div>
      <Navbar />
    </>
  );
};

export default Layout;
