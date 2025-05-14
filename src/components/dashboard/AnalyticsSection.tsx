
import ChartSection from "@/components/ChartSection";
import StudentsListSection from "./StudentsListSection";
import DeadlinesSection from "./DeadlinesSection";

interface AnalyticsSectionProps {
  role: "teacher" | "student";
}

const AnalyticsSection = ({ role }: AnalyticsSectionProps) => {
  const isTeacher = role === "teacher";

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <ChartSection />
      <div className="space-y-4 lg:col-span-1">
        {isTeacher ? <StudentsListSection /> : <DeadlinesSection />}
      </div>
    </div>
  );
};

export default AnalyticsSection;
