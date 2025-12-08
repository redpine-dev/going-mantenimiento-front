import { Plus } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select';
import { Client } from '@/modules/clients/domain/types';
import { useGetClients } from '@/modules/clients/hooks/useGetClients';
import {
  MeasurementFormData,
  MeasurementFormDialog,
} from '@/modules/measurements/components/MeasurementFormDialog';
import { MeasurementsDataManager } from '@/modules/measurements/components/MeasurementsTable/MeasurementsDataManager';
import { useCreateMeasurement } from '@/modules/measurements/hooks/useCreateMeasurement';

const MeasurementsPage = () => {
  const [selectedClientId, setSelectedClientId] = useState<string>('');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [presetOpening, setPresetOpening] = useState<string | undefined>(
    undefined,
  );

  const { data: clients } = useGetClients();
  const createMutation = useCreateMeasurement();

  const handleOpenCreateDialog = () => {
    if (!selectedClientId) {
      toast.error('Selecciona un cliente primero');
      return;
    }
    setPresetOpening(undefined);
    setIsFormOpen(true);
  };

  const handleFormSubmit = async (data: MeasurementFormData) => {
    try {
      await createMutation.mutateAsync({
        clientId: selectedClientId,
        year: data.year,
        month: data.month,
        opening: data.opening,
        // Campos de estado
        good: data.good,
        observation: data.observation,
        unsatisfactory: data.unsatisfactory,
        danger: data.danger,
        unmeasured: data.unmeasured,
        // Campos de diagnóstico
        coupling: data.coupling,
        mounting: data.mounting,
        externalCause: data.externalCause,
        cavitation: data.cavitation,
        bearing: data.bearing,
        plainBearing: data.plainBearing,
        belts: data.belts,
        structuralDeficiency: data.structuralDeficiency,
        misalignment: data.misalignment,
        unbalance: data.unbalance,
        componentWear: data.componentWear,
        shaft: data.shaft,
        electrical: data.electrical,
        gear: data.gear,
        aerodynamicForces: data.aerodynamicForces,
        hydraulicForces: data.hydraulicForces,
        lubrication: data.lubrication,
        operational: data.operational,
        productLoss: data.productLoss,
        resonance: data.resonance,
        friction: data.friction,
        rollingBearing: data.rollingBearing,
        sensorNoSignal: data.sensorNoSignal,
        safety: data.safety,
        noTechnicalInfo: data.noTechnicalInfo,
        mechanicalLooseness: data.mechanicalLooseness,
        powerTransmission: data.powerTransmission,
      });
      toast.success('Medición creada exitosamente');
      setIsFormOpen(false);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Ocurrió un error';
      toast.error(errorMessage);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Mediciones</h1>
          <p className="text-muted-foreground">
            Selecciona un cliente para ver y agregar mediciones
          </p>
        </div>
        <Button onClick={handleOpenCreateDialog} disabled={!selectedClientId}>
          <Plus className="mr-2 size-4" />
          Agregar Medición
        </Button>
      </div>

      <Card className="mb-6 p-4">
        <div className="grid gap-2">
          <label className="text-sm font-medium" htmlFor="client-select">
            Cliente
          </label>
          <Select
            value={selectedClientId}
            onValueChange={value => setSelectedClientId(value)}
          >
            <SelectTrigger id="client-select" className="w-full">
              <SelectValue placeholder="Selecciona un cliente" />
            </SelectTrigger>
            <SelectContent>
              {clients?.map((client: Client) => (
                <SelectItem key={client.id} value={client.id}>
                  {client.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </Card>

      <Card className="p-4">
        {!selectedClientId ? (
          <p className="text-muted-foreground">
            Selecciona un cliente para ver las mediciones.
          </p>
        ) : (
          <div className="flex flex-col gap-2">
            <MeasurementsDataManager
              clientId={selectedClientId}
              onAddMeasurement={opening => {
                setPresetOpening(opening);
                setIsFormOpen(true);
              }}
            />
          </div>
        )}
      </Card>

      <MeasurementFormDialog
        open={isFormOpen}
        onOpenChange={setIsFormOpen}
        clientId={selectedClientId}
        onSubmit={handleFormSubmit}
        isSubmitting={createMutation.isPending}
        presetOpening={presetOpening}
      />
    </div>
  );
};

export default MeasurementsPage;
