import { Carousel } from "components/carousel";
import { ThreeItemGrid } from "components/grid/three-items";
import { BlissHero } from "components/layout/bliss-hero";
import Footer from "components/layout/footer";

export const metadata = {
  description:
    "High-performance ecommerce store built with Next.js, Vercel, and Shopify.",
  openGraph: {
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <BlissHero />
      <div id="main-catalog">
        <ThreeItemGrid />
      </div>
      <Carousel />
      <Footer />
    </>
  );
}
