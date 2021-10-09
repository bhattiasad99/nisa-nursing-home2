export default [
    {
        name: 'fname',
        props: {
            label: 'First Name',
            type: 'text',
            id: 'fname',
            required: true,
        }
    },
    {
        name: 'lname',
        props: {
            label: 'Last Name',
            type: 'text',
            id: 'lname',
            required: true,
        }
    },
    {
        name: 'email',
        props: {
            label: 'Email',
            type: 'email',
            id: 'email',
            required: true,
            multiple: true,
            pattern: /^\w+([\.-]s?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        }
    },
    {
        name: 'contact',
        props: {
            label: 'Contact',
            type: 'text',
            id: 'contact',
            required: false,
        }
    },
    {
        name: 'gender',
        props: {
            type: 'drop-down',
            label: 'Gender',
            options: [
                { ref: 'male', name: 'Male' },
                { ref: 'female', name: 'Female' },
                { ref: 'other', name: 'Others' },
            ]
        }
    }
]