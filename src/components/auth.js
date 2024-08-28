"use client";
import { useRouter } from "next/navigation";
import { useScuteClient } from "@scute/react";
import { Auth as ScuteAuth } from "@scute/ui-react";

export default function Auth() {
  const router = useRouter();
  const scuteClient = useScuteClient();

  return (
    <ScuteAuth
      scuteClient={scuteClient}
      policyURLs={{
        privacyPolicy: "https://example.com/privacy",
        termsOfService: "https://example.com/terms",
      }}
      // This callback will redirect authenticated users to their profile page
      onSignIn={() => {
        router.push("/profile");
      }}
      logoUrl="./favicon.ico"
    />
  );
}
