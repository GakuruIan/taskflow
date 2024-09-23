
type Card = {
    column: string;
    title: string;
    description: string;
    tag: string;
    id:number;
  };

  
export const Cards:Card[] = [
    {
        id:1,
        column :"Todo",
        title:"UI/UX Design",
        description:" Lorem ipsum dolor sit amet consectetur, adipisicing elit.Sapiente,fugiat.",
        tag:"Design"
    },
    {
        id:2,
        column :"Complete",
        title:"UI/UX Research",
        description:" Lorem ipsum dolor sit amet consectetur, adipisicing elit.Sapiente,fugiat.",
        tag:"Design"
    },
    { 
        id:3,
        column :"Review",
        title:"Web content",
        description:" Lorem ipsum dolor sit amet consectetur, adipisicing elit.Sapiente,fugiat.",
        tag:"Copy writing"
    },
    {
        id:4,
        column :"Review",
        title:"System Design",
        description:" Lorem ipsum dolor sit amet consectetur, adipisicing elit.Sapiente,fugiat.",
        tag:"Coding"
    },
    {
        id:5,
        column :"In Progress",
        title:"Marketing",
        description:" Lorem ipsum dolor sit amet consectetur, adipisicing elit.Sapiente,fugiat.",
        tag:"Marketing"
    },
    {
        id:6,
        column :"Review",
        title:"Bug fix",
        description:" Lorem ipsum dolor sit amet consectetur, adipisicing elit.Sapiente,fugiat.",
        tag:"Coding"
    },
]