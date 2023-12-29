import { personalProjectData } from "../cv";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Head from "../../components/Head";
import style from "../styles/global.module.css";

<Fragment>
  <html lang="en">
    <head>
      <link
        rel="stylesheet"
        type="text/css"
        href={`${import.meta.env.BASE_URL}/style.css`}
      />
      <link
        rel="sitemap"
        href={`${import.meta.env.BASE_URL}/sitemap-index.xml`}
      />
      <Head />
      <meta name="generator" content={Astro.generator} />
      <title>Jared Asuncion | Work Experience</title>
    </head>
    <body>
      <main>
        <Header />
        <div class="breadcrumbs">
          <a href={`${import.meta.env.BASE_URL}/`}>Home</a>
          <span class="raquo">&raquo;</span>
          <a href="#">Work Experience</a>
        </div>
        {/** Add other UI components here, like common headers and footers. */}
        <h1>Work Experience</h1>
        {/** 2. Rendered HTML will be passed into the default slot. */}
        <div class={style.mainList}>
          <CVSection data={personalProjectData} />
        </div>
        <Footer />
      </main>
    </body>
  </html>
</Fragment>;
