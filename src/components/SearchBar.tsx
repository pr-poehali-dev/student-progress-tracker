
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

interface SearchBarProps {
  onSearch?: (query: string, type: string) => void;
  types?: Array<{ value: string; label: string }>;
  placeholder?: string;
}

const SearchBar = ({ 
  onSearch, 
  types = [
    { value: "student", label: "Студенты" },
    { value: "course", label: "Курсы" },
  ],
  placeholder = "Поиск..."
}: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [type, setType] = useState(types[0].value);

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query, type);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex w-full max-w-lg items-center gap-2">
      <div className="relative flex-1">
        <Input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="pr-8"
        />
        {query && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 h-full px-2"
            onClick={() => setQuery("")}
          >
            <Icon name="X" className="h-4 w-4 text-muted-foreground" />
            <span className="sr-only">Очистить</span>
          </Button>
        )}
      </div>
      
      <Select value={type} onValueChange={setType}>
        <SelectTrigger className="w-[140px]">
          <SelectValue placeholder="Тип поиска" />
        </SelectTrigger>
        <SelectContent>
          {types.map((type) => (
            <SelectItem key={type.value} value={type.value}>
              {type.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      
      <Button type="button" onClick={handleSearch}>
        <Icon name="Search" className="mr-2 h-4 w-4" />
        Найти
      </Button>
    </div>
  );
};

export default SearchBar;
