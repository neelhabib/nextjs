function PostList({ posts }) {
  return (
    <>
      <h2>List of Posts</h2>

      {posts.map((post) => (
        <div key={post.id}>
          <h3>
            hello {post.id} {post.title}
          </h3>
          <hr />
        </div>
      ))}
    </>
  );
}
export default PostList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);
  return {
    props: {
      posts: data.slice(0, 3),
    },
  };
}
