import axios from "axios";

export default async function fetch(query, { variables } = {}) {
  try {
    const res = await axios({
      url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/graphql`,
      method: "post",
      data: {
        query,
        variables,
      },
    });
    const { data } = res.data;
    return data;
  } catch (error) {
    throw new Error("Failed to fetch API");
  }
}
