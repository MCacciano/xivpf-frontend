import { useEffect } from 'react';
import { useRouter } from 'next/router';
import useUser from '@/hooks/useUser';

const UserDashboard = () => {
  const router = useRouter();

  const {
    state: { user },
  } = useUser();

  useEffect(() => {
    if (user) {
      if (router.query.name !== user?.name.toLowerCase().replace(/-/g, ' ')) {
        router.push(`/user/${router.query.name}`);
      }
    } else {
      router.push('/');
    }
  }, [router, user]);

  if (!user) return null;

  const { name } = user;

  return (
    <div>
      <h1>Private User Dashboard for: {name}</h1>
    </div>
  );
};

export default UserDashboard;
