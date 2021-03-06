import { useState } from 'react';
import useUser from '@/hooks/useUser';

import GroupList from '@/components/GroupList';

const fetchGroups = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/groups`);
  const { data } = await res.json();
  return data;
};

export default function Home({ data }) {
  const {
    state: { user, token },
  } = useUser();

  const [groups, setGroups] = useState(data || []);

  // TODO: this handles joing and leave, split it
  // TODO: it's respective functions
  const handleOnJoinGroup = async (id) => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/groups/${id}/join`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      setGroups(await fetchGroups());
    } catch (err) {
      console.error(`Error: ${err}`);
    }
  };

  return (
    <div className='flex flex-col space-y-6 p-10 mx-auto max-w-screen-md'>
      <GroupList user={user} groups={groups} onJoinGroup={handleOnJoinGroup} />
    </div>
  );
}

export const getServerSideProps = async () => ({
  props: { data: await fetchGroups() },
});
