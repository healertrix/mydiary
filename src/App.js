import Navbar from "./components/Navbar";
import Diary from "./components/Diary";
import PlusBttn from "./components/PlusBttn";
import Form from "./components/Form";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
export default function App() {

  const [currentId, setCurrentId] = useState(0);
console.log(currentId, "this is currentId in App.js");
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <>
      <Navbar />
      <Diary setCurrentId={setCurrentId} />
      <PlusBttn />
      <Form currentId={currentId} setCurrentId={setCurrentId} />
    </>
  );
}
