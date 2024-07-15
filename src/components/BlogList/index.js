import BlogItem from '../BlogItem'

import './index.css'

const BlogsList = props => {
  const {blogsList} = props

  return (
    <ul className="blog-list">
      {blogsList.map(eachBlog => (
        <BlogItem key={eachBlog.id}
      ))}  
    </ul>
  )     
}

export default BlogList
