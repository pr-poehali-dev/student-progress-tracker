
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const RatingSection = () => {
  return (
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
  );
};

export default RatingSection;
