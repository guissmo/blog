export default function Footer() {
  return (
    <div style={{ height: 200, paddingTop: 50 }}>
      <a href="#">Back to Top</a> |{" "}
      <a href={`${import.meta.env.BASE_URL}/rss.xml`}>Blog RSS Feed</a>
    </div>
  );
}
