import Layout from "@/components/Layout";
import Dashboard from "@/components/Dashboard";
import StudentDashboard from "@/components/dashboard/StudentDashboard";
import { useState } from "react";

const Index = () => {
  const [role, setRole] = useState<"teacher" | "student">("teacher");

  return (
    <Layout>
      {role === "teacher" ? (
        <Dashboard role={role} />
      ) : (
        <StudentDashboard studentName="Смирнов Алексей" />
      )}
    </Layout>
  );
};

export default Index;
