export const NotContactSelected = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 p-4 text-center">
      <div className="rounded-full bg-muted p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8 text-muted-foreground"
        >
          <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
          <rect width="18" height="18" x="3" y="4" rx="2" />
          <circle cx="12" cy="10" r="2" />
          <line x1="8" x2="16" y1="2" y2="2" />
        </svg>
      </div>
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">No hay contacto seleccionado</h2>
        <p className="text-sm text-muted-foreground">
          Selecciona un contacto de la lista para comenzar una conversación
        </p>
      </div>
    </div>
  );
};
