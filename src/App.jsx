import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Header from "./sections/Header/Header";
import Presentacion from "./sections/Presentacion/Presentacion";
import Videos from "./sections/Videos/Videos";
import Resena from "./sections/Resena/Resena";
import Galeria from "./sections/Galeria/Galeria";
import Trayectoria from "./sections/Trayectoria/Trayectoria";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";

function App() {
  return (
    <>
      <Navbar />
      <main >
        <WhatsAppButton />
        <Header />
        <Presentacion />
        <Videos />
        <Resena />
        <Galeria />
        <Trayectoria />
      </main>
      <Footer />
    </>
  );
}

export default App;