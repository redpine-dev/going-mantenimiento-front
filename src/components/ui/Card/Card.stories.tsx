/* eslint-disable react/prop-types */

import type { Story } from '@ladle/react';
import {
  Calendar,
  Clock,
  DollarSign,
  Heart,
  MapPin,
  MessageCircle,
  MoreVertical,
  Share,
  ShoppingCart,
  Star,
  User,
} from 'lucide-react';

import { Card } from './Card';

export default {
  title: 'UI/Card',
};

// Story básica con controles
export const Default: Story<{
  title: string;
  description: string;
  showHeader: boolean;
  showContent: boolean;
  showFooter: boolean;
}> = ({ title, description, showHeader, showContent, showFooter }) => (
  <Card className="w-96">
    {showHeader && (
      <Card.Header>
        <Card.Title>{title}</Card.Title>
        <Card.Description>{description}</Card.Description>
      </Card.Header>
    )}
    {showContent && (
      <Card.Content>
        <p>Este es el contenido principal de la tarjeta.</p>
      </Card.Content>
    )}
    {showFooter && (
      <Card.Footer>
        <button className="rounded bg-primary px-4 py-2 text-primary-foreground">
          Acción
        </button>
      </Card.Footer>
    )}
  </Card>
);

Default.args = {
  title: 'Título de la Tarjeta',
  description: 'Descripción de la tarjeta.',
  showHeader: true,
  showContent: true,
  showFooter: true,
};

Default.argTypes = {
  title: {
    control: { type: 'text' },
    defaultValue: 'Título de la Tarjeta',
  },
  description: {
    control: { type: 'text' },
    defaultValue: 'Descripción de la tarjeta.',
  },
  showHeader: {
    control: { type: 'boolean' },
    defaultValue: true,
  },
  showContent: {
    control: { type: 'boolean' },
    defaultValue: true,
  },
  showFooter: {
    control: { type: 'boolean' },
    defaultValue: true,
  },
};

// Estructura básica
export const BasicStructure: Story = () => (
  <div className="flex flex-col gap-4 p-4">
    <h3 className="text-lg font-semibold">Estructura Básica</h3>

    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <Card.Header>
          <Card.Title>Solo Header</Card.Title>
          <Card.Description>
            Solo tiene header con título y descripción.
          </Card.Description>
        </Card.Header>
      </Card>

      <Card>
        <Card.Content>
          <p>Solo Content</p>
          <p>Esta tarjeta solo tiene contenido, sin header ni footer.</p>
        </Card.Content>
      </Card>

      <Card>
        <Card.Footer>
          <button className="rounded bg-primary px-4 py-2 text-primary-foreground">
            Solo Footer
          </button>
        </Card.Footer>
      </Card>
    </div>

    <Card className="w-96">
      <Card.Header>
        <Card.Title>Completa</Card.Title>
        <Card.Description>Tarjeta con todas las secciones.</Card.Description>
      </Card.Header>
      <Card.Content>
        <p>Esta tarjeta incluye header, content y footer.</p>
      </Card.Content>
      <Card.Footer className="justify-between">
        <button className="rounded border px-4 py-2">Cancelar</button>
        <button className="rounded bg-primary px-4 py-2 text-primary-foreground">
          Confirmar
        </button>
      </Card.Footer>
    </Card>
  </div>
);

// Tarjetas de perfil
export const ProfileCards: Story = () => (
  <div className="flex flex-col gap-4 p-4">
    <h3 className="text-lg font-semibold">Tarjetas de Perfil</h3>

    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <Card.Header className="text-center">
          <div className="mx-auto mb-2 flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <User className="size-8" />
          </div>
          <Card.Title>Ana García</Card.Title>
          <Card.Description>Desarrolladora Frontend</Card.Description>
        </Card.Header>
        <Card.Content>
          <div className="flex justify-center gap-4 text-sm text-muted-foreground">
            <div className="text-center">
              <div className="font-semibold">124</div>
              <div>Proyectos</div>
            </div>
            <div className="text-center">
              <div className="font-semibold">2.5k</div>
              <div>Seguidores</div>
            </div>
            <div className="text-center">
              <div className="font-semibold">180</div>
              <div>Siguiendo</div>
            </div>
          </div>
        </Card.Content>
        <Card.Footer>
          <button className="w-full rounded bg-primary px-4 py-2 text-primary-foreground">
            Seguir
          </button>
        </Card.Footer>
      </Card>

      <Card>
        <Card.Header>
          <div className="flex items-center gap-3">
            <div className="flex size-12 items-center justify-center rounded-full bg-secondary">
              <User className="size-6" />
            </div>
            <div>
              <Card.Title className="text-base">Carlos López</Card.Title>
              <Card.Description>Designer UI/UX</Card.Description>
            </div>
          </div>
        </Card.Header>
        <Card.Content>
          <p className="text-sm">
            Especializado en crear experiencias digitales increíbles. Apasionado
            por el diseño centrado en el usuario.
          </p>
        </Card.Content>
        <Card.Footer className="gap-2">
          <button className="flex-1 rounded border px-3 py-2 text-sm">
            Mensaje
          </button>
          <button className="flex-1 rounded bg-primary px-3 py-2 text-sm text-primary-foreground">
            Conectar
          </button>
        </Card.Footer>
      </Card>
    </div>
  </div>
);

// Tarjetas de producto
export const ProductCards: Story = () => (
  <div className="flex flex-col gap-4 p-4">
    <h3 className="text-lg font-semibold">Tarjetas de Producto</h3>

    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <div className="aspect-video bg-muted"></div>
        <Card.Header>
          <Card.Title>Laptop Pro 15&quot;</Card.Title>
          <Card.Description>
            Laptop de alto rendimiento para profesionales
          </Card.Description>
        </Card.Header>
        <Card.Content>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold">$1,299</span>
            <div className="flex items-center gap-1">
              <Star className="size-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm">4.8 (124)</span>
            </div>
          </div>
        </Card.Content>
        <Card.Footer>
          <button className="w-full rounded bg-primary px-4 py-2 text-primary-foreground">
            <ShoppingCart className="mr-2 size-4" />
            Agregar al Carrito
          </button>
        </Card.Footer>
      </Card>

      <Card>
        <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-600"></div>
        <Card.Header>
          <div className="flex items-start justify-between">
            <div>
              <Card.Title>Curso React Avanzado</Card.Title>
              <Card.Description>
                Aprende React desde cero hasta experto
              </Card.Description>
            </div>
            <Heart className="size-5 text-muted-foreground" />
          </div>
        </Card.Header>
        <Card.Content>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="size-4" />
              <span>24 horas</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <User className="size-4" />
              <span>1,234 estudiantes</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-primary">$99</span>
              <span className="text-sm text-muted-foreground line-through">
                $199
              </span>
            </div>
          </div>
        </Card.Content>
        <Card.Footer>
          <button className="w-full rounded bg-primary px-4 py-2 text-primary-foreground">
            Inscribirse
          </button>
        </Card.Footer>
      </Card>
    </div>
  </div>
);

// Tarjetas de contenido
export const ContentCards: Story = () => (
  <div className="flex flex-col gap-4 p-4">
    <h3 className="text-lg font-semibold">Tarjetas de Contenido</h3>

    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <Card>
        <Card.Header>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <User className="size-5" />
              </div>
              <div>
                <Card.Title className="text-base">María Rodríguez</Card.Title>
                <Card.Description className="text-xs">
                  hace 2 horas
                </Card.Description>
              </div>
            </div>
            <MoreVertical className="size-4 text-muted-foreground" />
          </div>
        </Card.Header>
        <Card.Content>
          <p className="text-sm">
            ¡Acabo de terminar mi primer proyecto en React! 🎉 Ha sido una
            experiencia increíble aprender esta tecnología. Gracias a todos por
            el apoyo.
          </p>
        </Card.Content>
        <Card.Footer className="justify-between">
          <div className="flex gap-4">
            <button className="flex items-center gap-1 text-sm text-muted-foreground">
              <Heart className="size-4" />
              24
            </button>
            <button className="flex items-center gap-1 text-sm text-muted-foreground">
              <MessageCircle className="size-4" />8
            </button>
            <button className="flex items-center gap-1 text-sm text-muted-foreground">
              <Share className="size-4" />
              Compartir
            </button>
          </div>
        </Card.Footer>
      </Card>

      <Card>
        <div className="aspect-video bg-gradient-to-r from-green-400 to-blue-500"></div>
        <Card.Header>
          <Card.Title>10 Tips para Desarrolladores</Card.Title>
          <Card.Description>
            Consejos esenciales que todo desarrollador debería conocer
          </Card.Description>
        </Card.Header>
        <Card.Content>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="size-4" />
              15 Mar 2024
            </div>
            <div className="flex items-center gap-1">
              <Clock className="size-4" />5 min lectura
            </div>
          </div>
        </Card.Content>
        <Card.Footer>
          <button className="w-full rounded border px-4 py-2 text-sm">
            Leer Artículo
          </button>
        </Card.Footer>
      </Card>
    </div>
  </div>
);

// Tarjetas de estadísticas
export const StatCards: Story = () => (
  <div className="flex flex-col gap-4 p-4">
    <h3 className="text-lg font-semibold">Tarjetas de Estadísticas</h3>

    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <Card.Header className="pb-2">
          <div className="flex items-center justify-between">
            <Card.Description>Ventas Totales</Card.Description>
            <DollarSign className="size-4 text-muted-foreground" />
          </div>
        </Card.Header>
        <Card.Content>
          <div className="text-2xl font-bold">$45,231.89</div>
          <p className="text-xs text-green-600">+20.1% desde el mes pasado</p>
        </Card.Content>
      </Card>

      <Card>
        <Card.Header className="pb-2">
          <div className="flex items-center justify-between">
            <Card.Description>Usuarios Activos</Card.Description>
            <User className="size-4 text-muted-foreground" />
          </div>
        </Card.Header>
        <Card.Content>
          <div className="text-2xl font-bold">2,350</div>
          <p className="text-xs text-green-600">+180.1% desde el mes pasado</p>
        </Card.Content>
      </Card>

      <Card>
        <Card.Header className="pb-2">
          <div className="flex items-center justify-between">
            <Card.Description>Pedidos</Card.Description>
            <ShoppingCart className="size-4 text-muted-foreground" />
          </div>
        </Card.Header>
        <Card.Content>
          <div className="text-2xl font-bold">12,234</div>
          <p className="text-xs text-red-600">-19% desde el mes pasado</p>
        </Card.Content>
      </Card>

      <Card>
        <Card.Header className="pb-2">
          <div className="flex items-center justify-between">
            <Card.Description>Ubicaciones</Card.Description>
            <MapPin className="size-4 text-muted-foreground" />
          </div>
        </Card.Header>
        <Card.Content>
          <div className="text-2xl font-bold">573</div>
          <p className="text-xs text-green-600">+201 desde el mes pasado</p>
        </Card.Content>
      </Card>
    </div>
  </div>
);

// Playground interactivo
export const Playground: Story<{
  showHeader: boolean;
  showContent: boolean;
  showFooter: boolean;
  title: string;
  description: string;
  contentText: string;
  width: 'sm' | 'md' | 'lg' | 'full';
}> = ({
  showHeader,
  showContent,
  showFooter,
  title,
  description,
  contentText,
  width,
}) => {
  const widthClasses = {
    sm: 'w-64',
    md: 'w-96',
    lg: 'w-[32rem]',
    full: 'w-full max-w-2xl',
  };

  return (
    <div className="flex justify-center p-8">
      <Card className={widthClasses[width]}>
        {showHeader && (
          <Card.Header>
            <Card.Title>{title}</Card.Title>
            <Card.Description>{description}</Card.Description>
          </Card.Header>
        )}
        {showContent && (
          <Card.Content>
            <p>{contentText}</p>
          </Card.Content>
        )}
        {showFooter && (
          <Card.Footer>
            <button className="rounded bg-primary px-4 py-2 text-primary-foreground">
              Acción Principal
            </button>
            <button className="rounded border px-4 py-2">Cancelar</button>
          </Card.Footer>
        )}
      </Card>
    </div>
  );
};

Playground.args = {
  showHeader: true,
  showContent: true,
  showFooter: true,
  title: 'Título del Playground',
  description: 'Descripción del playground para la tarjeta.',
  contentText:
    'Este es el contenido del playground. Puedes modificar todos los elementos desde los controles.',
  width: 'md',
};

Playground.argTypes = {
  showHeader: {
    control: { type: 'boolean' },
  },
  showContent: {
    control: { type: 'boolean' },
  },
  showFooter: {
    control: { type: 'boolean' },
  },
  title: {
    control: { type: 'text' },
  },
  description: {
    control: { type: 'text' },
  },
  contentText: {
    control: { type: 'text' },
  },
  width: {
    options: ['sm', 'md', 'lg', 'full'],
    control: { type: 'select' },
  },
};
