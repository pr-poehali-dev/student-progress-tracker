
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import StatsCard from "./StatsCard";
import ChartSection from "./ChartSection";
import StudentCard from "./StudentCard";
import CourseCard from "./CourseCard";
import SearchBar from "./SearchBar";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";

interface DashboardProps {
  role: "teacher" | "student";
}

const Dashboard = ({ role }: DashboardProps) => {
  const isTeacher = role === "teacher";
  
  const greeting = `Добрый день, ${isTeacher ? "Иванов Петр" : "Алексей"}!`;
  const date = new Date().toLocaleDateString("ru-RU", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col-reverse gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{greeting}</h1>
          <p className="text-muted-foreground">
            {date.charAt(0).toUpperCase() + date.slice(1)}
          </p>
        </div>
        
        <SearchBar 
          types={
            isTeacher 
              ? [
                  { value: "student", label: "Студенты" },
                  { value: "course", label: "Курсы" },
                ]
              : [
                  { value: "course", label: "Курсы" },
                ]
          }
          placeholder={isTeacher ? "Поиск студентов или курсов..." : "Поиск курсов..."} 
        />
      </div>

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

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ChartSection />
        
        <div className="space-y-4 lg:col-span-1">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold tracking-tight">
              {isTeacher ? "Отстающие студенты" : "Ближайшие дедлайны"}
            </h2>
            <Button variant="outline" size="sm">
              {isTeacher ? "Все студенты" : "Все дедлайны"}
              <Icon name="ChevronRight" className="ml-1 h-4 w-4" />
            </Button>
          </div>

          {isTeacher ? (
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
          ) : (
            <div className="rounded-lg border p-4 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Лабораторная работа №3</span>
                  <span className="text-red-500 text-sm">Осталось 2 дня</span>
                </div>
                <p className="text-sm text-muted-foreground">Мат. анализ</p>
              </div>
              <Separator />
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Курсовой проект</span>
                  <span className="text-amber-500 text-sm">Осталось 5 дней</span>
                </div>
                <p className="text-sm text-muted-foreground">Информатика</p>
              </div>
              <Separator />
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Контрольная работа</span>
                  <span className="text-amber-500 text-sm">Осталось 7 дней</span>
                </div>
                <p className="text-sm text-muted-foreground">Физика</p>
              </div>
            </div>
          )}
        </div>
      </div>

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
    </div>
  );
};

export default Dashboard;
