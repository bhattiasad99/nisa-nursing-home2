export default {
    type: 'pie',
    options: [
        {
            id: 0,
            shift: 'Current',
            values: {
                consultancy: 12,
                indoor: 2,
                general: 5,
                retention: 3
            }
        },
        {
            id: 1,
            shift: '24 hours',
            values: {
                consultancy: 62,
                indoor: 6,
                general: 70,
                retention: 9
            }
        }
    ]
}