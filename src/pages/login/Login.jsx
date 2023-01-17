import React, { useEffect, useState } from 'react'
import style from './Login.module.css'
import { checkIsAuth, loginUser } from '../../redux/features/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { status } = useSelector((state) => state.auth)

    const dispatch = useDispatch()
    const isAuth = useSelector(checkIsAuth)
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuth) navigate('/')
    }, [isAuth, navigate])

    useEffect(() => {
        toast(status)
    }, [status])

    const handleSubmit = () => {
        try {
            dispatch(loginUser({ email, password }))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={style.wrapper}>
            <div className={style.loginBox}>
                <form className={style.form} onSubmit={e => e.preventDefault()}>
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
                    <button
                        className={style.btn}
                        onClick={handleSubmit}
                    >ВОЙТИ
                    </button>
                    <span className={style.text} onClick={() => toast('Вам нужно тренировать память :)')}>
                        Забыли пароль?
                    </span>
                </form>
            </div>
        </div>
    )
}
