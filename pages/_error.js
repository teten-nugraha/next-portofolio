import Layout from '../components/Layout';

export default ({ statusCode }) => (
  <Layout title={"Error !!!"}>
    {statusCode
      ? `Could not load your user data: Status code ${statusCode}`
      : `Couldn't get that page, sorry!`}
  </Layout>
);