import React from 'react'
import style from './Dashboard.module.css'

export const Dashboard = () => {
    return (
        <div className={style.container}>
            <header className={style.header}>
                <div className={style.userInfo}>
                    <div className={style.userImg}></div>
                    <div className={style.userText}>
                        <span className={style.username}>Администратор</span>
                        <span className={style.email}>admin@example.com</span>
                    </div>
                </div>
                <div className={style.btn}>
                    <button>Выход</button>
                </div>
            </header>
            <main className={style.main}>
                <div className={style.title}>
                    <span>Заказы</span>
                    <button>По номеру заказа</button>
                </div>
                <div className={style.headTable}>
                    <span className={style.number}>Номер заказа</span>
                    <span className={style.emailTable}>Email</span>
                    <span className={style.amount}>Сумма</span>
                    <span className={style.date}>Дата</span>
                </div>
                <div className={style.order}>
                    <span className={style.numberOrder}>1</span>
                    <span className={style.emailOrder}>client1@example.com</span>
                    <span className={style.amountOrder}>100</span>
                    <span className={style.dateOrder}>15.05.2022</span>
                </div>
                <div className={style.more}>
                    <button>Показать еще...</button>
                </div>
                
            </main>

        </div>
    )
}
