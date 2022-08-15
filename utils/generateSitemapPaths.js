export default function generateSitemapPaths(array) {
  let frontendUrl = process.env.NEXT_PUBLIC_FRONTEND_URL;
  const items = array.map(
    (item) =>
      `
            <url>
                <loc>${frontendUrl + item?.url}</loc>
                ${
                  item?.post_modified_date
                    ? `<lastmod>${
                        new Date(item?.post_modified_date)
                          .toISOString()
                          .split("T")[0]
                      }</lastmod>`
                    : ""
                }
            </url>
            `
  );
  return items.join("");
}
