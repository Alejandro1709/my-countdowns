import { signIn } from "next-auth/react";
import { Button } from "../ui/button";

function LoginButton() {
  return (
    <Button variant="secondary" onClick={() => signIn("google")}>
      Login
    </Button>
  );
}

export default LoginButton;
