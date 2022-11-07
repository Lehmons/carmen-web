import groq from "groq";

export default function getQueryFromSlug({ slug: slugArray = [] }) {
  const docQuery = {
    home: groq`*[_type == "home"][0]{title}`,
    page: groq`*[_type == "page" && slug.current == $slug][0]{
      ...,
      blocks[]{
        ...,
        _type == 'imageTextBlock' => {
          ...,
          image[0]{
            image {
              ...,
              asset->
            }
          },
        },
        _type == 'imageBlock' => {
          ...,
          image {
            ...,
            asset->
          }
        },
        _type == 'textBlock' => {
          ...,
          linkedPage{
            ...,
            page->{title, slug}
          },
          paragraph[]{
            ...,
            markDefs[]{
              ...,
              _type == "link" => {
                "type": @.internalLink->_type,
                "internalLink": @.internalLink->slug
              }
            }
          },
        },
      }
    }`,
  };

  if (slugArray?.length === 0) {
    return {
      docType: "home",
      queryParams: {},
      query: docQuery.home,
    };
  }

  const queryParams = { slug: `/${slugArray.join("/")}` };

  return {
    docType: "page",
    queryParams,
    query: docQuery.page,
  };
}
