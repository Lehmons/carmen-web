import Link from "next/link";
import customSerializer from "./customSerializer";

export default function serializers(defaultTag) {
  return {
    list: (props) => {
      const { type } = props;
      const bullet = type === "bullet";
      if (bullet) {
        return <ul>{props.children}</ul>;
      }
      return <ol>{props.children}</ol>;
    },
    h6: (props) => <small {...props} />,
    marks: {
      internalLink: ({ mark, children }) => {
        const { slug = {} } = mark;
        const href = `/${slug.current}`;
        return <a href={href}>{children}</a>;
      },
      link: ({ mark, children }) => {
        const { internalLink, externalLink, type, openInNewTab, file } = mark;

        if (file && "url" in file) {
          return (
            <a href={file.url} target="_blank" rel="noopener noreferrer">
              {children}
            </a>
          );
        }

        if (!externalLink) {
          return (
            <Link href={internalLink?.current} scroll={false}>
              <a>{children}</a>
            </Link>
          );
        }

        return externalLink && openInNewTab ? (
          <a href={externalLink} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        ) : (
          <a href={externalLink}>{children}</a>
        );
      },
    },
    listItem: (props) => <li>{props.children}</li>,
    types: {
      link: (props) => customSerializer({ props, defaultTag }),
    },
  };
}
