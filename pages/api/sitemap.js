export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/xml');
  res.write(`<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://tecno-educacion.com/</loc>
    </url>
    <url>
      <loc>https://tecno-educacion.com/about</loc>
    </url>
    <url>
      <loc>https://tecno-educacion.com/contact</loc>
    </url>
  </urlset>`);
  res.end();
}
