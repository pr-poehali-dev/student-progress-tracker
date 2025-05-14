
import { Button } from "@/components/ui/button";
import SearchBar from "@/components/SearchBar";

interface DashboardHeaderProps {
  userName: string;
  role: "teacher" | "student";
}

const DashboardHeader = ({ userName, role }: DashboardHeaderProps) => {
  const isTeacher = role === "teacher";
  
  const greeting = `Добрый день, ${userName}!`;
  const date = new Date().toLocaleDateString("ru-RU", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex flex-col-reverse gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">{greeting}</h1>
        <p className="text-muted-foreground">
          {date.charAt(0).toUpperCase() + date.slice(1)}
        </p>
      </div>
      
      <SearchBar 
        types={
          isTeacher 
            ? [
                { value: "student", label: "Студенты" },
                { value: "course", label: "Курсы" },
              ]
            : [
                { value: "course", label: "Курсы" },
              ]
        }
        placeholder={isTeacher ? "Поиск студентов или курсов..." : "Поиск курсов..."} 
      />
    </div>
  );
};

export default DashboardHeader;
