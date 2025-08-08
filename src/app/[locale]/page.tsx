
import AboutPage from "@/components/AboutPage/AboutPage";
import Header from "@/components/Header/Header";
import InfoSection from "@/components/InfoSection/InfoSection";
import React, { Suspense } from "react";

// const PreviewPage = React.lazy(
//   () => import("@/components/organisms/PreviewPage/PreviewPage")
// );

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>

        {/* <PreviewPage /> */}
         <AboutPage /> 
      </div>
    </Suspense>
  );
}

