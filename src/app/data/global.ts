import { bookDetailsType, featureObject, sideBarType } from "../types/global";
import { v4 as uuidv4 } from 'uuid';
import {
    Book,
    ChartLine,
    HomeIcon,
    ListCheck,
    LogOutIcon,
    Settings,
    Timer,
  } from "lucide-react";
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

export const bookDataFake: Array<bookDetailsType> = [{
    id: uuidv4(),
    title: "Atomic Habit",
    category: "Self-Improvement",
    description: "Use timer to increase your productivity",
    image: "/atomic.jpg",
    addToReading: false,
},
{
    id: uuidv4(),
    title: "The Subtle Art of Not Giving A Fuck",
    category: "Self-Improvement",
    description: "Use timer to increase your productivity",
    image: "/the-art-of-not-giving-a-f.jpg",
    addToReading: false,
},
]


