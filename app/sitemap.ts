// app/server-sitemap.xml/sitemap.ts
import { SERVER } from '../config/config';

export default function sitemap() {
  const locale = ['', '/br', '/de', '/en', '/id', '/ja', '/mx', '/tr'];
  const now = new Date().toISOString();
  return locale.flatMap((item) => [
    {
      url: `${SERVER}${item}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SERVER}${item}/story-view`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SERVER}${item}/reels-download`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SERVER}${item}/story-download`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SERVER}${item}/profile-photo-download`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SERVER}${item}/video-download`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SERVER}${item}/photo-download`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // {
    //   url: `${SERVER}${item}/blog/How-to-decorate-your-profile-on-Instagram`,
    //   lastModified: now,
    //   changeFrequency: 'weekly',
    //   priority: 1.0,
    // },
    // {
    //   url: `${SERVER}${item}/blog/How-to-unblock-your-Instagram-account`,
    //   lastModified: now,
    //   changeFrequency: 'weekly',
    //   priority: 1.0,
    // },
    // {
    //   url: `${SERVER}${item}/blog/Promoting-through-Instagram-Reels`,
    //   lastModified: now,
    //   changeFrequency: 'weekly',
    //   priority: 1.0,
    // },
    // {
    //   url: `${SERVER}${item}/blog/Why-do-you-have-to-do-Instagram`,
    //   lastModified: now,
    //   changeFrequency: 'weekly',
    //   priority: 1.0,
    // },
    // {
    //   url: `${SERVER}${item}/blog/What-is-the-content-plan-for-the-story-and-what-do-you-need`,
    //   lastModified: now,
    //   changeFrequency: 'weekly',
    //   priority: 1.0,
    // },
    // {
    //   url: `${SERVER}${item}/blog/How-do-you-analyze-your-competitors-account`,
    //   lastModified: now,
    //   changeFrequency: 'weekly',
    //   priority: 1.0,
    // },
    // {
    //   url: `${SERVER}${item}/blog/How-to-design-an-Instagram-page-beautifully`,
    //   lastModified: now,
    //   changeFrequency: 'weekly',
    //   priority: 1.0,
    // },
    // {
    //   url: `${SERVER}${item}/blog/How-to-write-interesting-posts-in-the-right-way`,
    //   lastModified: now,
    //   changeFrequency: 'weekly',
    //   priority: 1.0,
    // },
    // {
    //   url: `${SERVER}${item}/blog/Apps-and-services-for-processing-Instagram-photos`,
    //   lastModified: now,
    //   changeFrequency: 'weekly',
    //   priority: 1.0,
    // },
  ]);
}
