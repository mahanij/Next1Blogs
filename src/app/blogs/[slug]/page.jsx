function page({ params }) {
  const id = Number(params.slug);
  const blogs = [
    {
      id: 1,
      title: "Mastering Next.js: A Beginner's Guide",
      content:
        "Next.js is a powerful React framework that enables server-side rendering and static site generation. In this guide, we'll explore its key features, setup process, and how to build your first Next.js application...",
    },
    {
      id: 2,
      title: "SEO in Next.js: Boost Your Website's Ranking",
      content:
        "Optimizing your Next.js app for search engines can significantly improve its visibility. This blog covers essential SEO strategies such as metadata management, dynamic rendering, and optimizing page performance...",
    },
    {
      id: 3,
      title: "Building Dynamic Blogs with Next.js and Markdown",
      content:
        "Markdown makes content creation simple and efficient. In this tutorial, we'll walk through setting up a Next.js blog using Markdown files, dynamic routes, and rendering Markdown content in React components...",
    },
    {
      id: 4,
      title: "Optimizing Next.js Performance for Faster Load Times",
      content:
        "Performance is crucial for user experience and SEO. Learn how to implement techniques like image optimization, lazy loading, caching strategies, and efficient data fetching in your Next.js projects...",
    },
    {
      id: 5,
      title: "Deploying a Next.js App: Best Practices and Tips",
      content:
        "Deploying your Next.js app to platforms like Vercel or Netlify can be straightforward with the right approach. In this blog, we'll discuss deployment options, environment variables, and handling backend integrations...",
    },
  ];

  console.log(params);

  const blog = blogs.find((value) => id === value.id);
  return (
    <>
      <br />
      <div>
        {blog ? (
          <div>
            <h2>
              {blog.id} - {blog.title}
            </h2>
            <br />
            <p>{blog.content}</p>
          </div>
        ) : (
          <p>Blog not found</p>
        )}
      </div>
    </>
  );
}

export default page;
