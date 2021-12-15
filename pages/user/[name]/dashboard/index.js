import { useEffect } from 'react';
import { useRouter } from 'next/router';

import useUser from '@/hooks/useUser';

import Button from '@/components/Button';

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
    }
  }, [router, user]);

  const handleOnCreateGroup = () => {};

  if (!user) return null;

  const { name } = user;

  return (
    <div>
      <h1>Private User Dashboard for: {name}</h1>
      <Button intent='primary' onClick={handleOnCreateGroup}>
        Create
      </Button>
    </div>
  );
};

export default UserDashboard;
