const obj = {
    arr: [
    {
        level: [10, 50, 100],
    },

    {
        level: [20, 40, 60],
        students: [
        {
            name: "jemala",
            surname: "barkalaia",
            score: [8, 8, 10],
        },
        {
            name: "jumbera",
            surname: "lamazi",
            score: [10, 7, 9],
        },
        ],
    },
    ],
};

const { 
    arr: [
    { level: item1Levels }, 
    { 
        level: item2Levels, 
        students: [
        { 
            name: student1Name, 
            surname: student1Surname, 
            score: student1Scores 
        },
        { 
            name: student2Name, 
            surname: student2Surname, 
            score: student2Scores 
        }
        ] 
    }
    ] 
} = obj;


const [item1Level1, item1Level2, item1Level3] = item1Levels;


const [item2Level1, item2Level2, item2Level3] = item2Levels;


const [student1Score1, student1Score2, student1Score3] = student1Scores;


const [student2Score1, student2Score2, student2Score3] = student2Scores;