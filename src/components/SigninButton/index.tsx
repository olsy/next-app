'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

const SigninButton = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return null;
  }

  if (session?.user) {
    return (
      <div>
        <span>{session.user.name}</span>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }

  return <button onClick={() => signIn()}>Sign In</button>;
};

export default SigninButton;
