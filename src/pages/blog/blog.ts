import { getCollection, type CollectionEntry } from "astro:content";

export const allBlogPostsUnsorted = (await getCollection("blog")).filter(
  (post) => !post.data.draft
);

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
      post.data.category === undefined ? "Uncategorized" : post.data.category;
    if (!dic.hasOwnProperty(categoryName))
      dic[categoryName] = [] as CollectionEntry<"blog">[];
    dic[categoryName].push(post);
  });
  return dic;
};

export const blogPostsByTag = function blogPostsByTag(
  posts: CollectionEntry<"blog">[]
) {
  const dic = {} as { [key: string]: CollectionEntry<"blog">[] };
  posts.forEach((post) => {
    // if post has the tag tag return it
    if (post.data.tags == undefined) return dic;
    post.data.tags.forEach((tag) => {
      if (!dic.hasOwnProperty(tag)) dic[tag] = [] as CollectionEntry<"blog">[];
      dic[tag].push(post);
    });
  });
  return dic;
};

export const allBlogPostsByCategory = blogPostsByCategory(
  allBlogPostsSortedByDate
);

export const allBlogPostsByTag = blogPostsByTag(allBlogPostsSortedByDate);
