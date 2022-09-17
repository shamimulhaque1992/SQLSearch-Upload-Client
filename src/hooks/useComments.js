import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useComments = () => {
    const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const result = await axios.get("http://localhost:5000/comments");
      setComments(result.data);
    };
    fetchComments();
  }, []);
    return [comments, setComments];
};

export default useComments;