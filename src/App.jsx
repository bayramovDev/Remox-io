import Footer from "./sections/footer";
import Header from "./sections/header";
import Info from "./sections/info";
import Navbar from "./sections/navbar";
import Sponsor from "./sections/sponsor";
import Main from "./sections/main";
import Dinamic from "./sections/dinamic";

function App() {
  return (
    <div >
      <div className="bg-[url('../public/header_background.png')] bg-no-repeat bg-cover bg-right bg-local bg-start">
      <Navbar />
      <Header />
      <Main/>
      </div>
      <Dinamic/>
      <Sponsor />
      <Info />
      <Footer/>
    </div>
  );
}

export default App;
