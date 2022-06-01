import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Initiatives from "../components/Initiatives/Initiatives";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Abdalrahman Abu Nimer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Abdalrahman Abu Nimer's personal website."
        />
        <meta property="og:title" content="Abdalrahman Abu Nimer" />
        <meta
          name="og:description"
          content="Abdalrahman Abu Nimer's personal website."
        />
        <meta property="og:site_name" content="Abdalrahman Abu Nimer" />
        <meta
          property="og:image"
          content="https://ahmadherzallah.github.io/aherzallah.tech/images/banner.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <Layout>
        <Section grid>
          <Hero />
          <BgAnimation />
        </Section>
        <Projects />
        <Initiatives />
        <Technologies />
        <Timeline />
        <Acomplishments />
      </Layout>
    </>
  );
};

export default Home;
