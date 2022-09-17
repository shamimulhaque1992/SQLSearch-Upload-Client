import React, { useState } from "react";
import useComments from "../../hooks/useComments";
const Navbar = () => {
  const [commentsearchData, setcommentsearchData] = useState("");
  const [uidsearchData, setUidSearchData] = useState("");
  const [unamesearchData, setUnameSearchData] = useState("");
  const [postidsearchData, setPostidSearchData] = useState("");
  const [showSearch, setShowSearch] = useState("hidden");
  let [comments] = useComments("");

  if (commentsearchData.length > 0) {
    // console.log(comments);
    comments = comments?.slice(0, 20).filter((i) => {
      // console.log(comments);

      if (i.body.toLowerCase().match(commentsearchData.toLowerCase())) {
        return i.body.toLowerCase().match(commentsearchData.toLowerCase());
      }
    });
  }

  if (unamesearchData.length > 0) {
    // console.log(unamesearchData);
    comments = comments?.slice(0, 20).filter((i) => {
      if (i.username.toLowerCase().match(unamesearchData.toLowerCase())) {
        return i.username.toLowerCase().match(unamesearchData.toLowerCase());
      }
    });
  }

  if (uidsearchData.length > 0) {
    // console.log(uidsearchData);
    comments = comments?.slice(0, 20).filter((i) => {
      let fuid = JSON.stringify(i.uid);
      // console.log(fuid);
      if (fuid.match(uidsearchData)) {
        return fuid.match(uidsearchData);
      }
    });
  }

  if (postidsearchData.length > 0) {
    // console.log(postidsearchData);
    comments = comments?.slice(0, 20).filter((i) => {
      let fpostID = JSON.stringify(i.postID);
      // console.log(fpostID);
      if (fpostID.match(postidsearchData)) {
        return fpostID.match(postidsearchData);
      }
    });
  }

  const handleshowsearch = ()=>{
    setShowSearch("block")
  }

  
  return (
    <div>
      <div className="navbar flex flex-col md:flex-row justify-start gap-10 items-center bg-base-100">
        <div className="sm:w-5/12">
          <a className="btn btn-ghost normal-case text-xl">
            SQL Search & Update
          </a>
        </div>
        <div className="grid grid-cols-4 gap-5">
          <div>
            <div className="form-control w-11/12">
              <input
                onChange={(event) => {
                  setcommentsearchData(event.target.value);
                }}
                onKeyDown={()=>handleshowsearch()}
                type="text"
                placeholder="Search by Comments"
                className="input input-bordered"
              />
            </div>
          </div>

          <div>
            <div className="form-control w-11/12">
              <input
                onChange={(event) => {
                  setUidSearchData(event.target.value);
                }}
                onKeyDown={()=>handleshowsearch()}
                type="text"
                placeholder="Search by UserID"
                className="input input-bordered"
              />
            </div>
          </div>

          <div>
            <div className="form-control w-11/12">
              <input
                onChange={(event) => {
                  setUnameSearchData(event.target.value);
                }}
                onKeyDown={()=>handleshowsearch()}
                type="text"
                placeholder="Search by Username"
                className="input input-bordered"
              />
            </div>
          </div>

          <div>
            <div className="form-control w-11/12">
              <input
                onChange={(event) => {
                  setPostidSearchData(event.target.value);
                }}
                onKeyDown={()=>handleshowsearch()}
                type="text"
                placeholder="Search by postID"
                className="input input-bordered"
              />
            </div>
          </div>
        </div>
      </div>
      <h1 className={showSearch}>{comments.length == 0?"Result not found":"Search results"}</h1>
      <div className="pt-20 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {comments?.map((val, index) => (
            <div key={index} className="card sm:w-10/12 md:w-10/12 lg:w-10/12 bg-base-100 shadow-xl mx-auto">
              <div className="card-body">
                <h2 className="card-title">Username: {val.username}</h2>
                <h2 className="card-title">UserID: {val.uid}</h2>
                <h1 className="text-2xl">PostID: {val.postID}</h1>
                <p className="text-left">
                  Comment: <br />
                  {val.body}
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
