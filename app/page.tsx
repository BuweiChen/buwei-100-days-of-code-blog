import getPostMetadata from "@/components/getPostMetadata";
import PostPreview from "@/components/PostPreview";
import "../style/globals.css";

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  )); // key is required when we are creating multiple elements in a list.
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">{postPreviews}</div>
  );
};
export default HomePage;
