import { useEffect, useState } from "react";

function Demo11() {
    //States
    const [posts, setPosts] = useState([]);

    //Hook: useEffect to fetch all posts
    useEffect(() => {
      //Fetch all "posts" data through REST API Endpoint: https://jsonplaceholder.typicode.com/posts
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          setPosts([...json]);
        })
        .catch((error) => alert("landing error!"));
    }, []);

    let addPost = () => { 
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'Post by Daniel Dang',
          body: 'For testing purpose: Post by Daniel Dang',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    }

  return (
    <div>
      {/*Post a post*/}
      <p className="m-3 d-inline">Add a new post:  </p>
      <button className="btn btn-success m-3" onClick={addPost} > ADD </button>

      {/*Get a resource*/}
      {posts.map((item) => {
        return (
          <div className="m-1 p-1 bg-secondary" key={item.id}>
            <h4>Title: {item.title}</h4>
            <p>Post Id: {item.id}</p>
            <p>User Id: {item.userId}</p>
            <p>Body: {item.body}</p>
          </div>
        );
      })}        

    </div>
  )
}

export default Demo11;