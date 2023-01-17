import React from 'react'
import style from './Orders.module.css'

export const Orders = ({id,email,amount,date}) => {
  return (
      <div className={style.order}>
          <span className={style.numberOrder}>{id}</span>
          <span className={style.emailOrder}>{email}</span>
          <span className={style.amountOrder}>{amount}</span>
          <span className={style.dateOrder}>{date}</span>
      </div>
  )
}
