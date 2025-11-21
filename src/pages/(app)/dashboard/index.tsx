import { Building2, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { useSessionStore } from '@/modules/auth/stores/sessionStore';

const DashboardPage = () => {
  const { user } = useSessionStore();

  return (
    <div className="container mx-auto py-8">
      {/* Header con Bienvenida */}
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">
          Bienvenido, {user?.username || 'Usuario'}
        </h1>
      </div>

      {/* Sección de Accesos Rápidos */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold">Accesos Rápidos</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Card Clientes */}
          <Card className="flex flex-col">
            <Card.Header>
              <div className="flex items-center gap-2">
                <Building2 className="size-6 text-primary" />
                <Card.Title>Clientes</Card.Title>
              </div>
              <Card.Description>
                Gestiona los clientes del sistema
              </Card.Description>
            </Card.Header>
            <Card.Content className="flex-1">
              <p className="text-sm text-muted-foreground">
                Crea, edita, visualiza y elimina clientes. Administra toda la
                información de tus clientes en un solo lugar.
              </p>
            </Card.Content>
            <Card.Footer>
              <Button asChild className="w-full">
                <Link to="/clients">Ver Clientes</Link>
              </Button>
            </Card.Footer>
          </Card>

          {/* Card Usuarios */}
          <Card className="flex flex-col">
            <Card.Header>
              <div className="flex items-center gap-2">
                <Users className="size-6 text-primary" />
                <Card.Title>Usuarios</Card.Title>
              </div>
              <Card.Description>
                Administra los usuarios del sistema
              </Card.Description>
            </Card.Header>
            <Card.Content className="flex-1">
              <p className="text-sm text-muted-foreground">
                Crea, edita, visualiza y elimina usuarios. Asigna roles y
                gestiona permisos de acceso.
              </p>
            </Card.Content>
            <Card.Footer>
              <Button asChild className="w-full">
                <Link to="/users">Ver Usuarios</Link>
              </Button>
            </Card.Footer>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
