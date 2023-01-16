import React, { useState } from 'react'
import style from './Login.module.css'

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  return (
      <div className={style.wrapper}>
          <div className={style.loginBox}>
              <form className={style.form}>
                  <input
                      type="text"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={style.input}
                  />
                  <input
                      type="password"
                      placeholder="Пароль"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={style.input}
                  />
                  <button className={style.btn}>ВОЙТИ</button>
                  <span className={style.text}>Забыли пароль?</span>
              </form>
          </div>
      </div>
  )
}
