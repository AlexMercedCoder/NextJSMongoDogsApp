import "../styles/globals.css";
import { RecoilRoot } from "recoil";
import Layout from "../components/layout";

// Wrap our function in the RecoilRoot Provider which will share state between pages
function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}

export default MyApp;
