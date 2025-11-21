import { Building2, LayoutDashboard, LogOut, Users } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from '@/components/ui/Sidebar';
import { onRemoveSession } from '@/modules/auth/stores/session/actions/onRemoveSession';
import { useSessionStore } from '@/modules/auth/stores/sessionStore';

import { NavigationGroup } from './types';

const navigationItems: NavigationGroup[] = [
  {
    label: 'Principal',
    items: [
      {
        label: 'Dashboard',
        path: '/dashboard',
        icon: LayoutDashboard,
      },
    ],
  },
  {
    label: 'Gestión',
    items: [
      {
        label: 'Clientes',
        path: '/clients',
        icon: Building2,
      },
      {
        label: 'Usuarios',
        path: '/users',
        icon: Users,
      },
    ],
  },
];

export function AppSidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useSessionStore();

  const handleLogout = () => {
    onRemoveSession();
    localStorage.removeItem('auth_token');
    navigate('/login', { replace: true });
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className="flex items-center justify-center py-4">
          <div className="animate-logo-pulse">
            <img
              src="/logo.png"
              alt="Logo"
              className="size-20 object-contain transition-transform duration-300 hover:rotate-6 hover:scale-110 dark:brightness-0 dark:contrast-200 dark:invert"
            />
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        {navigationItems.map((group, groupIndex) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item, itemIndex) => {
                  const isActive = location.pathname.startsWith(item.path);
                  const Icon = item.icon;

                  return (
                    <SidebarMenuItem
                      key={item.path}
                      className="animate-fade-in-left"
                      style={{
                        animationDelay: `${groupIndex * 100 + itemIndex * 50}ms`,
                      }}
                    >
                      <SidebarMenuButton
                        asChild
                        isActive={isActive}
                        tooltip={item.label}
                        className="group/button relative overflow-hidden"
                      >
                        <Link to={item.path} className="relative">
                          {isActive && (
                            <>
                              <span className="absolute inset-0 animate-pulse-glow bg-primary/10 dark:bg-accent/20" />
                              <span className="absolute inset-y-0 left-0 w-1 animate-pulse-glow bg-accent" />
                            </>
                          )}
                          <Icon className="transition-all duration-300 group-hover/button:rotate-12 group-hover/button:scale-110" />
                          <span className="transition-all duration-200">
                            {item.label}
                          </span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter>
        <SidebarSeparator />
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex animate-fade-in items-center gap-3 p-2">
              <div className="relative">
                <div className="flex size-8 animate-avatar-pulse items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground shadow-lg shadow-primary/50 dark:shadow-primary/30">
                  {user?.username?.charAt(0).toUpperCase() || 'U'}
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 size-3 animate-bounce-subtle rounded-full border-2 border-sidebar bg-green-500 shadow-lg shadow-green-500/50" />
              </div>
              <div className="flex flex-col group-data-[collapsible=icon]:hidden">
                <span className="text-sm font-medium transition-colors">
                  {user?.username}
                </span>
                <span className="text-xs capitalize text-muted-foreground">
                  {user?.role}
                </span>
              </div>
            </div>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              tooltip="Cerrar Sesión"
              className="group/logout"
            >
              <button
                onClick={handleLogout}
                className="transition-colors duration-200 hover:text-destructive"
              >
                <LogOut className="transition-all duration-300 group-hover/logout:-rotate-12 group-hover/logout:scale-110" />
                <span>Cerrar Sesión</span>
              </button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
