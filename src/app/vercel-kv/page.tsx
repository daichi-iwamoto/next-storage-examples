"use client";
import { useEffect, useState } from 'react';
import styles from '../styles/kv.module.scss';

export default function NextKV() {
  const [comment01, setComment01] = useState<string[] | undefined>(undefined);
  const [comment02, setComment02] = useState<string[] | undefined>(undefined);
  const [input01, setInput01] = useState<string>('');
  const [input02, setInput02] = useState<string>('');

  useEffect(() => {
    const comments01 = ["コメント1", "コメント2", "コメント3"];
    const comments02 = ["コメント1", "コメント2", "コメント3"];

    setComment01(comments01);
    setComment02(comments02);
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
            <button>
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
            <button>
              送信
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
