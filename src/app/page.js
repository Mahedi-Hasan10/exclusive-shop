import BestSellingProduct from "./components/bestSellingProduct/bestSellingProduct";
import HeroCategory from "./components/category/heroCategory";
import HeroAside from "./components/hero/heroAside";
import HeroCarosul from "./components/hero/heroCarosul";
import HeroTodays from "./components/hero/heroTodays";

export default function Home() {
  return (
    <main className="min-h-[100vh] flex flex-col gap-[100px]">
      {/* hero category and banner */}
      <section className="flex gap-[61px]">
        {/* aside category */}
        <HeroAside />
        {/* banner with carousel */}
        <div className="w-[892px] h-[344px] pt-[40px]">
          <HeroCarosul />
        </div>
      </section>
      {/* product */}
      <section>
        <HeroTodays />
      </section>
      <section>
        <HeroCategory />
      </section>
      <section>
        <BestSellingProduct/>
      </section>
    </main>
  );
}
