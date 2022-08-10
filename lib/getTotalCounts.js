import axios from "axios";

export default async function getTotalCounts() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/sitemap/v1/totalpages`
  );
  return (await res?.data) ?? {};
}
