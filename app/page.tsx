import { appRouter } from "@/server/routers/app";

export default async function Home() {
  const caller = appRouter.createCaller({});

  const data = await caller.hello({ text: "Lenghak" });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      {data.greeting}
    </main>
  );
}
