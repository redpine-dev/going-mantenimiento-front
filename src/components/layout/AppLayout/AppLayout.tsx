import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/Sidebar';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

import { AppSidebar } from '../AppSidebar';
import { AppLayoutProps } from './types';

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <div className="flex-1" />
          <ThemeToggle />
        </header>

        <div className="flex flex-1 flex-col">
          <main>{children}</main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
