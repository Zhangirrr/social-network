import React, { useEffect, useState } from "react";
import s from "./onePost.module.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../store/onePostSlice";

const endpoint = process.env.REACT_APP_ENDPOINT || "";

function OnePost() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { post }  = useSelector((state) => state.post);
  // console.log(state.post);

  // console.log(id);

  useEffect(() => {
    dispatch(getPost(id));
    // const getData = async () => {
    //   const response = await fetch(`${endpoint}/posts/${id}`)
    //   const data = await response.json();
    //   console.log(data);
    // }
    // getData();
  }, []);

  return <div>
    {post.text}
  </div>;
}

export default OnePost;
