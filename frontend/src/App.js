import { Layout } from "antd";
import { Header, Content } from "./containers";

function App() {
  return (
    <Layout>
      <Layout.Header>
        <Header />
      </Layout.Header>
      <Layout.Content style={{ width: "70%", margin: "auto" }}>
        <Content />
      </Layout.Content>
      <Layout.Footer>Footer</Layout.Footer>
    </Layout>
  );
}

export default App;
