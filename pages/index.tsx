import Layout from '../components/layout/layout';
import Glitch from '../components/glitch/glitch';
import Card from '../components/card/card';
import { useRef } from 'react';

const IndexPage = () => {
  const glitchRef = useRef(null);
  return (
    <Layout>
      <div className='main-grid'>
        <div className='left-col pt-[195px] hidden md:block'>
          <Card>
            Hover over the glitching text ;D
          </Card>
        </div>
        <article>
          <h1 className='mb-6 color-text'>Mahmood Sagharjooghi</h1>
          <p className='mb-16 color-sub'>
            <i>Web craftsman</i>. Creating delightful and smooth web experiences.
            Frontend dev at{' '}
            <a
              className='link'
              target='_blank'
              href='https://www.Oneflow.com/'
            >
              Oneflow
            </a>
            .
          </p>
          <h2 className='mb-4 color-text'>Now</h2>
          <p className='mb-7 color-sub'>
            Doing side projects and diving deep into web fundamentals. I'm most passionate about
            building performant small <Glitch ref={glitchRef}>animations</Glitch>
            . Things you may not notice
            when they're there, but you'll miss when they're not.
          </p>
          <p className='mb-16 color-sub'>
            Listening to music is one of the things I enjoy a lot. My most
            played song is{' '}
            <a
              className='link'
              target='_blank'
              href='https://open.spotify.com/track/6zIzgsgb7fLnD4dL0IVhzP?si=1fbc11fe70324090'
            >
              Float
            </a>{' '}
            by Zane Alexander.
          </p>
        </article>
      </div>
    </Layout>
  )
};

export default IndexPage;
