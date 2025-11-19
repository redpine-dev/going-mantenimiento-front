import { ReactNode } from 'react';

type CalendarDayProps = {
  date: Date;
  isCurrentMonth?: boolean;
  isSelected?: boolean;
  isToday?: boolean;
  isDisabled?: boolean;
  onClick?: (date: Date) => void;
  children?: ReactNode;
  className?: string;
  isLoading?: boolean;
};

type CalendarDayContextValue = {
  date: Date;
  isCurrentMonth: boolean;
  isSelected: boolean;
  isToday: boolean;
  isDisabled: boolean;
};

type CalendarDayNumberProps = {
  className?: string;
};

type CalendarDayHeaderProps = {
  children?: ReactNode;
  className?: string;
};

type CalendarDayContentProps = {
  children?: ReactNode;
  className?: string;
};

type CalendarDayFooterProps = {
  children?: ReactNode;
  className?: string;
};

type CalendarDayBadgeProps = {
  children: ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error';
  className?: string;
};

export type {
  CalendarDayBadgeProps,
  CalendarDayContentProps,
  CalendarDayContextValue,
  CalendarDayFooterProps,
  CalendarDayHeaderProps,
  CalendarDayNumberProps,
  CalendarDayProps,
};
