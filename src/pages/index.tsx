import CountdownList from "@/components/countdowns/countdown-list";
import Layout from "@/components/layout";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <Layout>
      {session?.user ? (
        <CountdownList />
      ) : (
        <Alert>
          <AlertTitle>Please Login</AlertTitle>
          <AlertDescription>
            In order to view, edit or create countdowns you need to be logged
            in.
          </AlertDescription>
        </Alert>
      )}
    </Layout>
  );
}
