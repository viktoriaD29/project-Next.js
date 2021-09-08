import {useState} from 'react'
import Link from 'next/link';

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Tom' },
    { id: 2, name: 'Ann' },
  ]);
  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              <a>{user.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users