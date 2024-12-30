import { featureObject } from "../types/global";
import { v4 as uuidv4 } from 'uuid';

export const featureData: Array<featureObject> = [{
    id: uuidv4(),
    title: "Book Tracking",
    category: "personal",
    description: "Book is part of life",
    image: "./book.jpg",
    link: "/book"
},{
    id: uuidv4(),
    title: "Habit Tracking",
    category: "",
    description: "Book is part of life",
    image: "",
    link: "/timer"
},
{
    id: uuidv4(),
    title: "Timer",
    category: "",
    description: "Use timer to increase your productivity",
    image: "./timer.jpg",
    link: "/habit"
}
]