"use client";
import { useState } from "react";
import { createClientComponentClient } from "@scute/nextjs";
import { AuthContextProvider } from "@scute/react";

export default function AuthProvider({ children }) {
  const [scuteClient] = useState(() =>
    createClientComponentClient({
      appId: process.env.NEXT_PUBLIC_SCUTE_APP_ID,
      baseUrl: process.env.NEXT_PUBLIC_SCUTE_BASE_URL,
    })
  );

  return (
    <AuthContextProvider scuteClient={scuteClient}>
      {children}
    </AuthContextProvider>
  );
}
