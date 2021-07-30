const currentValues = {
    income: 25210,
    expenses: 222,
}

const twentyFourHourValues = {
    income: 213212,
    expenses: 213123,
}

export default {

    type: 'tabular',
    options: [
        {
            id: 0,
            shift: 'Current',
            values: {
                income: currentValues.income,
                expenses: currentValues.expenses,
                profit: currentValues.income - currentValues.expenses,
            }

        }, {
            id: 1,
            shift: '24 hours',
            values: {
                income: twentyFourHourValues.income,
                expenses: twentyFourHourValues.expenses,
                profit: twentyFourHourValues.income - twentyFourHourValues.expenses,
            }
        }]

}