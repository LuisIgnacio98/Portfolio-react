import React from 'react'

import './PortafolioList.scss'

export default function PortafolioList({title, active, setSelected, id}) {
    return (
        <li className={active ? "portafolioList active" : ''} onClick={() => setSelected(id)}>
            {title}
        </li>
    )
}
