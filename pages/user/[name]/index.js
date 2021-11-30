import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const UserPage = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  // i need to be able to fetch the public facing user details here

  if (!user) return null;

  return (
    <div>
      <h1>Public User page</h1>
    </div>
  );
};

export default UserPage;
