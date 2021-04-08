import React from 'react'

import style from './Affair.module.css'

import { AffairType } from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (id: number) => {
        props.deleteAffairCallback(id)
    }

    return (
        <div className={style.affairContainer}>
            <div>{ props.affair.name }</div>
            <div>{ props.affair.priority }</div>

            <button onClick={ () => deleteCallback(props.affair._id) }>X</button>
        </div>
    )
}

export default Affair
