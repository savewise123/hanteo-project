import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import ContentList from "./components/ContentList";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="w-full max-w-md mx-auto bg-white">
      <Navbar />
      <Banner />
      <ContentList />
      <Footer />
    </div>
  );
}
