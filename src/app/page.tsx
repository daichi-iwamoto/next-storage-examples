import Link from 'next/link'
import styles from './styles/index.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Vercel Storage with Next.13 Examples</h1>
      <div className={styles.links}>
        <Link href="/vercel-kv">
          <h3>Vercel KV</h3>
          <p>Vercel KV is a durable Redis database that enables you to store and retrieve JSON data.</p>
        </Link>
        <Link href="/vercel-postgres">
          <h3>Vercel Postgres</h3>
          <p>Vercel Postgres is a serverless SQL database designed to integrate with Vercel Functions and your frontend framework.</p>
        </Link>
        <Link href="/vercel-blob">
          <h3>Vercel Blob</h3>
          <p>Vercel Blob allows you to upload and serve files via a global network through unique and unguessable URLs.</p>
        </Link>
      </div>
    </main>
  )
}
