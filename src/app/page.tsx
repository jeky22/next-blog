import Header from '@/components/Header';
import Skills from '@/components/Skills';
import Timeline from '@/components/Timeline';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 overflow-x-hidden">
      <Header />
      <Skills />
      <Timeline />
      <Projects />
      <Footer />
    </main>
  );
}
