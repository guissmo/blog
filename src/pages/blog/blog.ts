import { getCollection, type CollectionEntry } from "astro:content";

export const allBlogPostsUnsorted = (await getCollection("blog")).filter(
  (post) => !post.data.draft
);

export const allBlogPostsSortedByDate = allBlogPostsUnsorted.sort(
  ({ data: data1 }, { data: data2 }) =>
    data2.date.getTime() - data1.date.getTime()
);

export function getCategoryCounts(posts: CollectionEntry<"blog">[]) {
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

export const getTagCounts = function popularTags(
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
