import { handleFetchCountdowns } from "@/services/countdowns";
import { useCountdownState } from "@/stores/countdown-store";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";

function CountdownList() {
  const countdownsQuery = useQuery({
    queryKey: ["countdowns"],
    queryFn: handleFetchCountdowns,
  });

  const countdowns = useCountdownState((state) => state.countdowns);

  return (
    <section className="flex flex-col gap-5 lg:grid lg:grid-cols-3 lg:gap-8">
      {countdownsQuery.data?.map((countdown) => (
        <article
          className="flex flex-row overflow-hidden rounded-md border bg-white shadow-md dark:bg-zinc-900"
          key={countdown?.id}
        >
          <aside className="p-3">
            <h2 className="font-semibold">{countdown?.title}</h2>
            <p>
              {countdown?.targetDate
                ? format(countdown.targetDate, "PPPP")
                : format(new Date(), "PPPP")}
            </p>
          </aside>
          <aside className="ml-auto flex w-[20%] flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-800">
            <h3 className="text-xl font-bold">25</h3>
            <p className="text-sm">days left</p>
          </aside>
        </article>
      ))}
    </section>
  );
}

export default CountdownList;
