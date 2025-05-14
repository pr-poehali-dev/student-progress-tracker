
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface StudentCardProps {
  name: string;
  group: string;
  averageScore: number;
  coursesCount: number;
  avatar?: string;
}

const StudentCard = ({
  name,
  group,
  averageScore,
  coursesCount,
  avatar,
}: StudentCardProps) => {
  // Определение цвета бейджа в зависимости от среднего балла
  const scoreColor = 
    averageScore >= 4.5 ? "bg-green-500" : 
    averageScore >= 3.5 ? "bg-blue-500" : 
    averageScore >= 2.5 ? "bg-orange-500" : "bg-red-500";

  // Получаем инициалы для аватара-заглушки
  const getInitials = (name: string) => {
    const parts = name.split(' ');
    if (parts.length > 1) {
      return `${parts[0][0]}${parts[1][0]}`;
    }
    return parts[0].slice(0, 2).toUpperCase();
  };

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <Avatar className="h-12 w-12">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback className="bg-primary text-primary-foreground">
            {getInitials(name)}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <CardTitle className="text-lg">{name}</CardTitle>
          <CardDescription>Группа: {group}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Badge className={scoreColor}>{averageScore.toFixed(1)}</Badge>
            <span className="text-sm text-muted-foreground">Средний балл</span>
          </div>
          <div className="text-sm">
            {coursesCount} {coursesCount > 1 && coursesCount < 5 ? "курса" : "курсов"}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudentCard;
