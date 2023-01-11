import groq from "groq";

const calcDocType = ({ slugArray }) => {
  const firstSlug = slugArray?.[0];

  if (firstSlug == "about" && slugArray?.length == 1) {
    return "about";
  }

  if (
    firstSlug == "project" ||
    firstSlug == "projects" ||
    firstSlug == "work"
  ) {
    return "project";
  }

  return "home";
};

export default function getQueryFromSlug({ slug: slugArray = [] }) {
  const docQuery = {
    about: groq`*[_type == "about"][0]{
      ...,
      heroText[] {
        ...,
        markDefs[]{
          internalLink->{
            title,
            slug
          }
        }
      }
    }`,
    home: groq`*[_type == "home"][0]{
      ..., 
      featuredProjectLink->{slug},
      featuredProjectLink2->{slug},
      featuredProject {
        ..., 
        image {
          ...,
          asset->
        }
      },
      featuredProject2 {
        ..., 
        image {
          ...,
          asset->
        }
      },
      "heroText": *[_type == "about"][0].heroText,
      projects[]{
        ...,
        linkedPage->{
          title,
          slug,
          tags,
          blurb,
          blurbLineTwo,
          featuredImage{
            ...,
            image{
              ...,
              asset->
            }
          }
        }
      }
    }`,
    project: groq`*[_type == "project" && slug.current == $slug][0]{
      ...,
      featuredImage{
        ...,
        image{
          ...,
          asset->
        }
      },
      blocks[]{
        ...,
        _type == "singleImage" => {
          ...,
          image {
            ...,
            image {
              ...,
              asset->
              
            }
          }
        },
        _type == 'projectText' => {
          ...,
          text[]{
            ...,
            markDefs[]{
              ...
              internalLink{
                title,
                slug
              }
            }
          }
        },
        _type == 'imageGrid' => {
          ...,
          images[]{
            ...,
            image {
              ...,
              asset->
            }
          }
        }
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

  const docType = calcDocType({
    slugArray,
  });

  const queryParams = { slug: `/${slugArray.join("/")}` };

  return {
    docType,
    queryParams,
    query: docQuery[docType],
  };
}
