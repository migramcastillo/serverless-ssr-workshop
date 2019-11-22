import Head from "next/head";
import NavHeader from "./nav-header";

const Layout = props => {
  return (
    <div>
      <Head>
        <title>Mi Serverless App</title>
        <link
          href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
          rel="stylesheet"
        ></link>
      </Head>
      <NavHeader />
      {props.children}
    </div>
  );
};

export default Layout;
