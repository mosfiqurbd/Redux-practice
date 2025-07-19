import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../features/posts/postsSlice"; 

export default function Posts() {
    const {isLoading,isError,error,posts} = useSelector((state)=>state.posts
  );
  const dispatch = useDispatch();
  useEffect(()=>{
 dispatch(fetchPosts());
  },[dispatch]);
let content;
if(isLoading){
  content = <p>Loading...</p>;
}
if(!isLoading && isError) {
  content = <h1>Something wrong happened - {error}</h1>;
}
if(!isLoading && !isError){
  if(posts.length > 0) {
content = (
                <ul>
                    {posts.map((post) => (
                        <li
                            key={post.id}
                            style={{
                                listStyleType: "sqaure",
                            }}
                        >
                            {post.title}
                        </li>
                    ))}
                </ul>
            );
  } else {
    content = <h1>No posts found</h1>;
  }
}
    return (
      <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
    {content}
      </div>
    );
  }