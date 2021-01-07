import Head from "next/head";
import React, { ReactElement, ReactNode } from "react";
import { Navbar } from "react-bootstrap";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({
  children,
  title = "This is the default title",
}: Props): ReactElement => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <Navbar bg="dark" expand="lg" fixed="top" variant="dark">
        <Navbar.Brand href="#">Home</Navbar.Brand>
      </Navbar>
    </header>
    <main style={{ paddingTop: "60px" }}>{children}</main>
  </div>
);

export default Layout;
