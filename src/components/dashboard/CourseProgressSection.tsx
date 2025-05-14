
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import ProgressItem from "./ProgressItem";

const CourseProgressSection = () => {
  return (
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
  );
};

export default CourseProgressSection;
