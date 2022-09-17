import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import useComments from "../../hooks/useComments";

const UploadForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [comments] = useComments([]);
  // console.log("hole", comments);
  const onSubmit = (data) => {
    const udata = data.uid;
    const uid = parseInt(udata);
    const body = data.comment;
    const username = data.uname;
    const postdata = data.postid;
    const postID = parseInt(postdata);

    const uidexist = comments.find((usid) => usid.uid === uid);
    const bodyexist = comments.find((usid) => usid.body === body);
    const postidexist = comments.find((usid) => usid.postID === postID);
    const unameexist = comments.find((usid) => usid.uid === username);

    /* if (uidexist||bodyexist||postidexist||unameexist) {
      console.log("true");
    } else {
      console.log("false");
    } */

    if (uidexist && bodyexist && postidexist && unameexist) {
      // console.log("iside update");
      axios
        .put("https://stark-waters-99660.herokuapp.com/update", {
          uid: data.uid,
          body: data.comment,
          username: data.uname,
          postID: data.postid,
        })
        .then(() => {
          alert("insert successfull");
        });
    } else {
      // console.log("inside insert");
      axios
        .post("https://stark-waters-99660.herokuapp.com/insert", {
          uid: data.uid,
          body: data.comment,
          username: data.uname,
          postID: data.postid,
        })
        .then(() => {
          alert("insert successfull");
        });
    }

    reset();
    console.log(data);
  };
  return (
    <div className=" hero min-h-screen bg-base-200">
      <div className="card flex-shrink-0 sm:w-12/12 md:w-6/12 lg:w-5/12 xl:w-4/12 shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">UserID</span>
            </label>
            <input
              {...register("uid", {
                required: {
                  value: true,
                  message: "UserID is required",
                },
                max: {
                  value: 20000,
                  message: "Too long ID",
                },
              })}
              autoComplete="off"
              type="text"
              placeholder="Enter Your UserID"
              className="input input-bordered"
            />
            <label className="label">
              {errors.uid?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.uid.message}
                </span>
              )}
              {errors.uid?.type === "maxLength" && (
                <span className="label-text-alt text-red-500">
                  {errors.uid.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              {...register("uname", {
                required: {
                  value: true,
                  message: "Username is required",
                },
                max: {
                  value: 20000,
                  message: "Too long Username",
                },
              })}
              autoComplete="off"
              type="text"
              placeholder="Enter Your Username"
              className="input input-bordered"
            />
            <label className="label">
              {errors.uname?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.uname.message}
                </span>
              )}
              {errors.uname?.type === "maxLength" && (
                <span className="label-text-alt text-red-500">
                  {errors.uname.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">PostId</span>
            </label>
            <input
              {...register("postid", {
                required: {
                  value: true,
                  message: "PostID is required",
                },
                max: {
                  value: 20000,
                  message: "Too long PsotID",
                },
              })}
              autoComplete="off"
              type="text"
              placeholder="Enter Your PostID"
              className="input input-bordered"
            />
            <label className="label">
              {errors.postid?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.postid.message}
                </span>
              )}
              {errors.postid?.type === "maxLength" && (
                <span className="label-text-alt text-red-500">
                  {errors.postid.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Comment</span>
            </label>
            <textarea
              {...register("comment", {
                required: {
                  value: true,
                  message: "Comment is required",
                },
                max: {
                  value: 20000,
                  message: "Too long Comment",
                },
              })}
              autoComplete="off"
              type="text"
              placeholder="Write your comment"
              className="textarea textarea-bordered h-24"
            />
            <label className="label">
              {errors.uid?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.uid.message}
                </span>
              )}
              {errors.uid?.type === "maxLength" && (
                <span className="label-text-alt text-red-500">
                  {errors.comment.message}
                </span>
              )}
            </label>
          </div>
          <input
            value="Post"
            type="submit"
            className="btn btn-primary mt-6"
          ></input>
        </form>
      </div>
    </div>
  );
};

export default UploadForm;
