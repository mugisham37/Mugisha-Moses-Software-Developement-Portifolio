import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { Spotlight } from "./ui/Spotlight";

const Grid = () => {
  return (
    <section id="about" className="relative">
      {/* Background transition with Spotlight components */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Spotlight
          className="-top-40 left-20 md:left-40 h-[120vh]"
          fill="purple"
          fillOpacity="0.25"
          blurAmount={120}
        />
        
        <Spotlight
          className="right-20 top-60 h-[80vh] w-[40vw]"
          fill="blue"
          fillOpacity="0.2"
          blurAmount={100}
        />
      </div>
      
      {/* Grid content with proper container constraints */}
      <div className="relative z-10 mx-auto max-w-[89vw] md:max-w-4xl lg:max-w-[80vw] px-4 md:px-8">
        <BentoGrid className="w-full py-20 md:py-28">
          {gridItems.map((item, i) => (
            <BentoGridItem
              id={item.id}
              key={i}
              title={item.title}
              description={item.description}
              // remove icon prop
              // remove original classname condition
              className={item.className}
              img={item.img}
              imgClassName={item.imgClassName}
              titleClassName={`${item.titleClassName} font-instrument`}
              spareImg={item.spareImg}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default Grid;
