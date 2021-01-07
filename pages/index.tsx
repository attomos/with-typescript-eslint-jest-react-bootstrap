import { ReactElement } from "react";
import { Container } from "react-bootstrap";
import Layout from "../components/Layout";

function IndexPage(): ReactElement {
  return (
    <Layout title="Next.js TypeScript + ESLint + Jest + react-bootstrap">
      <Container>
        <div className="text-gray">
          Next.js TypeScript + ESLint + Jest + react-bootstrap
        </div>
      </Container>
    </Layout>
  );
}

export default IndexPage;
