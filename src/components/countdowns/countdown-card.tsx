import { useEffect, useState } from "react";
import { handleCountdown } from "@/lib/utils";
import { format } from "date-fns";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { type ICountdown } from "@/types/countdown";

type CountdownCardProps = {
  countdown: ICountdown;
};

function CountdownCard({ countdown }: CountdownCardProps) {
  const [countdownDate, setCountdownDate] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    months: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const { days, hours, minutes, seconds, months } = handleCountdown(
        countdown.targetDate,
      );

      setCountdownDate({
        days,
        hours,
        minutes,
        seconds,
        months,
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [countdown.targetDate]);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <article className="flex cursor-pointer flex-row overflow-hidden rounded-md border bg-white shadow-md transition-all hover:scale-95 dark:bg-zinc-900">
            <aside className="p-3">
              <h2 className="font-semibold">{countdown?.title}</h2>
              <p>
                {countdown.targetDate
                  ? format(countdown.targetDate, "PPPP")
                  : format(new Date(), "PPPP")}
              </p>
            </aside>
            <aside className="ml-auto flex w-[20%] flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-800">
              {countdownDate.days === 0 || countdownDate.months === 0 ? (
                <>
                  <h3 className="text-xl font-bold">{countdownDate.hours}</h3>
                  <p className="text-sm">hours left</p>
                </>
              ) : (
                <>
                  <h3 className="text-xl font-bold">{countdownDate.days}</h3>
                  <p className="text-sm">days left</p>
                </>
              )}
            </aside>
          </article>
        </TooltipTrigger>
        <TooltipContent>
          <p>
            Months: {countdownDate.months} | Days: {countdownDate.days} | Hours:{" "}
            {countdownDate.hours} | Minutes: {countdownDate.minutes} | Seconds:{" "}
            {countdownDate.seconds}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default CountdownCard;
