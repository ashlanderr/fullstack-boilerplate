import { authClient } from "../../auth.ts";

export function SignIn() {
  const signInGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  const signInAnonymously = async () => {
    await authClient.signIn.anonymous();
    window.open("/", "_self");
  };

  return (
    <div className="mx-auto mt-12 flex w-max flex-col gap-4">
      <div className="mb-8 text-center text-4xl">FullStack Boilerplate</div>
      <button
        className="cursor-pointer rounded bg-gray-200 p-2"
        onClick={signInGoogle}
      >
        Sign In With Google
      </button>
      <button
        className="cursor-pointer rounded bg-gray-200 p-2"
        onClick={signInAnonymously}
      >
        Sign In Anonymously
      </button>
    </div>
  );
}
