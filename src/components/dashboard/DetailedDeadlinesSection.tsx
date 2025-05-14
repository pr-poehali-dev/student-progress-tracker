
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const DetailedDeadlinesSection = () => {
  return (
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
  );
};

export default DetailedDeadlinesSection;
