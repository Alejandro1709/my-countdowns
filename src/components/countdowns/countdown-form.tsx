import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import DatePicker from "../layout/date-picker";
import { handleCreateCountdown } from "@/services/countdowns";
import { useCountdownState } from "@/stores/countdown-store";
import { useMutation } from "@tanstack/react-query";

const formSchema = z.object({
  title: z.string().min(2).max(100),
  targetDate: z.date().min(new Date()),
});

function CountdownForm() {
  const countdowns = useCountdownState((state) => state.countdowns);
  const setCountdowns = useCountdownState((state) => state.setCountdowns);

  const { mutate } = useMutation({
    mutationFn: handleCreateCountdown,
    onSuccess: (data) => {
      console.log("yaaaay", data);
      setCountdowns([...countdowns, data]);
    },
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      targetDate: new Date(),
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const cd = await handleCreateCountdown(values);
    mutate(cd);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Buy some food" {...field} />
              </FormControl>
              <FormDescription>
                This is the title of your countdown
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="targetDate"
          render={() => (
            <FormItem className="flex flex-col gap-2">
              <FormLabel>Target Date</FormLabel>
              <FormControl>
                <DatePicker />
              </FormControl>
              <FormDescription>
                This is the Target date of your countdown
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

export default CountdownForm;
