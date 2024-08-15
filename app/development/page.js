import DevelopmentComponent from "@/components/development/DevelopmentComponent";
import DevelopmentHero from "@/components/development/DevelopmentHero";
import DevelopmentText from "@/components/development/DevelopmentText";
import PerformanceComponent from "@/components/development/PerformanceComponent";


const Development = () => {
  return (
    <div>
      <DevelopmentHero />
      <DevelopmentText />
      <DevelopmentComponent />
      <PerformanceComponent />
    </div>
  );
};

export default Development;