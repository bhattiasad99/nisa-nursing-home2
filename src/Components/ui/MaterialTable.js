import React, { Component, useState, useEffect } from "react";
import MaterialTable from "material-table";
import { makeStyles } from '@material-ui/core'
import { Paper } from '@material-ui/core';

const useStyles = makeStyles({
})


const MaterialTableComp = props => {
    const [renderData, setRenderData] = useState([])

    console.log('in table', props)
    useEffect(() => {
        setRenderData(props.tableData)
    }, [props])
    const classes = useStyles()
    return (
        <div style={{ maxWidth: "100%" }}>
            {/* removes box shadow */}
            <MaterialTable
                components={{
                    Container: props => <Paper {...props} elevation={0} />
                }}
                columns={[...props.headings]}
                // columns={[
                //     { title: "Name", field: "name" },
                //     { title: "SirName", field: "surname" },
                //     { title: "Birth Year", field: "birthYear", type: "numeric" },
                //     {
                //         title: "Birth City",
                //         field: "birthCity",
                //         lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
                //     },
                // ]}
                data={renderData}
                title={null}
            />
            {/*  {title: "Patient Name", field: "name"}
1: {title: "patientID", field: "patientID", type: "numeric"}
2: {title: "Queue Number", field: "queue", type: "numeric"}
3: {title: "Service", field: "service"}
4: {title: "Doctor Name", field: "doctor"} */}
        </div>
    );
}


export default MaterialTableComp