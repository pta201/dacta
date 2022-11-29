import "../styles/globals.css";
import { DefaultLayout } from "../components/layout";
import { ChakraProvider } from "@chakra-ui/react";
function MyApp({ Component, pageProps }) {
  const Layout = Component.layout || DefaultLayout;
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
