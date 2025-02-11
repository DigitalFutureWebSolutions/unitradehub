import '../styles/globals.css';
import Head from 'next/head';
import Layout from '../components/Layout';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        {/* External stylesheets */}
        <link
          href="https://cdn.prod.website-files.com/65b6a1a4a0e2af577bccce96/css/blum-deba4c.webflow.c7f330fd6.css"
          rel="stylesheet"
          type="text/css"
        />
        
        {/* Preconnecting to fonts */}
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />

        {/* Google Fonts with font-display */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        {/* Custom inline styles */}
        <style jsx global>{`
          body {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
        `}</style>
      </Head>

      {/* Asynchronous script loading */}
      <Script
        src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=65b6a1a4a0e2af577bccce96"
        strategy="afterInteractive"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
        crossOrigin="anonymous"
      />
      <Script
        src="https://cdn.prod.website-files.com/65b6a1a4a0e2af577bccce96/js/webflow.5eb91b5d2.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.prod.website-files.com/65b6a1a4a0e2af577bccce96/js/webflow.js"
        strategy="afterInteractive"
      />

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
