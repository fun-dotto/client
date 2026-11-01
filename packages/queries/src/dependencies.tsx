import type { GetAppVersionUseCase } from "@dotto/core/application";
import { createContext, type ReactNode, useContext } from "react";

/** 各アプリの Composition Root（di/）が組み立てて注入する UseCase。 */
export type Dependencies = {
  getAppVersionUseCase: GetAppVersionUseCase;
};

const DependenciesContext = createContext<Dependencies | null>(null);

export function DependenciesProvider({
  value,
  children,
}: {
  value: Dependencies;
  children: ReactNode;
}) {
  return <DependenciesContext value={value}>{children}</DependenciesContext>;
}

export function useDependencies(): Dependencies {
  const dependencies = useContext(DependenciesContext);
  if (dependencies === null) {
    throw new Error("DependenciesProvider が見つかりません");
  }
  return dependencies;
}
