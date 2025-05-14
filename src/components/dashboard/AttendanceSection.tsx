
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const AttendanceSection = () => {
  return (
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
  );
};

export default AttendanceSection;
