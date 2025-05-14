import { useState } from "react";
import StudentDashboard from "./dashboard/StudentDashboard";
import DashboardHeader from "./dashboard/DashboardHeader";
import StatsCardSection from "./dashboard/StatsCardSection";
import AnalyticsSection from "./dashboard/AnalyticsSection";
import CoursesSection from "./dashboard/CoursesSection";

interface DashboardProps {
  role: "teacher" | "student";
}

const Dashboard = ({ role }: DashboardProps) => {
  const isTeacher = role === "teacher";

  // Если это аккаунт студента, используем специализированный дашборд
  if (!isTeacher) {
    return <StudentDashboard studentName="Алексей" />;
  }

  // Дашборд для преподавателя
  return (
    <div className="space-y-6">
      <DashboardHeader userName="Иванов Петр" role="teacher" />

      <StatsCardSection role="teacher" />

      <AnalyticsSection role="teacher" />

      <CoursesSection role="teacher" />
    </div>
  );
};

export default Dashboard;
