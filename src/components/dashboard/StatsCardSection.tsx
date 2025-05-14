
import StatsCard from "@/components/StatsCard";

interface StatsCardSectionProps {
  role: "teacher" | "student";
}

const StatsCardSection = ({ role }: StatsCardSectionProps) => {
  const isTeacher = role === "teacher";

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {isTeacher ? (
        <>
          <StatsCard
            title="Всего студентов"
            value="128"
            description="7 новых на этой неделе"
            icon="Users"
            trend={{ value: 12, positive: true }}
          />
          <StatsCard
            title="Активных курсов"
            value="12"
            description="3 курса завершаются скоро"
            icon="BookOpen"
          />
          <StatsCard
            title="Средний балл"
            value="4.2"
            description="По всем курсам"
            icon="BarChart"
            trend={{ value: 3, positive: true }}
          />
          <StatsCard
            title="Отстающих студентов"
            value="8"
            description="Требуется внимание"
            icon="AlertCircle"
            trend={{ value: 2, positive: false }}
          />
        </>
      ) : (
        <>
          <StatsCard
            title="Мои курсы"
            value="5"
            description="2 завершаются скоро"
            icon="BookOpen"
          />
          <StatsCard
            title="Текущий средний балл"
            value="4.5"
            description="За все время"
            icon="BarChart"
            trend={{ value: 8, positive: true }}
          />
          <StatsCard
            title="Пропущенные занятия"
            value="3"
            description="В этом семестре"
            icon="Calendar"
          />
          <StatsCard
            title="Ближайшие дедлайны"
            value="2"
            description="На этой неделе"
            icon="Clock"
            trend={{ value: 1, positive: false }}
          />
        </>
      )}
    </div>
  );
};

export default StatsCardSection;
