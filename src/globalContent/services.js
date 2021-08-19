const services = {
    categories: [
        {
            title: 'Consultancy',
            id: 'consultancy',
            lookup: 'consultants',
        },
        {
            title: 'General Checkup',
            id: 'checkup',
            lookup: 'medical-officers',
        },
        {
            title: 'Retention',
            id: 'retain',
            lookup: 'services',
        },
        {
            title: 'Indoor',
            id: 'indoor',
            lookup: 'services',
        }
    ],
    services: [
        {
            id: 'consultants',
            data: [
                {
                    name: 'Dr. Saiqa Mukhtar',
                    id: 0,
                    cnic: '',
                    cnic_isExpired: false,
                    time_in: '1200',
                    time_out: '1500',
                    speciality: 'medicine',
                    education: [
                        { name: 'MBBS', hospitalName: '', year: '', degreeVerified: false },
                        { name: 'FCPS part 1', hospitalName: '', year: '', degreeVerified: false },
                        { name: 'FCPS part 2', hospitalName: '', year: '', degreeVerified: false },
                    ],
                    experience: [
                        { hospitalName: '', yearFrom: '', yearTo: '', documentsVerified: false },
                        { hospitalName: '', yearFrom: '', yearTo: '', documentsVerified: false },
                    ],
                    active: true,
                    otherDuties: [
                        'Incharge Emergency', 'Team Member CQI'
                    ]
                }
            ]
        }
    ]
}