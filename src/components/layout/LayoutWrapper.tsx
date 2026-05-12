import Footer from "../reusable/Footer";
import Header from "../reusable/Header";
import Navbar from "../reusable/Navbar";


export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
