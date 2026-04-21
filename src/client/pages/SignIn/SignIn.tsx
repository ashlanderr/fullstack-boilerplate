import { authClient } from "../../auth.ts";

export function SignIn() {
  const signIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div>
      <button
        className="cursor-pointer rounded bg-gray-200 p-2"
        onClick={signIn}
      >
        Sign In
      </button>
    </div>
  );
}
