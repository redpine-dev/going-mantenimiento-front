import { Building2, LayoutDashboard, LogOut, Users } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
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
      {/* <SidebarHeader>
        <div className="flex items-center gap-2 p-2">
          <Wrench className="size-5 text-primary" />
          <h2 className="text-lg font-semibold">Going Mantenimiento</h2>
        </div>
      </SidebarHeader> */}

      <SidebarContent>
        {navigationItems.map(group => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map(item => {
                  const isActive = location.pathname.startsWith(item.path);
                  const Icon = item.icon;

                  return (
                    <SidebarMenuItem key={item.path}>
                      <SidebarMenuButton
                        asChild
                        isActive={isActive}
                        tooltip={item.label}
                      >
                        <Link to={item.path}>
                          <Icon />
                          <span>{item.label}</span>
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
            <div className="flex items-center gap-2 p-2">
              <div className="flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                {user?.username?.charAt(0).toUpperCase() || 'U'}
              </div>
              <div className="flex flex-col group-data-[collapsible=icon]:hidden">
                <span className="text-sm font-medium">{user?.username}</span>
                <span className="text-xs capitalize text-muted-foreground">
                  {user?.role}
                </span>
              </div>
            </div>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Cerrar Sesión">
              <button onClick={handleLogout}>
                <LogOut />
                <span>Cerrar Sesión</span>
              </button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
