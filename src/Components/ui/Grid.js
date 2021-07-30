import React from 'react'

const Grid = ({ gridTemplate, children }) => {
    return (
        <div className={gridTemplate} style={{ display: 'grid', gridGap: '1rem' }}>
            {children}
        </div>
    )
}

export default Grid
