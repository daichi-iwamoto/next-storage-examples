"use client";
import { use, useEffect, useState } from 'react'
import styles from '../styles/postgres.module.scss'

type User = {
  id: number
  name: string
  mail: string
}

export default function NextPostgres() {
  const [users, setUsers] = useState<User[] | undefined>(undefined)

  useEffect(() => {
    setUsers([
      { id: 1, name: 'hoge', mail: 'hoge@mail.com' },
      { id: 2, name: 'fuga', mail: 'fuga@mail.com' },
      { id: 3, name: 'piyo', mail: 'piyo@mail.com' },
    ])
  }, [])

  return (
    <main className={styles.main}>
      <h1>Vercel Postgres</h1>
      <section>
        <div className={styles.search}>
          <input type="text" placeholder='id, name, mailで部分一致検索' />
          <button>検索</button>
        </div>
        <table>
          <thead>
            <tr>
              <th className={styles.number}>id</th>
              <th>name</th>
              <th>mail</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr key={user.id}>
                <td className={styles.number}>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.mail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  )
}
