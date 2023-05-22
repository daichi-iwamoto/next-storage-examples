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

async function addUser(name: string, mail: string): Promise<User[] | undefined> {
  const data = await fetch(`/api/vercel-postgres/addUser`, {
    method: 'POST',
    body: JSON.stringify({ name: name, mail: mail })
  })
    .then((res) => res.json())
    .catch((err) => {
      throw err
    })

  return data.rows
}

export default function NextPostgres() {
  const [users, setUsers] = useState<User[] | undefined>(undefined)
  const [searchInput, setSearchInput] = useState<string>('')
  const [inputName, setInputName] = useState<string>('')
  const [inputMail, setInputMail] = useState<string>('')


  const [showModal, setShowModal] = useState<boolean>(false)

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
        <div className={styles.header}>
          <div className={styles.search}>
            <input
              type="text"
              placeholder='name, mailで部分一致検索'
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button
              onClick={() => {
                getUsers(searchInput).then((users) => setUsers(users))
              }}
            >
              search
            </button>
          </div>
          <button
            className={styles.create}
            onClick={() => { setShowModal(true) }}
          >
            add
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

      {showModal && (
        <div className={styles.modal}>
          <div className={styles.form}>
            <div className={styles.header}>
              <h2>Add User</h2>
              <button onClick={() => { setShowModal(false) }}>&times;</button>
            </div>
            <div className={styles.body}>
              <label htmlFor="name">name : </label>
              <input
                type="text"
                name='name'
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
              />
              <label htmlFor="mail">mail : </label>
              <input
                type="text"
                name='mail'
                value={inputMail}
                onChange={(e) => setInputMail(e.target.value)}
              />
              <button
                onClick={() => {
                  // ユーザー追加処理
                  setShowModal(false)
                  addUser(inputName, inputMail)
                    .then((users) => {
                      setSearchInput('')
                      setInputName('')
                      setInputMail('')
                      setUsers(users)
                    })
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
