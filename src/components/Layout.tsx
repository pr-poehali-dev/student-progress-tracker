import { ReactNode, useState } from "react";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

type Role = "teacher" | "student";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [role, setRole] = useState<Role>("teacher");

  const toggleRole = () => {
    setRole(role === "teacher" ? "student" : "teacher");
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center px-2">
              <div className="flex items-center gap-2">
                <Icon name="BookOpenCheck" className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">Учет успеваемости</span>
              </div>
              <SidebarTrigger className="ml-auto" />
            </div>
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Главное меню</SidebarGroupLabel>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton isActive tooltip="Панель управления">
                    <Icon name="LayoutDashboard" />
                    <span>Панель управления</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                {role === "teacher" ? (
                  <>
                    <SidebarMenuItem>
                      <SidebarMenuButton tooltip="Студенты">
                        <Icon name="Users" />
                        <span>Студенты</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton tooltip="Курсы и оценки">
                        <Icon name="BookOpen" />
                        <span>Курсы и оценки</span>
                        <Badge className="ml-auto">12</Badge>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton tooltip="Анализ успеваемости">
                        <Icon name="BarChart" />
                        <span>Анализ успеваемости</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton tooltip="Отчетность">
                        <Icon name="FileText" />
                        <span>Отчетность</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </>
                ) : (
                  <>
                    <SidebarMenuItem>
                      <SidebarMenuButton tooltip="Мои курсы и оценки">
                        <Icon name="GraduationCap" />
                        <span>Мои курсы и оценки</span>
                        <Badge className="ml-auto">5</Badge>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton tooltip="Моя успеваемость">
                        <Icon name="LineChart" />
                        <span>Моя успеваемость</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton tooltip="Посещаемость">
                        <Icon name="CalendarCheck" />
                        <span>Посещаемость</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton tooltip="Дедлайны">
                        <Icon name="Clock" />
                        <span>Дедлайны</span>
                        <Badge className="ml-auto bg-red-500">3</Badge>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton tooltip="Сформировать справку">
                        <Icon name="FileOutput" />
                        <span>Сформировать справку</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </>
                )}

                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="Поиск">
                    <Icon name="Search" />
                    <span>Поиск</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>Дополнительно</SidebarGroupLabel>
              <SidebarMenu>
                {role === "teacher" && (
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Загрузка/Сохранение">
                      <Icon name="HardDrive" />
                      <span>Загрузка/Сохранение</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )}
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="Настройки">
                    <Icon name="Settings" />
                    <span>Настройки</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="Помощь">
                    <Icon name="HelpCircle" />
                    <span>Помощь</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter>
            <div className="flex items-center gap-3 px-4 py-2">
              <Avatar className="h-9 w-9">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>ИП</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <div className="text-sm font-medium">
                  {role === "teacher" ? "Иванов Петр" : "Смирнов Алексей"}
                </div>
                <div className="text-xs text-muted-foreground">
                  {role === "teacher" ? "Преподаватель" : "Студент ИТ-101"}
                </div>
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="ml-auto"
                onClick={toggleRole}
                title="Выйти"
              >
                <Icon name="LogOut" className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center justify-between border-t px-4 py-3">
              <div className="flex items-center gap-2">
                <Switch
                  id="role-switch"
                  checked={role === "teacher"}
                  onCheckedChange={toggleRole}
                />
                <Label htmlFor="role-switch" className="text-xs">
                  {role === "teacher" ? "Преподаватель" : "Студент"}
                </Label>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset className="bg-gray-50">
          <main className="flex-1 overflow-y-auto p-6">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
