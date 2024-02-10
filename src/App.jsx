import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Hero from "./sections/Hero/Hero.jsx";
import Testimonials from "./sections/Testimonials/Testimonials.jsx";
import Advantages from "./sections/Advantages/Advantages.jsx";
import VideoAnalize from "./sections/VideoAnalize/VideoAnalize.jsx";
import Demo from "./sections/Demo/Demo.jsx";
import Features from "./sections/Features/Features.jsx";
import FAQ from "./sections/FAQ/FAQ.jsx";

function App() {
  return (
    <>
      <Header />
      <main className="main">
          <Hero />
          <Testimonials />
          <Features />
          <VideoAnalize />
          <Demo />
          <Advantages />
          <FAQ />
      </main>
      <Footer />
    </>
  )
}

export default App
