export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Cengiz Ulusoy';
  const role = process.env.BLOG_ROLE
    ? decodeURI(process.env.BLOG_ROLE)
    : 'UX Design / Frontend';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Showcase projects';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : '2024 © Cengiz Ulusoy. All rights reserved.';

  return {
    name,
    role,
    blogTitle,
    footerText,
  };
};
