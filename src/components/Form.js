import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../actions/posts";
export default function Form({ currentId, setCurrentId }) {
console.log(currentId, "this is currentId in Form.js");

 const [postData, setPostData] = useState({
   title: "",
   message: "",
 });
 const post = useSelector((state) =>
   currentId ? state.posts.find((message) => message._id === currentId) : null
 );
 const dispatch = useDispatch();
 

 useEffect(() => {
   if (post) setPostData(post);
 }, [post]);

 const clear = () => {
   setCurrentId(0);
   setPostData({
     
     title: "",
     message: "",
     
   });
 };

  const handleSubmit = async (e) => {
    console.log("hello wrd");
   e.preventDefault();

   if (currentId === 0) {
     dispatch(createPost(postData));
    
     clear();
   } else {
     console.log("hello");
     dispatch(updatePost(currentId, postData));
     clear();
   }
 };
  

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center ">
          <div className="w-3/4 shadow-lg  flex  flex-col justify-center rounded-md p-5	">
            <div className="text-center text-3xl">{!currentId? "Write it out here ..":"Edit Text here ...."}</div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">What is your title?</span>
              </label>
              <input
                required
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                value={postData.title}
                onChange={(e) =>
                  setPostData({ ...postData, title: e.target.value })
                }
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Diary Entry</span>
              </label>
              <textarea
                required
                className="textarea textarea-bordered h-24"
                placeholder="Entry"
                value={postData.message}
                onChange={(e) =>
                  setPostData({ ...postData, message: e.target.value })
                }
              ></textarea>
              <button className="btn m-5" type="submit">
                Submit
              </button>
              <button className="btn m-5" onClick={clear}>
                Clear
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
