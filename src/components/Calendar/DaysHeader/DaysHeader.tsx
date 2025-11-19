import { DaysHeaderProps } from './types';

const DaysHeader = ({ weekStartsOn, className = '' }: DaysHeaderProps) => {
  const dayNames =
    weekStartsOn === 6
      ? ['Sáb', 'Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie']
      : ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

  return (
    <div
      className={`grid grid-cols-7 border-b border-gray-200 bg-gray-50 ${className}`}
      role="row"
    >
      {dayNames.map(dayName => (
        <div
          key={dayName}
          className="p-2 text-center text-sm font-medium text-gray-700"
          role="columnheader"
        >
          {dayName}
        </div>
      ))}
    </div>
  );
};

export { DaysHeader };
