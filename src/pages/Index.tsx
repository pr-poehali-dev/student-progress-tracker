
import Layout from "@/components/Layout";
import Dashboard from "@/components/Dashboard";
import { useState } from "react";

const Index = () => {
  const [role, setRole] = useState<"teacher" | "student">("teacher");

  return (
    <Layout>
      <Dashboard role={role} />
    </Layout>
  );
};

export default Index;
