import reactSvg from "@/assets/svg/react.svg";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import TechsList from "./techs-list";
import FetchedData from "./fetched-data";
import { fetchHello } from "@/helpers/hello.service";
import Loading from "react-loading";
import { useGlobalContext } from "@/hooks/use-global-context";

const LandingPage = () => {
  const { count, setCount } = useGlobalContext();
  const [data, setData] = useState("//fetch data to show..." as any);
  const [isFetching, setIsFetching] = useState(false);

  const handleFetchData = async () => {
    setIsFetching(true);
    const res = await fetchHello();
    setTimeout(() => {
      setData(res);
      setIsFetching(false);
    }, 2000);
  };
  return (
    <div className="flex flex-col gap-32 items-center justify-between m-auto">
      <div className="flex felx gap-32">
        <div className="flex flex-col items-center justify-center gap-4">
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
        <Button
          className="felx gap-4 items-center justify-center"
          onClick={handleFetchData}
        >
          {isFetching ? (
            <>
              <span>Fetching</span>
              <Loading
                type="spinningBubbles"
                color="#ffffff"
                height={20}
                width={20}
              />
            </>
          ) : (
            <span>Fetch Data</span>
          )}
        </Button>
      </div>
    </div>
  );
};
export default LandingPage;
