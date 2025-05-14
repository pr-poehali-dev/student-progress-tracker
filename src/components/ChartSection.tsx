
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from "@/components/ui/chart";
import { 
  Bar, 
  BarChart, 
  Line, 
  LineChart, 
  PieChart, 
  Pie,
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from "recharts";

const chartConfig = {
  subjects: {
    label: "Предметы",
    theme: {
      light: "hsl(268, 75%, 78%)",
      dark: "hsl(268, 75%, 68%)",
    },
  },
  progress: {
    label: "Прогресс",
    theme: {
      light: "hsl(15, 100%, 55%)",
      dark: "hsl(15, 100%, 65%)",
    },
  },
  average: {
    label: "Средний балл",
    theme: {
      light: "hsl(214, 82%, 51%)",
      dark: "hsl(214, 82%, 61%)",
    },
  },
  distribution: {
    label: "Распределение",
    theme: {
      light: "hsl(142, 71%, 45%)",
      dark: "hsl(142, 71%, 55%)",
    },
  },
};

const barData = [
  { name: "Мат. анализ", value: 4.2, fill: "var(--color-subjects)" },
  { name: "Информатика", value: 4.8, fill: "var(--color-subjects)" },
  { name: "Физика", value: 3.7, fill: "var(--color-subjects)" },
  { name: "Философия", value: 4.5, fill: "var(--color-subjects)" },
  { name: "История", value: 3.9, fill: "var(--color-subjects)" },
];

const lineData = [
  { name: "Сен", value: 3.8 },
  { name: "Окт", value: 4.0 },
  { name: "Ноя", value: 3.7 },
  { name: "Дек", value: 4.2 },
  { name: "Янв", value: 4.5 },
];

const pieData = [
  { name: "Отлично", value: 12, fill: "#10b981" },
  { name: "Хорошо", value: 8, fill: "#6366f1" },
  { name: "Удовл.", value: 5, fill: "#f59e0b" },
  { name: "Неудовл.", value: 2, fill: "#ef4444" },
];

const ChartSection = () => {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Анализ успеваемости</CardTitle>
        <CardDescription>
          Просмотр статистики по оценкам и прогрессу
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="grades">
          <TabsList className="mb-4">
            <TabsTrigger value="grades">Оценки по предметам</TabsTrigger>
            <TabsTrigger value="progress">Прогресс</TabsTrigger>
            <TabsTrigger value="distribution">Распределение</TabsTrigger>
          </TabsList>
          
          <TabsContent value="grades" className="h-80">
            <ChartContainer className="h-full" config={chartConfig}>
              <BarChart data={barData} margin={{ top: 10, right: 30, left: 0, bottom: 20 }}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} domain={[0, 5]} />
                <Tooltip 
                  content={<ChartTooltipContent />}
                  cursor={{ fill: 'transparent' }}
                />
                <Bar 
                  dataKey="value" 
                  radius={[4, 4, 0, 0]} 
                  barSize={40}
                  className="fill-[var(--color-subjects)]"
                />
              </BarChart>
            </ChartContainer>
          </TabsContent>

          <TabsContent value="progress" className="h-80">
            <ChartContainer className="h-full" config={chartConfig}>
              <LineChart
                data={lineData}
                margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
              >
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} domain={[3, 5]} />
                <Tooltip content={<ChartTooltipContent />} />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="var(--color-progress)"
                  strokeWidth={3}
                  dot={{
                    r: 4,
                    fill: "var(--color-progress)",
                    strokeWidth: 0,
                  }}
                  activeDot={{
                    r: 6,
                    fill: "var(--color-progress)",
                    strokeWidth: 0,
                  }}
                />
              </LineChart>
            </ChartContainer>
          </TabsContent>

          <TabsContent value="distribution" className="h-80">
            <ChartContainer className="h-full" config={chartConfig}>
              <PieChart margin={{ top: 10, right: 30, left: 0, bottom: 20 }}>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={100}
                  dataKey="value"
                  label={({ name, percent }) => 
                    `${name}: ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip content={<ChartTooltipContent nameKey="name" />} />
              </PieChart>
            </ChartContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ChartSection;
