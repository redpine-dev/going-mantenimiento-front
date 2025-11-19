import { Link } from 'react-router-dom';

import { Button } from '../components/ui/Button';

function NotFound() {
  return (
    <main className="grid h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-red-600 dark:text-orange-500">
          404
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
          Página no encontrada
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600 dark:text-white/50">
          Lo sentimos, no pudimos encontrar la página que estas buscando.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild variant="default">
            <Link to="/">Ir a Inicio</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}

export default NotFound;
