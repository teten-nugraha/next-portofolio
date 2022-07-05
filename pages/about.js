import Link from 'next/link';
import Layout from '../components/Layout';

export default () => (
  <Layout title="About Me">
    <h1>About</h1>
    <Link href='/'>
      <a>Go to home</a>
    </Link>
    <p>A Javascript programmer</p>
    <img src="/static/js-logo.png" alt="js" height="200px" />
  </Layout>
);