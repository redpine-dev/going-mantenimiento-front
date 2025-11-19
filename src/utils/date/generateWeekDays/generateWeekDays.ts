import { addDays } from 'date-fns';

const generateWeekDays = (weekStart: Date): Date[] => {
  // weekStart ya es el primer día de la semana (sábado con weekStartsOn = 6)
  // por lo que no necesitamos recalcular el primer día de la semana
  return Array.from({ length: 7 }, (_, index) => addDays(weekStart, index));
};

export { generateWeekDays };
