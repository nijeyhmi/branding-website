// src/pages/index.tsx
import Header from "@/components/Header";
import Main from "@/sections/Main";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Guide from "@/sections/Guide";
import Shop from "@/sections/Shop";
import Video from "@/sections/Video";

export default function Home() {
  return (
    <div className="m-auto">
      <Header />
      <main>
        <Main />
        <About />
        <Video />
        <Shop />
        <Guide />
        <Contact />
      </main>
    </div>
  );
}
