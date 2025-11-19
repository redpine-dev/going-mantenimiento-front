/* eslint-disable react/prop-types */

import type { Story } from '@ladle/react';
import { Heart, Mail, Plus, Settings, Trash2 } from 'lucide-react';

import { Button } from './Button';

export default {
  title: 'UI/Button',
};

// Story básica con controles
export const Default: Story<{
  variant:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link';
  size: 'default' | 'sm' | 'lg' | 'icon';
  disabled: boolean;
  children: string;
}> = ({ variant, size, disabled, children }) => (
  <Button variant={variant} size={size} disabled={disabled}>
    {children}
  </Button>
);

Default.args = {
  variant: 'default',
  size: 'default',
  disabled: false,
  children: 'Button',
};

Default.argTypes = {
  variant: {
    options: [
      'default',
      'destructive',
      'outline',
      'secondary',
      'ghost',
      'link',
    ],
    control: { type: 'select' },
    defaultValue: 'default',
  },
  size: {
    options: ['default', 'sm', 'lg', 'icon'],
    control: { type: 'select' },
    defaultValue: 'default',
  },
  disabled: {
    control: { type: 'boolean' },
    defaultValue: false,
  },
  children: {
    control: { type: 'text' },
    defaultValue: 'Button',
  },
};

// Todas las variantes
export const AllVariants: Story = () => (
  <div className="flex flex-col gap-4 p-4">
    <h3 className="text-lg font-semibold">Variantes de Button</h3>

    <div className="flex flex-wrap gap-4">
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>

    <h4 className="mt-4 text-base font-medium">Estados Deshabilitados</h4>
    <div className="flex flex-wrap gap-4">
      <Button variant="default" disabled>
        Default
      </Button>
      <Button variant="destructive" disabled>
        Destructive
      </Button>
      <Button variant="outline" disabled>
        Outline
      </Button>
      <Button variant="secondary" disabled>
        Secondary
      </Button>
      <Button variant="ghost" disabled>
        Ghost
      </Button>
      <Button variant="link" disabled>
        Link
      </Button>
    </div>
  </div>
);

// Todos los tamaños
export const AllSizes: Story = () => (
  <div className="flex flex-col gap-4 p-4">
    <h3 className="text-lg font-semibold">Tamaños de Button</h3>

    <div className="flex items-end gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon">
        <Settings />
      </Button>
    </div>
  </div>
);

// Botones con iconos
export const WithIcons: Story = () => (
  <div className="flex flex-col gap-4 p-4">
    <h3 className="text-lg font-semibold">Botones con Iconos</h3>

    <div className="flex flex-wrap gap-4">
      <Button>
        <Mail />
        Enviar Email
      </Button>
      <Button variant="destructive">
        <Trash2 />
        Eliminar
      </Button>
      <Button variant="outline">
        <Plus />
        Agregar
      </Button>
      <Button variant="secondary">
        <Settings />
        Configuración
      </Button>
    </div>

    <h4 className="mt-4 text-base font-medium">Solo Iconos</h4>
    <div className="flex gap-4">
      <Button size="icon">
        <Heart />
      </Button>
      <Button size="icon" variant="outline">
        <Settings />
      </Button>
      <Button size="icon" variant="ghost">
        <Plus />
      </Button>
      <Button size="icon" variant="destructive">
        <Trash2 />
      </Button>
    </div>
  </div>
);

// Botones con diferentes contenidos
export const DifferentContent: Story = () => (
  <div className="flex flex-col gap-4 p-4">
    <h3 className="text-lg font-semibold">Diferentes Contenidos</h3>

    <div className="flex flex-wrap gap-4">
      <Button>Texto Simple</Button>
      <Button variant="outline">
        <span className="flex items-center gap-2">
          <div className="size-2 rounded-full bg-green-500"></div>
          En línea
        </span>
      </Button>
      <Button variant="secondary">
        <div className="flex flex-col">
          <span className="text-xs">Línea 1</span>
          <span className="text-xs opacity-70">Línea 2</span>
        </div>
      </Button>
    </div>
  </div>
);

// Ejemplo de uso como enlace
export const AsLink: Story = () => (
  <div className="flex flex-col gap-4 p-4">
    <h3 className="text-lg font-semibold">Como Enlace (asChild)</h3>

    <div className="flex flex-wrap gap-4">
      <Button asChild>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
          Enlace Externo
        </a>
      </Button>
      <Button variant="outline" asChild>
        <a href="/about">Enlace Interno</a>
      </Button>
    </div>
  </div>
);

// Playground interactivo
export const Playground: Story<{
  variant:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link';
  size: 'default' | 'sm' | 'lg' | 'icon';
  disabled: boolean;
  withIcon: boolean;
  text: string;
}> = ({ variant, size, disabled, withIcon, text }) => (
  <div className="flex justify-center p-8">
    <Button variant={variant} size={size} disabled={disabled}>
      {withIcon && <Heart />}
      {size !== 'icon' ? text : withIcon ? '' : <Settings />}
    </Button>
  </div>
);

Playground.args = {
  variant: 'default',
  size: 'default',
  disabled: false,
  withIcon: false,
  text: 'Playground Button',
};

Playground.argTypes = {
  variant: {
    options: [
      'default',
      'destructive',
      'outline',
      'secondary',
      'ghost',
      'link',
    ],
    control: { type: 'select' },
  },
  size: {
    options: ['default', 'sm', 'lg', 'icon'],
    control: { type: 'select' },
  },
  disabled: {
    control: { type: 'boolean' },
  },
  withIcon: {
    control: { type: 'boolean' },
  },
  text: {
    control: { type: 'text' },
  },
};
