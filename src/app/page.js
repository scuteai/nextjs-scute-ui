import Auth from "@/components/auth";

export default function Home() {
  return (
    <main
      style={{
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        padding: 32,
      }}
    >
      <Auth />
    </main>
  );
}
