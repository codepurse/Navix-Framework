import "@codepurse/navix/dist/components/styles/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/layout";
import "../style/style.scss";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
