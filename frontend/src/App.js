import { Layout } from "antd";
import { Header } from "./containers/Header";

function App() {
  return (
    <Layout>
      <Layout.Header style={{bgcolor: "white"}}>
        <Header />
      </Layout.Header>
      <Layout.Content>Content</Layout.Content>
      <Layout.Footer>Footer</Layout.Footer>
    </Layout>
  );
}

export default App;
