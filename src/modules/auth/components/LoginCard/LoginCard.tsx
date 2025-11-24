import { Eye, EyeOff } from 'lucide-react';
import React, { useState } from 'react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { login } from '@/modules/auth/services/login';
import { onSetSession } from '@/modules/auth/stores/session/actions/onSetSession';

const LoginCard = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const user = await login(username, password);

      if (user) {
        onSetSession(user);
        toast.success(`Te damos la bienvenida ${username}`);
      } else {
        toast.error('Usuario o contraseña incorrectos');
      }
    } catch (error) {
      console.error(error);
      toast.error('No se pudo conectar con el servidor');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      {/* ThemeToggle posicionado en la esquina superior derecha */}
      <div className="absolute right-4 top-4 z-20">
        <ThemeToggle />
      </div>
      {/* Imagen de fondo */}
      {/* <img
        src="/bg-hero.png"
        alt="Productos alimentarios de calidad"
        className="absolute inset-0 z-0 size-full object-cover opacity-40"
      /> */}
      {/* Overlay opcional para oscurecer más */}
      <div className="absolute inset-0 z-0" />

      {/* Card centrado con columnas responsivas */}
      <Card className="relative z-10 mx-4 w-full max-w-4xl overflow-hidden shadow-2xl md:grid md:grid-cols-2">
        {/* Columna/Sección superior: branding */}
        <div className="flex flex-col items-center justify-center bg-primary p-6 md:p-16">
          {/* <img
            src={'/icons/favicon.png'}
            alt="logo"
            className="mx-auto mb-3 h-auto w-12 md:mb-4 md:w-32"
          /> */}
          <h1 className="mb-1.5 cursor-default text-2xl font-bold tracking-tight text-white md:mb-2 md:text-4xl">
            Go <span className="text-secondary">Ingeniería</span>
          </h1>
          <p className="cursor-default text-center text-sm text-white md:text-base">
            Mantenimiento
          </p>
        </div>

        {/* Columna/Sección inferior: formulario */}
        <Card.Content className="flex items-center justify-center p-8 md:p-10">
          <div className="w-full max-w-md">
            <Card.Header className="mb-6 p-0">
              <Card.Title className="text-center text-2xl font-semibold text-primary">
                Iniciar Sesión
              </Card.Title>
              <Card.Description className="text-center">
                Accede a tu cuenta
              </Card.Description>
            </Card.Header>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-primary">
                  Usuario
                </Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Tu nombre de usuario"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-primary">
                  Contraseña
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Tu contraseña"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    className="pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-1 top-1/2 size-7 -translate-y-1/2 text-muted-foreground hover:text-primary"
                  >
                    {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                  </Button>
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
              </Button>
            </form>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};

export { LoginCard };
