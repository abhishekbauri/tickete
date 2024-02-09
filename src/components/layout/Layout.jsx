import Footer from "./Footer";
import Header from "./Header";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{ minHeight: "75vh" }}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
