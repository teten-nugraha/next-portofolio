import Link from 'next/link';
import Layout from '../components/Layout';

const Index = () => (
    <Layout title="Contoh Title">
      <h1>Home</h1>
       <Link href='/about'>
         <a>Go to about</a>
       </Link>
      <br />
      <Link href='/hireme'>
        <a>Hire Me</a>
      </Link>
    </Layout>
);

export default Index;