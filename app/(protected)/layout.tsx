import Sidebar from "@/components/custom/sidebar";
import "@/app/globals.css";
import TopNav from "@/components/custom/navigation/nav";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-screen flex flex-col 2xl:container 2xl:mx-auto">
      <TopNav />
      <div className="flex flex-row  overflow-y-hidden h-screen">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}
