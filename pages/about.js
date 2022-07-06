import Link from 'next/link';
import fetch from "isomorphic-unfetch";
import Layout from '../components/Layout';
import { Component } from 'react';
import Error from './_error';

export default class About extends Component {

  static async getInitialProps() {
    const res = await fetch("https://api.github.com/users/teten-nugraha");
    const statusCode = res.status > 200 ? res.status : false;
    const data = await res.json();

    return { user : data, statusCode };
  }

  render() {

    const { user, statusCode } = this.props;

    if(statusCode) {
      return <Error statusCode={statusCode} />
    }

    return (
      <Layout title="About Me">
        <p>{user.name}</p>
        <Link href='/'>
          <a>Go to home</a>
        </Link>
        <p>A Javascript programmer</p>
        <img src={user.avatar_url} alt="js" height="200px" />
      </Layout>
    );
  }
}