import {useRouter} from 'next/router';

export default function () {
  const {query} = useRouter()

  return (
    <div>
      <h1>User ID {query.id}</h1>
    </div>
  );
}