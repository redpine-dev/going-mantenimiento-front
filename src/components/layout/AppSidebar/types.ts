import { LucideIcon } from 'lucide-react';

type NavigationItem = {
  label: string;
  path: string;
  icon: LucideIcon;
};

type NavigationGroup = {
  label: string;
  items: NavigationItem[];
};

export type { NavigationGroup, NavigationItem };
