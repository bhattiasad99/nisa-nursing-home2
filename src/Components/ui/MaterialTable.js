import PropTypes from "prop-types";
import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table'

const TableComp = ({ data, table_name, getResult, ...otherProps }) => {
    const [tableData, setTableData] = useState([])
    const [headings, setHeadings] = useState([])
    useEffect(() => {
        setHeadings(data.headings)
        setTableData(data.rows)
    }, [data])
    const getRowIndexOnClick = e => {
        const index = e.currentTarget.getAttribute('path')
        getResult(tableData[index])
    }

    return (
        <React.Fragment>
            <div style={{ width: '65vw', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto' }}>
                <MaterialTable
                    style={{ width: '90%' }}
                    {...otherProps}
                    columns={headings}
                    data={tableData}
                    title={table_name}
                    // custom
                    options={{ selection: false }}
                    onRowClick={getRowIndexOnClick}
                />
            </div>
        </React.Fragment>
    )
}

TableComp.propTypes = {
    data: PropTypes.shape({
        headings: PropTypes.array,
        rows: PropTypes.array
    }),
    field: PropTypes.string,
    headings: PropTypes.array,
    rows: PropTypes.array,
    table_name: PropTypes.string,
    title: PropTypes.string
}

export default TableComp

TableComp.defaultProps = {
    table_name: 'No Name Given',
    data: {
        headings: [
            { title: '', field: '' },
            { title: '', field: '' },
        ],
        rows: [],
    }
}