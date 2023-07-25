import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Footer />
      <div>{children}</div>
    </>
  );
};

export default Layout;
