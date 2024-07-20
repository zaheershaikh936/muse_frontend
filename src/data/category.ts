export type categoryT = {
    id: string,
    color: string,
    secondaryColor: string,
    category: string,
    subCategory: string
}
const category: categoryT[] = [
    {
        id: '1',
        color: 'bg-[#e4e5ff]',
        secondaryColor: 'bg-[#d7d5fd]',
        category: 'Software Developer',
        subCategory: "Backend Developer"
    },
    {
        id: '2',
        color: 'bg-[#e9f5ff]',
        secondaryColor: 'bg-[#cce7fd]',
        category: 'Software Developer',
        subCategory: "Backend Developer"
    },
    {
        id: '3',
        color: 'bg-[#ffddcf]',
        secondaryColor: 'bg-[#f8c3b2]',
        category: 'Software Developer',
        subCategory: "Backend Developer"
    },
    {
        id: '4',
        color: 'bg-[#f9f8f3]',
        secondaryColor: 'bg-[#e5e5e5]',
        category: 'Software Developer',
        subCategory: "Backend Developer"
    },
    {
        id: '5',
        color: 'bg-[#e4e5ff]',
        secondaryColor: 'bg-[#d7d5fd]',
        category: 'Software Developer',
        subCategory: "Backend Developer"
    },
    {
        id: '6',
        color: 'bg-[#e9f5ff]',
        secondaryColor: 'bg-[#cce7fd]',
        category: 'Software Developer',
        subCategory: "Backend Developer"
    },
    {
        id: '7',
        color: 'bg-[#ffddcf]',
        secondaryColor: 'bg-[#f8c3b2]',
        category: 'Software Developer',
        subCategory: "Backend Developer"
    },
    {
        id: '8',
        color: 'bg-[#f9f8f3]',
        secondaryColor: 'bg-[#e5e5e5]',
        category: 'Software Developer',
        subCategory: "Backend Developer"
    },
    {
        id: '9',
        color: 'bg-[#e4e5ff]',
        secondaryColor: 'bg-[#d7d5fd]',
        category: 'Software Developer',
        subCategory: "Backend Developer"
    },
    {
        id: '10',
        color: 'bg-[#e9f5ff]',
        secondaryColor: 'bg-[#cce7fd]',
        category: 'Software Developer',
        subCategory: "Backend Developer"
    },
    {
        id: '11',
        color: 'bg-[#ffddcf]',
        secondaryColor: 'bg-[#f8c3b2]',
        category: 'Software Developer',
        subCategory: "Backend Developer"
    },
    {
        id: '12',
        color: 'bg-[#f9f8f3]',
        secondaryColor: 'bg-[#e5e5e5]',
        category: 'Software Developer',
        subCategory: "Backend Developer"
    }
]


export type categoryAllT = {
    id: string,
    color: string,
    category: string,
    subCategory: subCategoryAllT[]
}

export type subCategoryAllT = {
    id: string,
    name: string
}
const categoryAll: categoryAllT[] = [{
    id: '1',
    color: 'bg-[#e4e5ff]',
    category: 'Software Developer',
    subCategory: [
        {
            id: '1',
            name: 'Full Stack Developer'
        }, {
            id: '2',
            name: 'Backend Developer'
        }, {
            id: '3',
            name: 'Frontend Developer'
        }, {
            id: '4',
            name: 'Mobile Developer'
        }
    ]
}, {
    id: '2',
    color: 'bg-[#e9f5ff]',
    category: 'Hiring manager',
    subCategory: [
        {
            id: '5',
            name: 'Hiring manager'
        }
    ]
},
{
    id: '2',
    color: 'bg-[#ffddcf]',
    category: 'Account manager',
    subCategory: [
        {
            id: '5',
            name: 'Account manager'
        }
    ]
},]

export type selectCategoryT = {
    name: string,
    value: string
}
const selectCategory: selectCategoryT[] = [{
    name: "Software Developer",
    value: "1"
}, {
    name: "Hiring manager",
    value: "2"
},
{
    name: "Account manager",
    value: "3"
}]

const selectJobRole: selectCategoryT[] = [{
    name: "Frontend Developer",
    value: "1"
}, {
    name: "Backend Developer",
    value: "2"
},
{
    name: "Full Stack Developer",
    value: "3"
}, {
    name: "Mobile Developer",
    value: "4"
}]

export { category, categoryAll, selectCategory, selectJobRole }