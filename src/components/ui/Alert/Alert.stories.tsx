/* eslint-disable react/prop-types */

import type { Story } from '@ladle/react';
import { AlertCircle, CheckCircle, Info, XCircle } from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from './Alert';

export default {
  title: 'UI/Alert',
};

// Story básica con controles
export const Default: Story<{
  variant: 'default' | 'destructive';
  title: string;
  description: string;
  showIcon: boolean;
}> = ({ variant, title, description, showIcon }) => (
  <Alert variant={variant}>
    {showIcon &&
      (variant === 'destructive' ? (
        <XCircle className="size-4" />
      ) : (
        <Info className="size-4" />
      ))}
    <AlertTitle>{title}</AlertTitle>
    <AlertDescription>{description}</AlertDescription>
  </Alert>
);

Default.args = {
  variant: 'default',
  title: 'Información',
  description: 'Esta es una descripción de ejemplo para el alert.',
  showIcon: true,
};

Default.argTypes = {
  variant: {
    options: ['default', 'destructive'],
    control: { type: 'select' },
    defaultValue: 'default',
  },
  title: {
    control: { type: 'text' },
    defaultValue: 'Información',
  },
  description: {
    control: { type: 'text' },
    defaultValue: 'Esta es una descripción de ejemplo para el alert.',
  },
  showIcon: {
    control: { type: 'boolean' },
    defaultValue: true,
  },
};

// Todas las variantes
export const AllVariants: Story = () => (
  <div className="flex flex-col gap-4 p-4">
    <h3 className="text-lg font-semibold">Variantes de Alert</h3>

    <Alert>
      <Info className="size-4" />
      <AlertTitle>Información</AlertTitle>
      <AlertDescription>
        Este es un alert de información por defecto. Útil para mostrar mensajes
        informativos.
      </AlertDescription>
    </Alert>

    <Alert variant="destructive">
      <XCircle className="size-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Este es un alert destructivo. Útil para mostrar errores o advertencias
        importantes.
      </AlertDescription>
    </Alert>
  </div>
);

// Diferentes iconos
export const WithDifferentIcons: Story = () => (
  <div className="flex flex-col gap-4 p-4">
    <h3 className="text-lg font-semibold">Alerts con Diferentes Iconos</h3>

    <Alert>
      <Info className="size-4" />
      <AlertTitle>Información</AlertTitle>
      <AlertDescription>
        Alert informativo con icono de información.
      </AlertDescription>
    </Alert>

    <Alert>
      <CheckCircle className="size-4" />
      <AlertTitle>Éxito</AlertTitle>
      <AlertDescription>Operación completada exitosamente.</AlertDescription>
    </Alert>

    <Alert>
      <AlertCircle className="size-4" />
      <AlertTitle>Advertencia</AlertTitle>
      <AlertDescription>Ten cuidado con esta acción.</AlertDescription>
    </Alert>

    <Alert variant="destructive">
      <XCircle className="size-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>Ha ocurrido un error inesperado.</AlertDescription>
    </Alert>
  </div>
);

// Sin iconos
export const WithoutIcons: Story = () => (
  <div className="flex flex-col gap-4 p-4">
    <h3 className="text-lg font-semibold">Alerts sin Iconos</h3>

    <Alert>
      <AlertTitle>Título Simple</AlertTitle>
      <AlertDescription>
        Este alert no tiene icono, solo texto.
      </AlertDescription>
    </Alert>

    <Alert variant="destructive">
      <AlertTitle>Error Simple</AlertTitle>
      <AlertDescription>Alert de error sin icono.</AlertDescription>
    </Alert>
  </div>
);

// Solo descripción
export const DescriptionOnly: Story = () => (
  <div className="flex flex-col gap-4 p-4">
    <h3 className="text-lg font-semibold">Solo Descripción</h3>

    <Alert>
      <Info className="size-4" />
      <AlertDescription>
        Alert con solo descripción, sin título.
      </AlertDescription>
    </Alert>

    <Alert variant="destructive">
      <XCircle className="size-4" />
      <AlertDescription>Error mostrado solo con descripción.</AlertDescription>
    </Alert>
  </div>
);

// Solo título
export const TitleOnly: Story = () => (
  <div className="flex flex-col gap-4 p-4">
    <h3 className="text-lg font-semibold">Solo Título</h3>

    <Alert>
      <Info className="size-4" />
      <AlertTitle>Información importante</AlertTitle>
    </Alert>

    <Alert variant="destructive">
      <XCircle className="size-4" />
      <AlertTitle>Error crítico</AlertTitle>
    </Alert>
  </div>
);

// Contenido complejo
export const ComplexContent: Story = () => (
  <div className="flex flex-col gap-4 p-4">
    <h3 className="text-lg font-semibold">Contenido Complejo</h3>

    <Alert>
      <CheckCircle className="size-4" />
      <AlertTitle>Actualización Disponible</AlertTitle>
      <AlertDescription>
        <div className="mt-2">
          <p>Una nueva versión está disponible:</p>
          <ul className="mt-2 list-inside list-disc">
            <li>Mejoras de rendimiento</li>
            <li>Nuevas características</li>
            <li>Corrección de errores</li>
          </ul>
          <div className="mt-3 flex gap-2">
            <button className="rounded bg-primary px-3 py-1 text-xs text-primary-foreground">
              Actualizar
            </button>
            <button className="rounded border px-3 py-1 text-xs">
              Más tarde
            </button>
          </div>
        </div>
      </AlertDescription>
    </Alert>

    <Alert variant="destructive">
      <AlertCircle className="size-4" />
      <AlertTitle>Conexión Perdida</AlertTitle>
      <AlertDescription>
        <div className="mt-2">
          <p>No se pudo conectar al servidor. Verifica:</p>
          <ul className="mt-2 list-inside list-disc">
            <li>Tu conexión a internet</li>
            <li>El estado del servidor</li>
            <li>La configuración de firewall</li>
          </ul>
          <button className="mt-3 rounded bg-destructive px-3 py-1 text-xs text-destructive-foreground">
            Reintentar
          </button>
        </div>
      </AlertDescription>
    </Alert>
  </div>
);

// Playground interactivo
export const Playground: Story<{
  variant: 'default' | 'destructive';
  showIcon: boolean;
  showTitle: boolean;
  showDescription: boolean;
  title: string;
  description: string;
}> = ({
  variant,
  showIcon,
  showTitle,
  showDescription,
  title,
  description,
}) => (
  <div className="flex justify-center p-8">
    <Alert variant={variant} className="max-w-md">
      {showIcon &&
        (variant === 'destructive' ? (
          <XCircle className="size-4" />
        ) : (
          <Info className="size-4" />
        ))}
      {showTitle && <AlertTitle>{title}</AlertTitle>}
      {showDescription && <AlertDescription>{description}</AlertDescription>}
    </Alert>
  </div>
);

Playground.args = {
  variant: 'default',
  showIcon: true,
  showTitle: true,
  showDescription: true,
  title: 'Título del Alert',
  description: 'Descripción del alert para el playground.',
};

Playground.argTypes = {
  variant: {
    options: ['default', 'destructive'],
    control: { type: 'select' },
  },
  showIcon: {
    control: { type: 'boolean' },
  },
  showTitle: {
    control: { type: 'boolean' },
  },
  showDescription: {
    control: { type: 'boolean' },
  },
  title: {
    control: { type: 'text' },
  },
  description: {
    control: { type: 'text' },
  },
};
