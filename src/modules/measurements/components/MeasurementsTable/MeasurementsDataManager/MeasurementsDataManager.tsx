import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/Accordion';
import { Button } from '@/components/ui/Button';
import { useGetMeasurementsByClient } from '@/modules/measurements/hooks/useGetMeasurementsByClient';

import { MeasurementsDataTableManager } from '../MeasurementsDataTableManager';
import { MeasurementsDataManagerProps } from './types';

const MeasurementsDataManager = ({
  clientId,
  onAddMeasurement,
}: MeasurementsDataManagerProps) => {
  const {
    data: measurements = [],
    isLoading,
    isError,
    refetch,
  } = useGetMeasurementsByClient({ clientId });

  if (isLoading || isError) {
    return (
      <MeasurementsDataTableManager
        data={measurements}
        isLoading={isLoading}
        isError={isError}
        onRetry={() => refetch()}
      />
    );
  }

  const openingToMeasurements = measurements.reduce<
    Record<string, typeof measurements>
  >((acc, m) => {
    const key = m.opening || 'Sin opening';
    if (!acc[key]) acc[key] = [];
    acc[key].push(m);
    return acc;
  }, {});

  const openings = Object.keys(openingToMeasurements).sort((a, b) =>
    a.localeCompare(b),
  );

  return (
    <Accordion type="multiple" className="w-full">
      {openings.map(opening => (
        <AccordionItem key={opening} value={opening}>
          <AccordionTrigger>
            <div className="flex w-full items-center justify-between pr-2">
              <span className="font-medium">{opening}</span>
              <span className="text-xs text-muted-foreground">
                {openingToMeasurements[opening].length} registros
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="mb-2 flex items-center justify-end">
              <Button size="sm" onClick={() => onAddMeasurement?.(opening)}>
                Agregar medición
              </Button>
            </div>
            <MeasurementsDataTableManager
              data={openingToMeasurements[opening]}
              isLoading={false}
              isError={false}
              onRetry={() => refetch()}
            />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export { MeasurementsDataManager };
