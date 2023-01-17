import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { logout, checkIsAuth, getMe, showMore } from '../../redux/features/authSlice'
import style from './Dashboard.module.css'
import { Orders } from './orders/Orders'

export const Dashboard = () => {
    const [select, setSelect] = useState('1')
    const dispatch = useDispatch()
    const isAuth = useSelector(checkIsAuth)
    const navigate = useNavigate()
    const { user, orders, count, isNext } = useSelector((state) => state.auth)

    useEffect(() => {
        if (!isAuth) navigate('/login')
    }, [isAuth, navigate])

    useEffect(() => {
        dispatch(getMe({count,select}))
    }, [dispatch,count,select])

    const logoutHandler = () => {
        dispatch(logout())
        toast('Вы вышли из системы')
        window.localStorage.removeItem('token')
    }

    const ordersHandler = () => {
        dispatch(showMore())
    }

    if(!user) return <div></div>

    return (
        <div className={style.container}>
            <header className={style.header}>
                <div className={style.userInfo}>
                    <div className={style.userImg}></div>
                    <div className={style.userText}>
                        <span className={style.username}>{user.name}</span>
                        <span className={style.email}>{user.email}</span>
                    </div>
                </div>
                <div className={style.btn}>
                    <button onClick={logoutHandler} >Выход</button>
                </div>
            </header>
            <main className={style.main}>
                <div className={style.title}>
                    <span>Заказы</span>
                    <div className={style.select}>
                        <select value={select} onChange={(e) => setSelect(e.target.value)}>
                            <option value={1}>По номеру заказа</option>
                            <option value={2}>По сумме</option>
                            <option value={3}>По дате</option>
                        </select>
                    </div>

                </div>
                <div className={style.headTable}>
                    <span className={style.number}>Номер заказа</span>
                    <span className={style.emailTable}>Email</span>
                    <span className={style.amount}>Сумма</span>
                    <span className={style.date}>Дата</span>
                </div>
                {orders?.map((e) =>
                    <Orders
                        key={e.id}
                        id={e.id}
                        email={e.email}
                        amount={e.amount}
                        date={e.date}
                    />
                )}
                {isNext && <div className={style.more}>
                    <button onClick={ordersHandler}>Показать еще...</button>
                </div>}

            </main>

        </div>
    )
}
