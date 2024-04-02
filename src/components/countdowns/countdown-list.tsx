import { handleFetchCountdowns } from "@/services/countdowns";
import { useQuery } from "@tanstack/react-query";
import CountdownCard from "./countdown-card";

function CountdownList() {
  const countdownsQuery = useQuery({
    queryKey: ["countdowns"],
    queryFn: handleFetchCountdowns,
  });

  //const countdowns = useCountdownState((state) => state.countdowns);

  return (
    <section className="flex flex-col gap-5 lg:grid lg:grid-cols-3 lg:gap-8">
      {countdownsQuery.data?.map((countdown) => (
        <CountdownCard key={countdown.id} countdown={countdown} />
      ))}
    </section>
  );
}

export default CountdownList;
