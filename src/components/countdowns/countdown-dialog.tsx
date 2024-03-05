import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import CountdownForm from "./countdown-form";

function CountdownDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <PlusIcon />
          <span className="sr-only">Add</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a new countdown</DialogTitle>
        </DialogHeader>
        <CountdownForm />
      </DialogContent>
    </Dialog>
  );
}

export default CountdownDialog;
