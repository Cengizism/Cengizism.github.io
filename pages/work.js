import { getPosts } from '../utils/mdx-utils';
import Post from '../components/Post';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Title from '../components/Title';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Work({ posts, globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header />
      <main className="w-full">
        <section className="mt-12 mx-6">
          <Title>{globalData.blogTitle}</Title>
          <ul className="w-full">{posts.map((item) => Post(item))}</ul>
          {
            posts.length === 0 && (
              <p className='text-center'>Currently working on the project cases. They will show up here soon.</p>
            )
          }
        </section>
      </main>
      <Footer />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
