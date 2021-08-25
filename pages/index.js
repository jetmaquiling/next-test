import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios';




export default function Home() {
  const [blog, setBlog] = React.useState({});
  const [image, setImage] = React.useState("");

  React.useEffect(() => {
      async function getBlogs() { 
          const {data} = await axios.get(`https://pcmjourney.herokuapp.com/blogs/5`);
          setImage(data.clipboard.url)
          setBlog(data)
      }
      getBlogs()
  }, [])


  return (
    <div className={styles.container}>
      <Head>
            <title>{blog.title}</title>
            <meta property="og:type"   content="website" />
            <meta property="og:description"  content={blog.description} />
            <meta property="og:image" content={image} key="ogimage" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {blog.title}
        </h1>

        <p className={styles.description}>
          Get started by Main editing{' '}
          <code className={styles.code}> Main pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>{blog.description}</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>{blog.description}</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
