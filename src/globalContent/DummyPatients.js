const DUMMY_PATIENTS = [
    {
        checkupId: '0000',
        patientID: '0001',
        name: 'Arsalan Ahmed',
        doctor: 'Dr. Saiqa Mukhtar',
        service: 'General Checkup',
        paid: true,
        appointmentTime: '08/07/2021/16:42:42',
        gender: 'male',
        queue: 1,
        contact: '0321-12312312',
        checkup: true,
        awaitingPrescription: true,
        discount: null,
    },
    {
        checkupId: '0001',
        patientID: '0002',
        name: 'Ms Anjum',
        doctor: 'Dr. Nabeela Khan',
        service: 'General Checkup',
        paid: true,
        appointmentTime: '08/07/2021/16:42:42',
        queue: 2,
        gender: 'female',
        contact: '0332-12312312',
        checkup: true,
        awaitingPrescription: true,
        discount: null,
    },
    {
        checkupId: '0002',
        patientID: '0003',
        name: 'Abdullah Bhatti',
        doctor: 'Dr. Nabeela Khan',
        service: 'General Checkup',
        paid: true,
        appointmentTime: '08/07/2021/16:42:42',
        queue: 3,
        gender: 'male',
        contact: '0332-21122321',
        checkup: true,
        awaitingPrescription: false,
        discount: null,
    },
    {
        checkupId: '0003',
        patientID: '0004',
        name: 'Asad Bhatti',
        doctor: 'Dr. Saiqa Mukhtar',
        service: 'General Checkup',
        paid: true,
        appointmentTime: '08/07/2021/16:42:42',
        queue: 4,
        gender: 'male',
        contact: '0321-23322222',
        checkup: true,
        awaitingPrescription: false,
        discount: null,
    },
    {
        checkupId: '0004',
        patientID: '0005',
        name: 'Nimrah Asad Khan',
        doctor: 'Dr. Saiqa Mukhtar',
        service: 'General Checkup',
        paid: false,
        appointmentTime: '08/07/2021/16:42:42',
        queue: 5,
        gender: 'female',
        contact: '0333-55555555',
        checkup: true,
        awaitingPrescription: false,
        discount: null,

    },
    {
        checkupId: '0005',
        patientID: '0006',
        name: 'Zainab Hassan',
        doctor: 'Dr. Saiqa Mukhtar',
        service: 'General Checkup',
        paid: true,
        appointmentTime: '08/07/2021/16:42:42',
        gender: 'male',
        queue: 6,
        contact: '0321-12312312',
        checkup: false,
        awaitingPrescription: false,
        discount: null,

    },
    {
        checkupId: '0006',
        patientID: '0007',
        name: 'Dr. Faiza Zubair',
        doctor: 'Dr. Nabeela Khan',
        service: 'General Checkup',
        paid: true,
        appointmentTime: '08/07/2021/16:42:42',
        queue: 7,
        gender: 'female',
        contact: '0332-12312312',
        checkup: false,
        awaitingPrescription: false,
        discount: null,

    },
    {
        checkupId: '0007',
        patientID: '0008',
        name: 'Farhat Abbas',
        doctor: 'Dr. Nabeela Khan',
        service: 'General Checkup',
        paid: true,
        appointmentTime: '08/07/2021/16:42:42',
        queue: 8,
        gender: 'male',
        contact: '0332-21122321',
        checkup: false,
        awaitingPrescription: false,
        discount: null,

    },
    {
        checkupId: '0008',
        patientID: '0009',
        name: 'Amna Shah',
        doctor: 'Dr. Saiqa Mukhtar',
        service: 'General Checkup',
        paid: true,
        appointmentTime: '08/07/2021/16:42:42',
        queue: 9,
        gender: 'male',
        contact: '0321-23322222',
        checkup: false,
        awaitingPrescription: false,
        discount: null,

    },
    {
        checkupId: '0009',
        patientID: '0010',
        name: 'Danyal Zahid',
        doctor: 'Dr. Saiqa Mukhtar',
        service: 'General Checkup',
        paid: true,
        appointmentTime: '08/07/2021/16:42:42',
        queue: 10,
        gender: 'female',
        contact: '0333-55555555',
        checkup: false,
        awaitingPrescription: false,
        discount: null,

    },

    {
        checkupId: '0010',
        patientID: '0011',
        name: 'Danyal Shahid',
        doctor: 'Dr. Saiqa Mukhtar',
        service: 'General Checkup',
        paid: true,
        appointmentTime: '08/07/2021/16:42:42',
        queue: 11,
        gender: 'female',
        contact: '0333-55555555',
        checkup: false,
        awaitingPrescription: false,
        discount: null,

    },
    {
        checkupId: '0011',
        patientID: '0012',
        name: 'Ahmed Amin',
        doctor: 'Dr. Saiqa Mukhtar',
        service: 'General Checkup',
        paid: true,
        appointmentTime: '08/07/2021/16:42:42',
        queue: 12,
        gender: 'female',
        contact: '0333-55555555',
        checkup: false,
        awaitingPrescription: false,
        discount: null,

    },

    {
        checkupId: '0012',
        patientID: '0013',
        name: 'Salman',
        doctor: 'Dr. Saiqa Mukhtar',
        service: 'General Checkup',
        paid: true,
        appointmentTime: '08/07/2021/16:42:42',
        queue: 13,
        gender: 'female',
        contact: '0333-55555555',
        checkup: false,
        awaitingPrescription: false,
        discount: null,

    },

    {
        checkupId: '0013',
        patientID: '0014',
        name: 'Muhammad Usama',
        doctor: 'Dr. Saiqa Mukhtar',
        service: 'General Checkup',
        paid: true,
        appointmentTime: '08/07/2021/16:42:42',
        queue: 14,
        gender: 'female',
        contact: '0333-55555555',
        checkup: false,
        awaitingPrescription: false,
        discount: null,

    },

    {
        checkupId: '0014',
        patientID: '0015',
        name: 'Zubair Shakir',
        doctor: 'Dr. Saiqa Mukhtar',
        service: 'General Checkup',
        paid: true,
        appointmentTime: '08/07/2021/16:42:42',
        queue: 15,
        gender: 'female',
        contact: '0333-55555555',
        checkup: false,
        awaitingPrescription: false,
        discount: null,

    },

    {
        checkupId: '0015',
        patientID: '0016',
        name: 'Hasnat',
        doctor: 'Dr. Saiqa Mukhtar',
        service: 'General Checkup',
        paid: true,
        appointmentTime: '08/07/2021/16:42:42',
        queue: 16,
        gender: 'female',
        contact: '0333-55555555',
        checkup: false,
        awaitingPrescription: false,
        discount: null,

    },
]


export default DUMMY_PATIENTS
