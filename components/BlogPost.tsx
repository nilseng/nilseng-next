import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";

interface IProps {
  date?: string;
  title?: string;
  content: string[];
  picture?: StaticImageData;
  link?: string;
  externalUrl?: string;
  id?: string;
}

const BlogPost = ({ date, title, content, picture, link, externalUrl, id }: IProps) => {
  const router = useRouter();

  return (
    <div
      id={id}
      className="w-full relative sm:p-10 p-6 my-8"
      onClick={() => (link ? router.push(link) : null)}
      style={{
        cursor: link ? "pointer" : "",
        backgroundColor: "rgba(52, 58, 64, 0.4)",
      }}
    >
      {title && <h5 className="text-xl text-gray-50 mb-2">{title}</h5>}
      {date && <p className="text-sm text-gray-500">{new Date(date).toDateString()}</p>}
      {picture && (
        <div className="mt-4">
          <Image
            src={picture}
            quality={100}
            placeholder="blur"
            lazyBoundary="500px"
            className="pb-8"
            alt={`${title} image`}
          />
        </div>
      )}
      <div className="text-gray-50 text-sm mt-4">
        {content.map((paragraph, i) => (
          <p key={i} className="py-2">
            {paragraph}
          </p>
        ))}
      </div>
      {externalUrl && (
        <a href={externalUrl} target="_blank" rel="noreferrer" className="text-gray-50 text-xs">
          {externalUrl}
        </a>
      )}
    </div>
  );
};

export default BlogPost;
