    import Image from 'next/image'
    import { AuroraText } from "@/components/ui/aurora-text";
    import { FaLaptopCode } from "react-icons/fa";



    export default function Hero() {
        return (
          <section className="container mx-auto px-6 py-12 w-full flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-3/4 space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
                Code<AuroraText className="text-7xl text-muted-foreground font-extrabold">Crux</AuroraText>
              </h1>
              <p className="text-3xl ">
                Explore algorithms with step-by-step visualizations, simplifying the
                learning process and making it more engaging for a better
                understanding.
              </p>
            </div>
            <div className="md:w-1/4">
              <Image
                src="/AlgorithmVisualizer/images/algorithm.png"
                alt="Hero image"
                width={300}
                height={200}
              />
            </div>
          </section>
        );
      }
      
