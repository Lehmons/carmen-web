import sanityClient from "@sanity/client";

const sanity = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  // If your dataset is private you need to add a read token.
  // You can mint one at https://manage.sanity.io,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: "2021-03-25",
  useCdn: false,
});

const getPostBySlug = async (slug) => {
  const query = `*[slug.current == '${slug}']`;
  const data = await sanity.fetch(query);
  if (data) {
    return data;
  }
  return null;
};

export default async (req, res) => {
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  const validNoSlugTypes = ["home"];

  if (req.query.secret !== "secret" || !req.query._type) {
    return res.status(401).json({ message: "Invalid token" });
  }

  const { _type, slug } = req.query;

  // Fetch the headless CMS to check if the provided `slug` exists
  // getPostBySlug would implement the required fetching logic to the headless CMS
  const post = await getPostBySlug(slug);

  // If the slug doesn't exist prevent preview mode from being enabled
  if (!post && !validNoSlugTypes.includes(_type)) {
    return res.status(401).json({ message: "Invalid slug" });
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({});

  if (_type === "project" && post?.length) {
    res.writeHead(307, { Location: post[0]?.slug?.current });
    res.end();
    return;
  }

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  // res.redirect(post.slug);
  res.writeHead(307, { Location: `/` });
  res.end();
};
