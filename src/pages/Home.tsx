import React, { lazy, Suspense } from "react";
import Layout from "../layout/layout";
import Footer from "../components/Footer";
import Divider from "../components/Divider";
import ProjectSlider from "../components/ProjectSlider";

const LazyTechStack = lazy(() => import("../components/TechStack"));
const LazyContact = lazy(() => import("../components/Contact"));
const LazyHeaderIntro = lazy(() => import("../components/HeaderIntro"));
const LazyRadialGradient = lazy(() => import("../components/RadialGradient"));

const Home: React.FC = () => {
  return (
    <>
      <Layout>
        <header className="h-screen">
          <Suspense fallback={<div>Loading...</div>}>
            <LazyHeaderIntro />
          </Suspense>
        </header>
        <main className="relative">
          <Suspense fallback={<div>Loading...</div>}>
            <Divider
              thickness="0.25rem"
              direction="outer-right-to-inner-left"
              color="lightblue"
              height="small"
              dividerStyle="solid"
            />

            <LazyTechStack />
            <Divider
              thickness="0.25rem"
              direction="inner-right-to-middle"
              color="lightblue"
              height="middle"
              dividerStyle="solid"
            />

            <ProjectSlider />
            <div className="relative -mb-24 pb-32 -mt-5">
              <Divider
                thickness="0.25rem"
                direction="middle"
                color="lightblue"
                height="middle"
                dividerStyle="solid"
              />
              <LazyRadialGradient
                opacity={"opacity-30"}
                scale="scale-y-100"
                position="-top-24"
              />

              <LazyContact />
            </div>
          </Suspense>
        </main>
        <Footer />
      </Layout>
    </>
  );
};

export default Home;
