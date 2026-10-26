import { DependenciesProvider } from "@dotto/queries";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type ReactNode, useState } from "react";
import { createDependencies } from "./dependencies";

export function AppProviders({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  const [dependencies] = useState(createDependencies);
  return (
    <QueryClientProvider client={queryClient}>
      <DependenciesProvider value={dependencies}>{children}</DependenciesProvider>
    </QueryClientProvider>
  );
}
