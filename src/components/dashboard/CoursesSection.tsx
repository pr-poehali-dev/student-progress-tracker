
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import CourseCard from "@/components/CourseCard";

interface CoursesSectionProps {
  role: "teacher" | "student";
}

const CoursesSection = ({ role }: CoursesSectionProps) => {
  const isTeacher = role === "teacher";

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold tracking-tight">
          {isTeacher ? "Текущие курсы" : "Мои курсы"}
        </h2>
        <Button variant="outline" size="sm">
          {isTeacher ? "Управление курсами" : "Все курсы"}
          <Icon name="ChevronRight" className="ml-1 h-4 w-4" />
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <CourseCard
          name="Математический анализ"
          teacher="Сидоров А.И."
          hours={72}
          progress={65}
          studentsCount={25}
        />
        <CourseCard
          name="Информатика"
          teacher="Иванов П.В."
          hours={108}
          progress={80}
          studentsCount={30}
        />
        <CourseCard
          name="Физика"
          teacher="Петров С.К."
          hours={56}
          progress={45}
          studentsCount={28}
        />
        <CourseCard
          name="Философия"
          teacher="Сергеева О.Н."
          hours={36}
          progress={90}
          studentsCount={32}
        />
      </div>
    </div>
  );
};

export default CoursesSection;
