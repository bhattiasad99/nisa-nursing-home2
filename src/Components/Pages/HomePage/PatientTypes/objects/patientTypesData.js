export default {
    type: 'pie',
    options: [
        {
            id: 0,
            shift: 'Current',
            values: {
                newReg: 8,
                followUp: 12,
                emergency: 4
            }
        },
        {
            id: 1,
            shift: '24 hours',
            values: {
                newReg: 14,
                followUp: 23,
                emergency: 6
            }
        }
    ]
}