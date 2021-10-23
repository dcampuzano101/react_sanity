import { client, urlFor } from '../sanityClient';
// import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';

// const useStyles = makeStyles({
//   postThumbStyles: {
//     width: '300px',
//     height: '300px',
//     marginRight: '15px',
//     marginBottom: '15px',
//     borderRadius: '5px',
//     boxSizing: 'border-box',
//     backgroundSize: 'contain',
//     // backgroundImage: `url(${urlFor(post.mainImage).width(300).height(300)})`,
//     zIndex: '2',
//     opacity: '.9',
//     display: 'flex',
//     alignItems: 'flex-end',
//     justifyContent: 'center',
//     textAlign: 'center',
//   },
//   postBox: {
//     display: 'flex',
//     flexDirection: 'column',
//     width: '300px',
//   },
// });

// why did I need to wrap my customComponent with React.forwardRef??

const PostBox = ({ post }) => {
  // const handleHover = (e) => {
  //   e.currentTarget.children[0].style.display = 'inline-block';
  // };

  // const handleExit = (e) => {
  //   e.currentTarget.children[0].style.display = 'none';
  // };

  const postThumbStyles = {
    width: '300px',
    height: '300px',
    backgroundImage: `url(${urlFor(post.mainImage).width(300).height(300)})`,
  };
  return (
    <div className='flex'>
      <div
        key={post._id}
        className='shadow'
        style={postThumbStyles}
        // onMouseOver={(e) => handleHover(e)}
        // onMouseOut={(e) => handleExit(e)}
      >
        <div id='text'>{post.postTitle}</div>
      </div>
    </div>
  );
};

export default PostBox;
