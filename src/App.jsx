import About from "./components/AboutMe/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience"
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Project from "./components/Project/Project"

export default function App() {
  return (
    <div>
      <Header/>
      <Nav />
      <About />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
