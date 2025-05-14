
import DashboardHeader from "./DashboardHeader";
import StatsCardSection from "./StatsCardSection";
import AnalyticsSection from "./AnalyticsSection";
import CoursesSection from "./CoursesSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

interface StudentDashboardProps {
  studentName: string;
}

const StudentDashboard = ({ studentName }: StudentDashboardProps) => {
  return (
    <div className="space-y-6">
      <DashboardHeader 
        userName={studentName} 
        role="student" 
      />
      
      <StatsCardSection role="student" />
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="overflow-hidden lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-xl">Мой прогресс по курсам</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ProgressItem 
              title="Математический анализ" 
              progress={65} 
              grade="4.0"
              deadline="15 мая" 
            />
            <ProgressItem 
              title="Информатика" 
              progress={82} 
              grade="4.8"
              deadline="10 мая"
              isDueNext 
            />
            <ProgressItem 
              title="Физика" 
              progress={45} 
              grade="3.7"
            />
            <ProgressItem 
              title="Философия" 
              progress={90} 
              grade="4.5"
              completed 
            />
            
            <div className="flex justify-end">
              <Button variant="outline" size="sm">
                Все курсы
                <Icon name="ChevronRight" className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Ближайшие дедлайны</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Лабораторная работа №3</span>
                <Badge className="bg-red-500">2 дня</Badge>
              </div>
              <p className="text-sm text-muted-foreground">Мат. анализ</p>
            </div>
            <Separator />
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Курсовой проект</span>
                <Badge className="bg-amber-500">5 дней</Badge>
              </div>
              <p className="text-sm text-muted-foreground">Информатика</p>
            </div>
            <Separator />
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Контрольная работа</span>
                <Badge className="bg-amber-500">7 дней</Badge>
              </div>
              <p className="text-sm text-muted-foreground">Физика</p>
            </div>
            
            <div className="flex justify-end">
              <Button variant="outline" size="sm">
                Все дедлайны
                <Icon name="ChevronRight" className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <AttendanceAndRatingSection />
      
      <CoursesSection role="student" />
    </div>
  );
};

interface ProgressItemProps {
  title: string;
  progress: number;
  grade: string;
  deadline?: string;
  isDueNext?: boolean;
  completed?: boolean;
}

const ProgressItem = ({ 
  title, 
  progress, 
  grade, 
  deadline, 
  isDueNext, 
  completed 
}: ProgressItemProps) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-medium">{title}</span>
          {completed && (
            <Badge className="bg-green-500">Завершен</Badge>
          )}
          {isDueNext && (
            <Badge className="bg-blue-500">Следующий дедлайн</Badge>
          )}
        </div>
        <Badge className={`${
          Number(grade) >= 4.5 ? "bg-green-500" : 
          Number(grade) >= 3.5 ? "bg-blue-500" : 
          Number(grade) >= 2.5 ? "bg-amber-500" : "bg-red-500"
        }`}>
          {grade}
        </Badge>
      </div>
      
      <div className="flex items-center gap-2">
        <Progress value={progress} className="h-2 flex-grow" />
        <span className="text-sm font-medium">{progress}%</span>
      </div>
      
      {deadline && (
        <div className="text-sm text-muted-foreground">
          Ближайший дедлайн: {deadline}
        </div>
      )}
      
      <Separator className="mt-2" />
    </div>
  );
};

const AttendanceAndRatingSection = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Посещаемость</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle2" className="h-5 w-5 text-green-500" />
                <span>Посещено занятий</span>
              </div>
              <Badge>42</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Icon name="XCircle" className="h-5 w-5 text-red-500" />
                <span>Пропущено занятий</span>
              </div>
              <Badge>3</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Icon name="Percent" className="h-5 w-5 text-blue-500" />
                <span>Процент посещаемости</span>
              </div>
              <Badge className="bg-green-500">93%</Badge>
            </div>
            
            <Separator />
            
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Последнее посещение:</span>
              <span className="font-medium">15 мая, 14:30 - Мат. анализ</span>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Рейтинг в группе</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-white font-bold">
                  3
                </div>
                <span className="font-medium">Ваша позиция</span>
              </div>
              <Badge className="bg-blue-500">ТОП 10%</Badge>
            </div>
            
            <Separator />
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-500 text-white font-semibold text-xs">
                    1
                  </div>
                  <span>Петрова Анна</span>
                </div>
                <Badge>4.9</Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-300 text-gray-700 font-semibold text-xs">
                    2
                  </div>
                  <span>Иванов Дмитрий</span>
                </div>
                <Badge>4.7</Badge>
              </div>
              
              <div className="flex items-center justify-between bg-blue-50 p-2 rounded-md">
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 text-white font-semibold text-xs">
                    3
                  </div>
                  <span className="font-medium">Вы (Смирнов Алексей)</span>
                </div>
                <Badge>4.5</Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-300 text-gray-700 font-semibold text-xs">
                    4
                  </div>
                  <span>Соколова Елена</span>
                </div>
                <Badge>4.3</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentDashboard;
