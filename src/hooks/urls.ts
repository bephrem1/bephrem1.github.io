import { useRouter } from 'next/router';

export const useIsOnPath = (path: string) => {
  const router = useRouter();

  return router.pathname === path;
};
