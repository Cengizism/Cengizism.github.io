import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Title from '../components/Title';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function About() {
  let globalData = getGlobalData();

  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header />
      <main className="w-full">
        <section className="mt-12">
          <Title>Nice to meet with you</Title>
          <p className='mt-6 mb-8'>
            I'm Cengiz Ulusoy, an User Experience designer and a fanatic creator
            of innovative user-centric digital products and services. I always
            aim to bring my skills of usability, motion and visual design as
            well as rapid prototyping backed with many years of experience in
            end-to-end software delivery.
          </p>

          <p className='mb-8'>
            In many years I contributed in different stages of projects; from
            researching, planning/organising, designing and eventually
            developing software and services in the areas of technology,
            media&telecom, banking/finance and e-commerce sectors.
          </p>

          <p className='mb-8'>
            Well knowing of the both worlds of application design and software
            development enables me to create structured designs and
            documentations for their implementation and as well as re-usable
            prototyping of interfaces and streamlining the design/development
            interactions.
          </p>

          <p>
            I am always eagerly looking for new challenges in environments that
            will inspire me to use my skills and experience in creating
            innovative user-centric digital products which are loved by their
            users.
          </p>

          <p className='mb-8'>My motto is “Simplicity is the ultimate sophistication!”</p>

          <Title>Clients I've worked for</Title>

          <div className='flex flex-wrap'>
            <div className="basis-1/2">Alten</div>
            <div className="basis-1/2">Sweco</div>
            <div className="basis-1/2">Nederlands Centrum Jeugdgezondheid</div>
            <div className="basis-1/2">AllSeas</div>
            <div className="basis-1/2">Xebia</div>
            <div className="basis-1/2">The Sting</div>
            <div className="basis-1/2">KPN</div>
            <div className="basis-1/2">Nextail {'('}Leenbakker, Blokker, Intertorys{'}'}</div>
            <div className="basis-1/2">QBuzz</div>
            <div className="basis-1/2">TNT</div>
            <div className="basis-1/2">MediaMij</div>
            <div className="basis-1/2">VolkerRail</div>
            <div className="basis-1/2">Ask Community Systems</div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
