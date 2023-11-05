export default function Head({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  return (
    <head>
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="title" content={title ? title : "Jared Asuncion"} />
      <meta
        name="description"
        content={
          description ? description : "This is Jared Asuncion's website."
        }
      />
      <meta name="og:title" content={title ? title : "Jared Asuncion"} />
      <meta
        name="og:description"
        content={
          description ? description : "This is Jared Asuncion's website."
        }
      />
      <meta name="author" content="Jared Asuncion" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/blog/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/blog/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/blog/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/blog/favicon/site.webmanifest" />
    </head>
  );
}
