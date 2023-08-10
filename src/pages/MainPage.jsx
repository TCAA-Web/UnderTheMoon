import { ContentSection } from "../components/ContentSection";
import { ContentWrapper } from "../components/ContentWrapper";
import { Header } from "../components/Header";
import { Navigation } from "../components/Navigation";
import area_left from "../assets/frame_l.png";
import area_right from "../assets/frame_r.png";
import { SeperatorWithText } from "../components/SeperatorWithText";
import { galleryImages } from "../helpers/galleryImageArray";
import { Gallery } from "../components/Gallery";
import { Footer } from "../components/Footer";

export const MainPage = () => {
  return (
    <>
      <Navigation />
      <Header />

      <main>
      <ContentSection title={"UNDER THE MOON - NEW STYLE"} isDark={false} />
      
      <ContentWrapper>
        <ContentSection title={"ONE 2 GO"} isDark={true} bgImage={area_left} />
        <ContentSection
          title={"Loyalty Free"}
          isDark={true}
          bgImage={area_right}
        />
      </ContentWrapper>
      <SeperatorWithText text={"FOLLOW US ON INSTAGRAM"} />
      <Gallery imageArray={galleryImages} />
    </main>
    <Footer/>
    </>
  );
};
