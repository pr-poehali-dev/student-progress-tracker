
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

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

export default ProgressItem;
