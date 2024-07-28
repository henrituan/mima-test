import { Slot } from 'expo-router';

import { SessionProvider } from '@/contexts/auth.context';

export default function Root() {
  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
}
