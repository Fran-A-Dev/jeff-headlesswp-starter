export default function getSitemapPages(count, path) {
  const items = [];
  let sitemapPerPage = process.env.NEXT_PUBLIC_ITEM_PER_SITEMAP; //1000
  for (let i = 1; i <= Math.ceil(count / sitemapPerPage); i++) {
    let url = `${process.env.NEXT_PUBLIC_FRONTEND_URL}/sitemap/${path}${i}.xml`;
    items.push(
      ` 
        <sitemap>
           <loc>
              ${url}
          </loc>
      </sitemap>
      `
    );
  }
  return items.join("");
}
