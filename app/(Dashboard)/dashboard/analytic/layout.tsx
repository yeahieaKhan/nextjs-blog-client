import { Button } from "@/components/ui/button";
import Link from "next/link";

const AnalyticDashboard = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <div>
        <Button asChild>
          <Link href="/dashboard/analytic/weekly">Weekly</Link>
        </Button>
        <Button asChild>
          <Link href="/dashboard/analytic/monthly">Monthly</Link>
        </Button>
      </div>
      {children}
    </div>
  );
};

export default AnalyticDashboard;
