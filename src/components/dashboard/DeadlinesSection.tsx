
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";

const DeadlinesSection = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold tracking-tight">
          Ближайшие дедлайны
        </h2>
        <Button variant="outline" size="sm">
          Все дедлайны
          <Icon name="ChevronRight" className="ml-1 h-4 w-4" />
        </Button>
      </div>

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
    </div>
  );
};

export default DeadlinesSection;
