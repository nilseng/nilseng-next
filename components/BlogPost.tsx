import Image from "next/image";
import { useRouter } from "next/router";

interface IProps {
  date?: string;
  title?: string;
  content: string[];
  picture?: string;
  link?: string;
  externalUrl?: string;
}

const BlogPost = ({
  date,
  title,
  content,
  picture,
  link,
  externalUrl,
}: IProps) => {
  const router = useRouter();

  return (
    <div
      className="w-full relative sm:p-10 p-6 my-8"
      onClick={() => (link ? router.push(link) : null)}
      style={{
        cursor: link ? "pointer" : "",
        backgroundColor: "rgba(52, 58, 64, 0.4)",
      }}
    >
      {title && <h5 className="text-xl text-gray-50 mb-2">{title}</h5>}
      {date && (
        <p className="text-sm text-gray-500">{new Date(date).toDateString()}</p>
      )}
      {picture && (
        <div className="relative image-container mt-4">
          <Image
            src={picture}
            className="image pb-8"
            alt={`${title} image`}
            layout="fill"
          />
        </div>
      )}
      <div className="text-gray-50 mt-4">
        {content.map((paragraph, i) => (
          <p key={i} className="py-2">
            {paragraph}
          </p>
        ))}
      </div>
      {externalUrl && (
        <a
          href={externalUrl}
          target="_blank"
          rel="noreferrer"
          className="text-sm"
        >
          {externalUrl}
        </a>
      )}
    </div>
  );
};

export default BlogPost;
