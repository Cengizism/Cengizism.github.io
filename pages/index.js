import { getShowcases } from '../utils/mdx-utils';
import Post from '../components/Post';
import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Title from '../components/Title';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header />
      <main className="w-full">
        <section className="mt-12 text-center">
          <Title>Hi there! 👋🏼</Title>
          <p className="text-2xl mb-8">
            I am an User Experience designer and a Frontend developer.
            <br />I care about the process and methodolodgy in bringing the
            product to life. Taking the problem, breaking it down ,and crafting
            the experience arround it by understanding, emphathy, observing and
            iterating.
          </p>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSe3ZJHtJuyoqrh-pI8GdWyMmuf01vtOH2Y3W14SWRSufIZ8SA/viewform"
            legacyBehavior
          >
            <a
              className="px-4 py-2 text-base uppercase text-white font-semibold bg-red-600 hover:bg-opacity-70 transition focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
              target="_blank"
            >
              Lets talk further
            </a>
          </Link>
        </section>
        {/* <section>
          <Title>Showcases</Title>
          <ul className="w-full">{posts.map((item) => Post(item))}</ul>
        </section> */}
        <section className="mt-12">
          <blockquote className="text-center">
            <p className="font-light italic text-3xl">
              “<strong>Simplicity</strong> is the ultimate{' '}
              <strong>sophistication</strong>.”
            </p>
            <cite className="uppercase not-italic text-base">
              Leonardo Da Vinci
            </cite>
          </blockquote>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getShowcases();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
