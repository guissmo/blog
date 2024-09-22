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

export function getPopularCategoriesFromPosts(
  posts: CollectionEntry<"blog">[]
) {
  const categoryCount: { [key: string]: number } = {};

  posts.forEach((post) => {
    const category = post.data.category;
    if (categoryCount[category]) {
      categoryCount[category]++;
    } else {
      categoryCount[category] = 1;
    }
  });

  return Object.keys(categoryCount)
    .map((category) => ({
      category,
      count: categoryCount[category],
    }))
    .sort((a, b) => b.count - a.count);
}

export const getPopularTagsFromPosts = function popularTags(
  posts: CollectionEntry<"blog">[]
) {
  const tagCount = {} as { [key: string]: number };

  posts.forEach((post) => {
    const tags = post.data.tags || ["Untagged"];
    tags.forEach((tag) => {
      if (!tagCount[tag]) {
        tagCount[tag] = 0;
      }
      tagCount[tag]++;
    });
  });

  const sortedTags = Object.keys(tagCount)
    .map((tag) => ({
      tag,
      count: tagCount[tag],
    }))
    .sort((a, b) => b.count - a.count);

  return sortedTags;
};

export const allBlogPostsByCategory = blogPostsByCategory(
  allBlogPostsSortedByDate
);

export const allBlogPostsByTag = blogPostsByTag(allBlogPostsSortedByDate);
