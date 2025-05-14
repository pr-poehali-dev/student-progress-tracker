
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

interface CourseCardProps {
  name: string;
  teacher: string;
  hours: number;
  progress: number;
  studentsCount: number;
}

const CourseCard = ({
  name,
  teacher,
  hours,
  progress,
  studentsCount,
}: CourseCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{name}</CardTitle>
            <CardDescription>{teacher}</CardDescription>
          </div>
          <div className="bg-primary/10 p-2 rounded-full">
            <Icon name="BookOpen" className="h-5 w-5 text-primary" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span>{hours} часов</span>
            <span className="text-muted-foreground">{studentsCount} студентов</span>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Прогресс курса</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
