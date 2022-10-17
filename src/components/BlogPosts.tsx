import axios from 'axios';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

const ToText = (node: string) => {
  const tag = document.createElement('div');
  tag.innerHTML = node;
  node = tag.innerText;
  return node;
};

type PostType = {
  link: string;
  thumbnail: string;
  title: string;
  content: string;
  pubDate: string;
};

const Post = (post: PostType, index: number) => (
  <div
    className='p-6 font-primary transition hover:scale-105 lg:w-1/3'
    key={index}
  >
    <div className='mx-auto max-w-lg text-white'>
      <a href={post.link} target='_blank' rel='noreferrer'>
        <div className='mb-5 max-w-sm rounded-lg border border-gray-800 bg-gray-800 shadow-md'>
          <img alt='' className='h-[200px] rounded-t-lg' src={post.thumbnail} />
          <div className='p-5 '>
            <h5 className='mb-2 truncate text-xl font-bold tracking-tight'>
              {post.title}
            </h5>
            <p className='mb-3 h-[10rem] overflow-hidden text-ellipsis text-sm font-normal leading-relaxed'>
              {ToText(post.content.substring(0, 500))}...
            </p>
            <div className='mt-4 flex'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='h-4 w-4'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z'
                />
              </svg>
              <span className='text-muted ml-2 text-xs'>
                {dayjs(post.pubDate).format('MMM DD, YYYY')}
              </span>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
);

const BlogPosts = () => {
  const [posts, setPosts] = useState<any[]>();
  const URL =
    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mapprotocolofficial';

  useEffect(() => {
    if (!posts) {
      axios.get(URL).then((res) => {
        setPosts(res.data.items);
      });
    }
  }, [posts]);
  if (!posts) {
    return <div className=''></div>;
  }

  return (
    <div className='flex flex-col lg:flex-row'>
      {posts.slice(0, 3).map((item, index) => {
        return Post(item, index);
      })}
    </div>
  );
};

export default BlogPosts;
