import { useRouter } from 'next/router'
import MainContainer from '../../components/MainContainer'
// import styles from '../styles/user.module.scss'; className={styles.user}

export default function Users({user}) {
  const { query } = useRouter();

  return (
    <MainContainer keywords={user.name}>
      <h1>User ID {query.id}</h1>
      <div>User name is {user.name}</div>
    </MainContainer>
  );
}

export async function getServerSideProps({ params }) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const user = await response.json();
  return {
    props: {user},
  };
}
