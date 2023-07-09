import Content from "./Content";
import Header from "./Header/Header";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <section>
        <Content/>
      </section>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
