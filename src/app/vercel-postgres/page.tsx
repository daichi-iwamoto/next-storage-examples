"use client";
import { useEffect, useState } from 'react'
import styles from '../styles/postgres.module.scss'

type User = {
  id: number
  name: string
  mail: string
}

async function getUsers(searchInput?: string): Promise<User[] | undefined> {
  const data = await fetch(`/api/vercel-postgres/getUsers${searchInput ? `?searchInput=${searchInput}` : ''}`)
    .then((res) => res.json())
    .catch((err) => {
      throw err
    })

  return data.rows
}

export default function NextPostgres() {
  const [users, setUsers] = useState<User[] | undefined>(undefined)
  const [searchInput, setsearchInput] = useState<string>('')

  useEffect(() => {
    const fetchData = async () => {
      const users = await getUsers();
      setUsers(users);
    }

    fetchData();
  }, []);

  return (
    <main className={styles.main}>
      <h1>Vercel Postgres</h1>
      <section>
        <div className={styles.search}>
          <input
            type="text"
            placeholder='name, mailで部分一致検索'
            value={searchInput}
            onChange={(e) => setsearchInput(e.target.value)}
          />
          <button
            onClick={() => {
              getUsers(searchInput).then((users) => setUsers(users))
            }}
          >
            検索
          </button>
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
