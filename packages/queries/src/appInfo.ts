import { useQuery } from "@tanstack/react-query";
import { useDependencies } from "./dependencies";

export const appInfoQueryKeys = {
  version: ["appInfo", "version"] as const,
};

export function useAppVersion() {
  const { getAppVersionUseCase } = useDependencies();
  return useQuery({
    queryKey: appInfoQueryKeys.version,
    queryFn: () => getAppVersionUseCase.execute(),
    // 実行中に変わらない
    staleTime: Number.POSITIVE_INFINITY,
  });
}
