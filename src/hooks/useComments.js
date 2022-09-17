import axios from 'axios';
import { useEffect, useState } from 'react';

const useComments = () => {
    const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const result = await axios.get("https://stark-waters-99660.herokuapp.com/comments");
      setComments(result.data);
    };
    fetchComments();
  }, []);
    return [comments, setComments];
};

export default useComments;