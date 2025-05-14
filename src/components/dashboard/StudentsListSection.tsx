import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import StudentCard from "@/components/StudentCard";
import { Card } from "@/components/ui/card";

const StudentsListSection = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold tracking-tight">
          Отстающие студенты
        </h2>
        <Button variant="outline" size="sm">
          Все студенты
          <Icon name="ChevronRight" className="ml-1 h-4 w-4" />
        </Button>
      </div>

      <div className="space-y-3">
        <StudentCard
          name="Смирнов Алексей"
          group="ИТ-101"
          averageScore={2.4}
          coursesCount={5}
        />
        <StudentCard
          name="Петрова Анна"
          group="ИТ-102"
          averageScore={3.2}
          coursesCount={6}
        />
        <StudentCard
          name="Козлов Дмитрий"
          group="ИТ-101"
          averageScore={2.8}
          coursesCount={5}
        />
      </div>
    </div>
  );
};

export default StudentsListSection;
