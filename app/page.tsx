import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Clients from './components/Clients';
import AccredianEdge from './components/AccredianEdge';
import CourseSegments from './components/CourseSegments';
import CATFramework from './components/CATFramework';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Clients />
        <AccredianEdge />
        <CourseSegments />
        <CATFramework />
        <HowItWorks />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
