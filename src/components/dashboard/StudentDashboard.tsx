import DashboardHeader from "./DashboardHeader";
import StatsCardSection from "./StatsCardSection";
import CourseProgressSection from "./CourseProgressSection";
import DetailedDeadlinesSection from "./DetailedDeadlinesSection";
import AttendanceSection from "./AttendanceSection";
import RatingSection from "./RatingSection";
import CoursesSection from "./CoursesSection";

interface StudentDashboardProps {
  studentName: string;
}

const StudentDashboard = ({ studentName }: StudentDashboardProps) => {
  return (
    <div className="space-y-6">
      <DashboardHeader userName={studentName} role="student" />

      <StatsCardSection role="student" />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <CourseProgressSection />
        <DetailedDeadlinesSection />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <AttendanceSection />
        <RatingSection />
      </div>

      <CoursesSection role="student" />
    </div>
  );
};

export default StudentDashboard;
