import PropTypes from "prop-types";
import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table'

const TableComp = ({ data, table_name, ...otherProps }) => {
    const [tableData, setTableData] = useState([])
    const [headings, setHeadings] = useState([])
    useEffect(() => {
        setHeadings(data.headings)
        setTableData(data.rows)
    }, [data])

    return (
        <React.Fragment>
            <div style={{ maxWidth: '100%' }}>
                <MaterialTable
                    {...otherProps}
                    columns={headings}
                    data={tableData}
                    title={table_name}
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