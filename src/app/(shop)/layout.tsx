import { Sidebar, TopMenu } from "@/components";

export default function ShopLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      <TopMenu />

      <Sidebar />

      <div className="px-1 sm:px-5">
        { children }
      </div>
    </main>
  );
}