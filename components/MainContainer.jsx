import Head from 'next/head'
import A from './A'

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={'next.js' + keywords}></meta>
        <title>Main page</title>
      </Head>
      <div className="navbar">
        <A href={'/'} text="Home"></A>
        <A href={'/users'} text="Users"></A>
      </div>
      <div>{children}</div>
    </>
  );
};

export default MainContainer;
