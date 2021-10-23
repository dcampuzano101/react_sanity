import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { client, urlFor } from '../sanityClient';
import PostBox from './PostBox';

const AllPosts = (posts) => {
  const postsQuery = `*[_type == 'post']{
    _id,
    postTitle,
    slug,
    mainImage
  }`;
  const [postsData, setPosts] = useState(null);

  useEffect(() => {
    client
      .fetch(postsQuery)
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);
  console.log(postsData);
  return (
    <div className='max-w-full flex justify-center h-full'>
      <div className='w-5/6 h-full border-4 border-black p-8'>
        <div className='max-h-full flex flex-row flex-wrap overscroll-contain overflow-y-auto'>
          {postsData?.length > 0 &&
            postsData.map((post) => (
              <Link
                key={post._id}
                href='/'
                className='w-1/3 flex justify-evenly p-5'
              >
                <PostBox key={post._id} post={post} />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AllPosts;
