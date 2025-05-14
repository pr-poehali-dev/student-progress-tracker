
import DashboardHeader from "./DashboardHeader";
import StatsCardSection from "./StatsCardSection";
import AnalyticsSection from "./AnalyticsSection";
import CoursesSection from "./CoursesSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";
import StudentCard from "@/components/StudentCard";
import { useEffect, useState } from "react";

interface TeacherDashboardProps {
  teacherName: string;
}

interface TeacherStats {
  totalStudents: number;
  totalCourses: number;
  averageScore: number;
  strugglingStudents: number;
  newStudents: number;
  coursesEndingSoon: number;
  averageScoreTrend: number;
  strugglingStudentsTrend: number;
}

interface TeacherCourse {
  id: string;
  name: string;
  studentsCount: number;
  progress: number;
  hours: number;
}

const TeacherDashboard = ({ teacherName }: TeacherDashboardProps) => {
  const [stats, setStats] = useState<TeacherStats>({
    totalStudents: 128,
    totalCourses: 12,
    averageScore: 4.2,
    strugglingStudents: 8,
    newStudents: 7,
    coursesEndingSoon: 3,
    averageScoreTrend: 3,
    strugglingStudentsTrend: 2
  });

  const [myCourses, setMyCourses] = useState<TeacherCourse[]>([
    { id: "1", name: "Математический анализ", studentsCount: 25, progress: 65, hours: 72 },
    { id: "2", name: "Информатика", studentsCount: 30, progress: 80, hours: 108 },
    { id: "3", name: "Физика", studentsCount: 28, progress: 45, hours: 56 },
    { id: "4", name: "Философия", studentsCount: 32, progress: 90, hours: 36 }
  ]);

  useEffect(() => {
    // В будущем здесь можно добавить загрузку данных с сервера
    // fetchTeacherData(teacherId).then(data => {
    //   setStats(data.stats);
    //   setMyCourses(data.courses);
    // });
  }, []);

  return (
    <div className="space-y-6">
      <DashboardHeader 
        userName={teacherName} 
        role="teacher" 
      />
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <TeacherStatCard 
          title="Всего студентов" 
          value={stats.totalStudents} 
          description={`${stats.newStudents} новых на этой неделе`}
          icon="Users"
          trend={{ value: stats.averageScoreTrend, positive: true }}
        />
        <TeacherStatCard 
          title="Активных курсов" 
          value={stats.totalCourses} 
          description={`${stats.coursesEndingSoon} курса завершаются скоро`}
          icon="BookOpen"
        />
        <TeacherStatCard 
          title="Средний балл" 
          value={stats.averageScore.toFixed(1)} 
          description="По всем курсам"
          icon="BarChart"
          trend={{ value: stats.averageScoreTrend, positive: true }}
        />
        <TeacherStatCard 
          title="Отстающих студентов" 
          value={stats.strugglingStudents} 
          description="Требуется внимание"
          icon="AlertCircle"
          trend={{ value: stats.strugglingStudentsTrend, positive: false }}
        />
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <AnalyticsSection role="teacher" />
      </div>
      
      <MyCoursesSection courses={myCourses} />
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-xl">Активность студентов</CardTitle>
            <Button variant="outline" size="sm">
              Подробная статистика
              <Icon name="ChevronRight" className="ml-1 h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <ActivityItem
                name="Петрова Анна"
                action="Сдала работу"
                course="Информатика"
                time="15 минут назад"
                status="success"
              />
              <Separator />
              <ActivityItem
                name="Смирнов Алексей"
                action="Пропустил занятие"
                course="Мат. анализ"
                time="2 часа назад"
                status="warning"
              />
              <Separator />
              <ActivityItem
                name="Козлов Дмитрий"
                action="Просрочил сдачу"
                course="Физика"
                time="Вчера, 16:40"
                status="error"
              />
              <Separator />
              <ActivityItem
                name="Соколова Елена"
                action="Получила оценку 5"
                course="Философия"
                time="Вчера, 15:22"
                status="success"
              />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Отстающие студенты</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
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
            <div className="flex justify-end">
              <Button variant="outline" size="sm">
                Все отстающие
                <Icon name="ChevronRight" className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// Компонент карточки статистики для преподавателя
interface TeacherStatCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: string;
  trend?: {
    value: number;
    positive: boolean;
  };
}

const TeacherStatCard = ({
  title,
  value,
  description,
  icon,
  trend,
}: TeacherStatCardProps) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="h-4 w-4 text-muted-foreground">
          <Icon name={icon} className="h-4 w-4" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {(description || trend) && (
          <div className="flex items-center">
            {trend && (
              <div
                className={`mr-2 flex items-center ${
                  trend.positive ? "text-green-500" : "text-red-500"
                }`}
              >
                <Icon
                  name={trend.positive ? "TrendingUp" : "TrendingDown"}
                  className="mr-1 h-3 w-3"
                />
                <span className="text-xs">{trend.value}%</span>
              </div>
            )}
            {description && (
              <p className="text-xs text-muted-foreground">{description}</p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

// Компонент для отображения списка курсов преподавателя
interface MyCoursesProps {
  courses: TeacherCourse[];
}

const MyCoursesSection = ({ courses }: MyCoursesProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold tracking-tight">
          Мои курсы
        </h2>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Icon name="Plus" className="mr-1 h-4 w-4" />
            Создать курс
          </Button>
          <Button variant="outline" size="sm">
            Управление курсами
            <Icon name="ChevronRight" className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {courses.map(course => (
          <Card key={course.id} className="overflow-hidden hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{course.name}</CardTitle>
                  <CardDescription>{course.studentsCount} студентов</CardDescription>
                </div>
                <div className="bg-primary/10 p-2 rounded-full">
                  <Icon name="BookOpen" className="h-5 w-5 text-primary" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>{course.hours} часов</span>
                  <span className="text-muted-foreground">
                    {course.progress}% пройдено
                  </span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Прогресс курса</span>
                  </div>
                  <div className="w-full bg-secondary h-2 rounded-full">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
                <div className="pt-2 flex justify-between">
                  <Button variant="ghost" size="sm">
                    <Icon name="Users" className="mr-1 h-4 w-4" />
                    Студенты
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Icon name="FileText" className="mr-1 h-4 w-4" />
                    Материалы
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

// Компонент для отображения активности студентов
interface ActivityItemProps {
  name: string;
  action: string;
  course: string;
  time: string;
  status: "success" | "warning" | "error" | "info";
}

const ActivityItem = ({ name, action, course, time, status }: ActivityItemProps) => {
  const statusColors = {
    success: "text-green-500",
    warning: "text-amber-500",
    error: "text-red-500",
    info: "text-blue-500"
  };
  
  const statusIcons = {
    success: "CheckCircle",
    warning: "AlertTriangle",
    error: "XCircle",
    info: "Info"
  };

  return (
    <div className="flex items-start justify-between">
      <div className="flex items-start gap-3">
        <div className={statusColors[status]}>
          <Icon name={statusIcons[status]} className="h-5 w-5" />
        </div>
        <div>
          <div className="font-medium">{name}</div>
          <div className="text-sm text-muted-foreground">
            {action} – <span className="font-medium">{course}</span>
          </div>
        </div>
      </div>
      <div className="text-sm text-muted-foreground">{time}</div>
    </div>
  );
};

export default TeacherDashboard;
