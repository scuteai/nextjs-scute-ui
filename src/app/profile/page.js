"use client";
import { useScuteClient } from "@scute/react";
import { Profile as ScuteProfile } from "@scute/ui-react";

export default function Profile() {
  const scuteClient = useScuteClient();

  return <ScuteProfile scuteClient={scuteClient} />;
}
