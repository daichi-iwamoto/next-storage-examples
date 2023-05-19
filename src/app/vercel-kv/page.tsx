"use client";
import { useEffect, useState } from 'react';
import styles from '../styles/kv.module.scss';

async function getComments01(): Promise<string[] | undefined> {
  const data = await fetch('/api/vercel-kv/getComments01')
    .then((res) => res.json())
    .catch((err) => {
      throw err;
    });

  return data;
}

async function getComments02(): Promise<string[] | undefined> {
  const data = await fetch('/api/vercel-kv/getComments02')
    .then((res) => res.json())
    .catch((err) => {
      throw err;
    });

  return data;
}

async function pushComments01(input: string): Promise<string[] | undefined> {
  const data = await fetch('/api/vercel-kv/pushComments01', {
    method: 'POST',
    body: JSON.stringify({ newComment: input }),
  })
    .then((res) => res.json())
    .catch((err) => {
      throw err;
    });

  return data;
}

async function pushComments02(input: string): Promise<string[] | undefined> {
  const data = await fetch('/api/vercel-kv/pushComments02', {
    method: 'POST',
    body: JSON.stringify({ newComment: input }),
  })
    .then((res) => res.json())
    .catch((err) => {
      throw err;
    });

  return data;
}

export default function NextKV() {
  const [comment01, setComment01] = useState<string[] | undefined>(undefined);
  const [comment02, setComment02] = useState<string[] | undefined>(undefined);
  const [input01, setInput01] = useState<string>('');
  const [input02, setInput02] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      const comments01 = await getComments01();
      const comments02 = await getComments02();

      setComment01(comments01);
      setComment02(comments02);
    };

    fetchData();
  }, []);

  return (
    <main className={styles.main}>
      <h1>Vercel KV</h1>
      <section>
        <div className={styles.board}>
          <h2>Comments01</h2>
          <div className={styles.comments}>
            {comment01?.map((comment, i) => (
              <p key={i}>{comment}</p>
            ))}
          </div>
          <div className={styles.inputs}>
            <input
              type="text"
              placeholder='comments'
              value={input01}
              onChange={(e) => setInput01(e.target.value)}
            />
            <button
              onClick={() => {
                pushComments01(input01)
                  .then(async () => {
                    const comments01 = await getComments01()
                    setComment01(comments01);
                  })
              }}
            >
              送信
            </button>
          </div>
        </div>

        <div className={styles.board}>
          <h2>Comments02</h2>
          <div className={styles.comments}>
            {comment02?.map((comment, i) => (
              <p key={i}>{comment}</p>
            ))}
          </div>
          <div className={styles.inputs}>
            <input
              type="text"
              placeholder='comments'
              value={input02}
              onChange={(e) => setInput02(e.target.value)}
            />
            <button
              onClick={() => {
                pushComments02(input02)
                  .then(async () => {
                    const comments02 = await getComments02()
                    setComment02(comments02);
                  })
              }}
            >
              送信
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
