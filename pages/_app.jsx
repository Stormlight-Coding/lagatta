import '../styles/index.scss'

import App, { Container } from 'next/app'
import React from 'react'

import Layout from '../components/Layout'

class MyApp extends App {
  constructor(props) {
    super(props);
    this.state = {
      support: false,
      menu: false
    };
  }

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  setMenu(menu) {
    this.setState({ menu });
  }

  setSupport(support) {
    this.setState({ support });
  }

  render() {
    const { menu, support } = this.state;
    const { Component, pageProps, router } = this.props;
    return (
      <Container>
        <Layout
          menu={menu}
          setMenu={this.setMenu.bind(this)}
          support={support}
          setSupport={this.setSupport.bind(this)}
        >
          <Component
            {...pageProps}
            key={router.route}
            menu={menu}
            setMenu={this.setMenu.bind(this)}
            support={support}
            setSupport={this.setSupport.bind(this)}
          />
        </Layout>
      </Container>
    );
  }
}

export default MyApp;
