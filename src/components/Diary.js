import DiaryEntry from "./DiaryEntry";
import { useSelector } from "react-redux";


import { CircularProgress } from "@mui/material";
export default function Diary({ setCurrentId }) {
  

  const posts = useSelector((state) => state.posts);
  
  return !posts.length ? (
    <>
      <div className="flex justify-center m-32">Loading .....</div>
    </>
  ) : (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          {posts.map((post) => (
            <DiaryEntry
              post={post}
              key={post._id}
              setCurrentId={setCurrentId}
            />
          ))}
        </div>
      </section>
    </>
  );
}
