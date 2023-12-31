import { getCollection, type CollectionEntry } from "astro:content";

export const allBlogPostsUnsorted = await getCollection("blog");
export const allBlogPostsSortedByDate = allBlogPostsUnsorted.sort(
  ({ data: data1 }, { data: data2 }) =>
    data2.date.getTime() - data1.date.getTime()
);
export const blogPostsByCategory = function blogPostsByCategory(
  posts: CollectionEntry<"blog">[]
) {
  const dic = {} as { [key: string]: CollectionEntry<"blog">[] };
  posts.forEach((post) => {
    const categoryName =
      post.data.category === undefined ? "No category" : post.data.category;
    if (!dic.hasOwnProperty(categoryName))
      dic[categoryName] = [] as CollectionEntry<"blog">[];
    dic[categoryName].push(post);
  });
  return dic;
};
export const allBlogPostsByCategory = blogPostsByCategory(
  allBlogPostsSortedByDate
);
