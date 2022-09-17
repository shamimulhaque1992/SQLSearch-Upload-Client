import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import resposnse from "../../data/response.json";

import useComments from "../../hooks/useComments"

const Comments = () => {
  const [comments] = useComments([]);
  const [democomments, setComments] = useState("");
  useEffect(() => {
    const fetchComments = async () => {
      const result = await axios.get("response.json");
      setComments(result.data);
    };
    fetchComments();
  }, []);

  // console.log(comments.comments);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      

      {democomments?.comments?.slice(0,20).map((comment, index) => (
        <div key={index} class="card w-96 bg-base-100 shadow-xl mx-auto">
          <div class="card-body">
            <h2 class="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
