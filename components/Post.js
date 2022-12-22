import Link from 'next/link';
import ArrowIcon from './ArrowIcon';

export default function Post(post) {
  return (
    <li
      key={post.filePath}
      className="mb-4 backdrop-blur-lg bg-gray-500 dark:bg-black dark:bg-opacity-30 dark:hover:bg-opacity-50 bg-opacity-10 hover:bg-opacity-20 transition"
    >
      <Link
        legacyBehavior
        as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
        href={`/posts/[slug]`}
      >
        <a className="py-6 lg:py-8 px-2 lg:px-8 block focus:outline-none focus:ring-4">
          <div className="flex flex-row">
            <div className="basis-3/12">
              <img src="https://picsum.photos/180/180" />
            </div>
            <div className="basis-9/12">
              {post.data.date && (
                <p className="uppercase mb-3 font-bold opacity-60">
                  {post.data.date}
                </p>
              )}
              <h2 className="text-2xl md:text-3xl">{post.data.title}</h2>
              {post.data.description && (
                <p className="mt-3 text-lg opacity-60">
                  {post.data.description}
                </p>
              )}
              <ArrowIcon className="mt-4" />
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
}
