import { useDispatch } from "react-redux";
import moment from "moment";
import { useState } from "react";
import { deletePost,likePost } from "../actions/posts";

export default function DiaryEntry({ post, setCurrentId }) {
  const [isActive, setActive] = useState(post.like);
  
console.log(isActive, "this is isActive in DiaryEntry.js");
  


  const dispatch = useDispatch();

  return !post ? (
    <>
      <div className="flex justify-center m-32">Loading .....</div>
    </>
  ) : (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="mt-1 text-gray-500 text-sm">
                  {moment(post.createdAt).format("MMM Do YY")}
                </span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  {post.title}
                </h2>
                <p className="leading-relaxed">{post.message}</p>
                <a className="text-yellow-500 inline-flex items-center mt-4">
                  Expand
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                <div className="flex  gap-2 mt-2 ">
                  <button
                    class="btn btn-active btn-accent  btn-sm"
                    onClick={() => {
                      console.log("button click wtf");
                      setCurrentId(post._id);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    class="btn btn-active btn-ghost  btn-sm"
                    onClick={() => dispatch(deletePost(post._id))}
                  >
                    Delete
                  </button>
                  <div className="inline-flex items-center">
                    <svg
                      aria-hidden="true"
                      class={isActive ? "w-5 h-5 text-yellow-700" : "hidden"}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={() => {
                        dispatch(likePost(post._id));
                       setActive(!isActive);
                      }}
                    >
                      <title>First star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      class={!isActive ? "w-5 h-5 text-grey-400" : "hidden"}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={() => {
                        dispatch(likePost(post._id));
                       setActive(!isActive);
                      }}
                    >
                      <title>Second star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
