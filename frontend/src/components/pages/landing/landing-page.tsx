import reactSvg from "@/assets/svg/react.svg";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import TechsList from "./techs-list";
import FetchedData from "./fetched-data";

const LandingPage = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState("//fetch data to show..." as any);
  const handleFetchData = async () => {
    setData({
      message: "Hello from the server!",
      date: new Date().toLocaleDateString(),
    });
  };
  return (
    <div className="flex flex-col gap-32 items-center justify-between m-auto">
      <div className="flex felx gap-32">
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-4">
            <img
              onClick={() => setCount((prev) => prev + 1)}
              src={reactSvg}
              alt=""
              className={cn(
                "w-24 h-24 transition-all cursor-pointer hover:scale-110"
              )}
            />
            <img
              onClick={() => setCount((prev) => prev - 1)}
              src="https://www.svgrepo.com/show/374167/vite.svg"
              alt=""
              className={cn(
                "w-24 h-24 transition-all cursor-pointer hover:scale-110"
              )}
            />
          </div>
          <TechsList />
        </div>
        <FetchedData data={data} />
      </div>

      <div className="flex gap-4">
        <Button
          variant="secondary"
          className="tabular-nums"
          onClick={() => setCount((prev) => prev + 1)}
        >
          Count {count}
        </Button>
        <Button onClick={handleFetchData}>Fetch Data</Button>
      </div>
    </div>
  );
};
export default LandingPage;
