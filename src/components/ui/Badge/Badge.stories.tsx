/* eslint-disable react/prop-types */

import type { Story } from '@ladle/react';
import { CheckCircle, Star, Users, Zap } from 'lucide-react';

import { Badge } from './Badge';

export default {
  title: 'UI/Badge',
};

// Story básica con controles
export const Default: Story<{
  variant: 'default' | 'secondary' | 'destructive' | 'outline';
  children: string;
}> = ({ variant, children }) => <Badge variant={variant}>{children}</Badge>;

Default.args = {
  variant: 'default',
  children: 'Badge',
};

Default.argTypes = {
  variant: {
    options: ['default', 'secondary', 'destructive', 'outline'],
    control: { type: 'select' },
    defaultValue: 'default',
  },
  children: {
    control: { type: 'text' },
    defaultValue: 'Badge',
  },
};

// Todas las variantes
export const AllVariants: Story = () => (
  <div className="flex flex-col gap-4 p-4">
    <h3 className="text-lg font-semibold">Variantes de Badge</h3>

    <div className="flex flex-wrap gap-4">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  </div>
);

// Badges con iconos
export const WithIcons: Story = () => (
  <div className="flex flex-col gap-4 p-4">
    <h3 className="text-lg font-semibold">Badges con Iconos</h3>

    <div className="flex flex-wrap gap-4">
      <Badge variant="default">
        <Star className="mr-1 size-3" />
        Premium
      </Badge>
      <Badge variant="secondary">
        <Users className="mr-1 size-3" />
        Team
      </Badge>
      <Badge variant="destructive">
        <Zap className="mr-1 size-3" />
        Critical
      </Badge>
      <Badge variant="outline">
        <CheckCircle className="mr-1 size-3" />
        Verified
      </Badge>
    </div>

    <h4 className="mt-4 text-base font-medium">Solo Iconos</h4>
    <div className="flex gap-4">
      <Badge variant="default">
        <Star className="size-3" />
      </Badge>
      <Badge variant="secondary">
        <Users className="size-3" />
      </Badge>
      <Badge variant="destructive">
        <Zap className="size-3" />
      </Badge>
      <Badge variant="outline">
        <CheckCircle className="size-3" />
      </Badge>
    </div>
  </div>
);

// Diferentes estados
export const DifferentStates: Story = () => (
  <div className="flex flex-col gap-4 p-4">
    <h3 className="text-lg font-semibold">Estados</h3>

    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <span className="text-sm">Activo:</span>
        <Badge variant="default">Activo</Badge>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm">Pendiente:</span>
        <Badge variant="secondary">Pendiente</Badge>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm">Error:</span>
        <Badge variant="destructive">Error</Badge>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm">Borrador:</span>
        <Badge variant="outline">Borrador</Badge>
      </div>
    </div>
  </div>
);

// Contadores
export const Counters: Story = () => (
  <div className="flex flex-col gap-4 p-4">
    <h3 className="text-lg font-semibold">Contadores</h3>

    <div className="flex flex-wrap gap-4">
      <Badge variant="default">99+</Badge>
      <Badge variant="secondary">5</Badge>
      <Badge variant="destructive">3</Badge>
      <Badge variant="outline">12</Badge>
    </div>

    <h4 className="mt-4 text-base font-medium">Con Etiquetas</h4>
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span className="text-sm">Mensajes no leídos</span>
        <Badge variant="destructive">5</Badge>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm">Tareas completadas</span>
        <Badge variant="default">12</Badge>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm">Usuarios conectados</span>
        <Badge variant="secondary">
          <div className="mr-1 size-2 rounded-full bg-green-500"></div>8
        </Badge>
      </div>
    </div>
  </div>
);

// Categorías y etiquetas
export const Categories: Story = () => (
  <div className="flex flex-col gap-4 p-4">
    <h3 className="text-lg font-semibold">Categorías y Etiquetas</h3>

    <div className="flex flex-col gap-3">
      <div>
        <h4 className="mb-2 text-sm font-medium">Tecnologías:</h4>
        <div className="flex flex-wrap gap-2">
          <Badge variant="default">React</Badge>
          <Badge variant="default">TypeScript</Badge>
          <Badge variant="default">Vite</Badge>
          <Badge variant="default">Tailwind</Badge>
        </div>
      </div>

      <div>
        <h4 className="mb-2 text-sm font-medium">Prioridades:</h4>
        <div className="flex flex-wrap gap-2">
          <Badge variant="destructive">Alta</Badge>
          <Badge variant="secondary">Media</Badge>
          <Badge variant="outline">Baja</Badge>
        </div>
      </div>

      <div>
        <h4 className="mb-2 text-sm font-medium">Departamentos:</h4>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">Frontend</Badge>
          <Badge variant="outline">Backend</Badge>
          <Badge variant="outline">DevOps</Badge>
          <Badge variant="outline">Design</Badge>
        </div>
      </div>
    </div>
  </div>
);

// Diferentes tamaños de contenido
export const DifferentSizes: Story = () => (
  <div className="flex flex-col gap-4 p-4">
    <h3 className="text-lg font-semibold">Diferentes Tamaños</h3>

    <div className="flex flex-wrap items-center gap-4">
      <Badge variant="default">S</Badge>
      <Badge variant="secondary">Med</Badge>
      <Badge variant="destructive">Large</Badge>
      <Badge variant="outline">Extra Large Content</Badge>
    </div>

    <h4 className="mt-4 text-base font-medium">Con Números</h4>
    <div className="flex flex-wrap items-center gap-4">
      <Badge variant="default">1</Badge>
      <Badge variant="secondary">42</Badge>
      <Badge variant="destructive">999+</Badge>
      <Badge variant="outline">1,234</Badge>
    </div>
  </div>
);

// Uso en contexto
export const InContext: Story = () => (
  <div className="flex flex-col gap-4 p-4">
    <h3 className="text-lg font-semibold">Uso en Contexto</h3>

    <div className="flex flex-col gap-4 rounded-lg border p-4">
      <div className="flex items-center justify-between">
        <h4 className="font-medium">Proyecto Alpha</h4>
        <Badge variant="default">Activo</Badge>
      </div>

      <div className="flex items-center justify-between">
        <h4 className="font-medium">Proyecto Beta</h4>
        <Badge variant="secondary">En desarrollo</Badge>
      </div>

      <div className="flex items-center justify-between">
        <h4 className="font-medium">Proyecto Gamma</h4>
        <Badge variant="destructive">Bloqueado</Badge>
      </div>

      <div className="flex items-center justify-between">
        <h4 className="font-medium">Proyecto Delta</h4>
        <Badge variant="outline">Planificado</Badge>
      </div>
    </div>

    <div className="rounded-lg border p-4">
      <h4 className="mb-3 font-medium">Usuario: Juan Pérez</h4>
      <div className="flex flex-wrap gap-2">
        <Badge variant="default">Admin</Badge>
        <Badge variant="secondary">Verificado</Badge>
        <Badge variant="outline">Premium</Badge>
      </div>
    </div>
  </div>
);

// Playground interactivo
export const Playground: Story<{
  variant: 'default' | 'secondary' | 'destructive' | 'outline';
  withIcon: boolean;
  text: string;
}> = ({ variant, withIcon, text }) => (
  <div className="flex justify-center p-8">
    <Badge variant={variant}>
      {withIcon && <Star className="mr-1 size-3" />}
      {text}
    </Badge>
  </div>
);

Playground.args = {
  variant: 'default',
  withIcon: false,
  text: 'Playground Badge',
};

Playground.argTypes = {
  variant: {
    options: ['default', 'secondary', 'destructive', 'outline'],
    control: { type: 'select' },
  },
  withIcon: {
    control: { type: 'boolean' },
  },
  text: {
    control: { type: 'text' },
  },
};
