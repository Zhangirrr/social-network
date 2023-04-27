import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../store/postSlice";
import Button from "../../components/Button/Button";
import s from "./FeedPage.module.scss";
import { Link } from "react-router-dom";

function FeedPage() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const { posts } = useSelector((state) => state.posts);
  // const { users } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getPosts({ limit: 9, page }));
  }, [page]);

  const onPrev = () => {
    if (page === 1) return;
    setPage((prev) => prev - 1);
  };

  const onNext = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div className={s.wrapper}>
      <div>Recent posts</div>
      <Button className={s.btn} onClick={onPrev}>
        Add new post
      </Button>
      {/* <div className={s.content}> */}
      {/* <div></div> */}
      <div className={s.content}>
        {posts.map((post) => (
          <div key={post.id}>
            {/* <div className={s.user}> */}
              {/* {post.user && <div>{post.user.login}</div>} */}
              {/* {post.user.avatar && ( */}
                {/* // <img src={post.user.avatar} className={s.avatar} /> */}
              {/* // )} */}
            {/* </div> */}
            {/* <div>{post.text}</div> */}
            <div className={s.img_window}>
              <Link to={`/post/${post.userId}`}>
                {post.image && (
                  <img src={post.image} className={s.img} alt="" />
                )}
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/* </div> */}
      {/* <Button className={s.btn} onClick={onPrev}>Prev</Button>  */}
      {/* <Button className={s.btn} onClick={onNext}>Next</Button>  */}
    </div>
  );
}

export default FeedPage;
