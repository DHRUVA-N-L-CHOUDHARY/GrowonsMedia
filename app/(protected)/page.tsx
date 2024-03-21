import { auth, signOut } from "@/auth";
import TopBar from "./_components/Topbar";
import NewsNotices from "./_components/News-notices";
import BalanceCard from "./_components/BalanceCard";
import BankDetails from "./_components/bank-details";
export default async function Home() {
  const session = await auth();

  return (
    <section>
      <div className="hidden md:block">
        <TopBar title={"Dashboard"} />
      </div>
      <NewsNotices />
      <div>
        <p className="border-l-4 rounded-sm border-black  mt-4 mx-2">
          <span className="ml-1 text-lg font-semibold">Overview</span>
        </p>
        <div className="flex flex-wrap">
          <BalanceCard />
          {session?.user.role === "ADMIN" && <BankDetails />}
        </div>
      </div>
    </section>
  );
}
