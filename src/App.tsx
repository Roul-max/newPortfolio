/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Testimonials } from "./components/sections/Testimonials";
import { Experience } from "./components/sections/Experience";
import { Skills } from "./components/sections/Skills";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/Footer";
import { AIAssistant } from "./components/AIAssistant";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Testimonials />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
}
