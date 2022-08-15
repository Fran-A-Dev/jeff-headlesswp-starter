import getSitemapPages from "../lib/getSitemapPages";
import getTotalCounts from "./../lib/getTotalCounts";
export default function SitemapIndexPage() {
  return null;
}
export async function getServerSideProps({ res }) {
  const details = await getTotalCounts();
  const { category, tag, post, page, user, next } = details;
  const categoryPaths = getSitemapPages(category, "category_sitemap");
  const tagPaths = getSitemapPages(tag, "tag_sitemap");
  const postPaths = getSitemapPages(post, "post_sitemap");
  const pagePaths = getSitemapPages(page, "page_sitemap");
  const authorPaths = getSitemapPages(user, "author_sitemap");
  const nextPaths = getSitemapPages(next, "about_sitemap");

  let sitemapIndex = `<?xml version='1.0' encoding='UTF-8'?>
    <sitemapindex xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
             xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/siteindex.xsd"
             xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${nextPaths}
       ${pagePaths}
       ${authorPaths}
       ${categoryPaths}
       ${tagPaths}
       ${postPaths}
    </sitemapindex>`;
  res.setHeader("Content-Type", "text/xml; charset=utf-8");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=600, stale-while-revalidate=600"
  );
  res.write(sitemapIndex);
  res.end();
  return { props: {} };
}
