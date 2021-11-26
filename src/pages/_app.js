import Script from "next/script";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Script src="https://unpkg.com/@themesberg/flowbite@latest/dist/flowbite.bundle.js" />
    </>
  );
}

export default MyApp;
