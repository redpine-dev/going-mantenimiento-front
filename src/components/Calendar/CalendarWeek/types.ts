import { ReactNode } from 'react';

type CalendarWeekProps = {
  weekStart: Date;
  currentMonth?: Date;
  selectedDate?: Date;
  onDayClick?: (date: Date) => void;
  renderDayContent?: (date: Date) => ReactNode;
  className?: string;
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  children?: ReactNode;
};

type CalendarWeekContextValue = {
  weekStart: Date;
  currentMonth?: Date;
  selectedDate?: Date;
  weekDays: Date[];
  onDayClick?: (date: Date) => void;
  weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6;
};

type CalendarWeekDaysProps = {
  children: (date: Date, index: number) => ReactNode;
};

export type {
  CalendarWeekContextValue,
  CalendarWeekDaysProps,
  CalendarWeekProps,
};
