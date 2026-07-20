import { getCollection, type CollectionEntry } from 'astro:content';
import { BLOG_CLUSTERS, type BlogClusterDefinition } from './blog-clusters';

export type BlogPost = CollectionEntry<'blog'>;

export async function getPublishedPosts(): Promise<BlogPost[]> {
  const posts = await getCollection('blog', (p) => !p.data.draft);
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function formatPostDate(date: Date, month: 'short' | 'long' = 'short'): string {
  return date.toLocaleDateString('en-US', { year: 'numeric', month, day: 'numeric' });
}

export function postsForSlugs(posts: BlogPost[], slugs: readonly string[]): BlogPost[] {
  const postById = new Map(posts.map((post) => [post.id, post] as const));
  return slugs.map((slug) => postById.get(slug)).filter((p): p is BlogPost => p != null);
}

export function getCluster(id: BlogClusterDefinition['id']): BlogClusterDefinition | undefined {
  return BLOG_CLUSTERS.find((cluster) => cluster.id === id);
}

export function clustersWithPosts(
  posts: BlogPost[],
): (BlogClusterDefinition & { posts: BlogPost[] })[] {
  return BLOG_CLUSTERS.map((cluster) => ({
    ...cluster,
    posts: postsForSlugs(posts, cluster.slugs),
  }));
}
