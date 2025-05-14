import { useState } from "react";
import StudentDashboard from "./dashboard/StudentDashboard";
import TeacherDashboard from "./dashboard/TeacherDashboard";

interface DashboardProps {
  role: "teacher" | "student";
}

const Dashboard = ({ role }: DashboardProps) => {
  const isTeacher = role === "teacher";

  // В реальном приложении эти данные будут приходить с сервера
  const teacherName = "Иванов Петр";
  const studentName = "Смирнов Алексей";

  return (
    <>
      {isTeacher ? (
        <TeacherDashboard teacherName={teacherName} />
      ) : (
        <StudentDashboard studentName={studentName} />
      )}
    </>
  );
};

export default Dashboard;
