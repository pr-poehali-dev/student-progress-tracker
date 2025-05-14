import AnalyticsSection from "./dashboard/AnalyticsSection";
import CoursesSection from "./dashboard/CoursesSection";
import DashboardHeader from "./dashboard/DashboardHeader";
import StatsCardSection from "./dashboard/StatsCardSection";

interface DashboardProps {
  role: "teacher" | "student";
}

const Dashboard = ({ role }: DashboardProps) => {
  const isTeacher = role === "teacher";
  const userName = isTeacher ? "Иванов Петр" : "Алексей";

  return (
    <div className="space-y-6">
      <DashboardHeader userName={userName} role={role} />
      <StatsCardSection role={role} />
      <AnalyticsSection role={role} />
      <CoursesSection role={role} />
    </div>
  );
};

export default Dashboard;
