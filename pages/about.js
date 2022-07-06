import Link from 'next/link';
import fetch from "isomorphic-unfetch";
import Layout from '../components/Layout';
import { Component } from 'react';

export default class About extends Component {

  static async getInitialProps() {
    const res = await fetch("https://api.github.com/users/teten-nugraha");
    const data = await res.json();

    return { user : data };
  }

  render() {

    const { user } = this.props;

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