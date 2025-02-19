import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Features from '@/components/Features';
import Steps from '@/components/Steps';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* Services Section */}
      <section id="services">
        <Services />
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-50 py-20">
        <Features />
      </section>

      {/* Process Steps Section */}
      <section id="steps" className="py-20">
        <Steps />
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white">
        <Footer />
      </footer>
    </main>
  );
}