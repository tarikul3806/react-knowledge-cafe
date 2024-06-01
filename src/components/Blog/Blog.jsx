import PropTypes from 'prop-types';
import { FaBookmark  } from 'react-icons/fa';

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {title, cover, author, author_img, reading_time, posted_date, hashtags} = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-ful mb-8' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-2 text-2xl text-red-400'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl my-4">{title}</h2>
            <p><span><a href="">{hashtags}</a></span></p>
            <button onClick={() => handleMarkAsRead(reading_time)} className='text-purple-600 font-bold underline'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;