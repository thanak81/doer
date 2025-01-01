import { DateRange } from 'react-day-picker';
import { v4 as uuidv4 } from 'uuid';
export interface featureObject  {
    id: string,
    title: string,
    description: string,
    category: string,
    image: string,
    link: string
}

export interface bookDetailsType {
    id: string,
    title: string,
    description: string,
    image: string,
    category: string,
    addToReading: boolean,
}

export type sideBarType = {
    id: string,
    title: string,
    href: string,
    icon: React.ReactNode
}

export type toDoType = {
    id: string,
    task: string;
    description: string;
    date: Date , 
    done: boolean,
}