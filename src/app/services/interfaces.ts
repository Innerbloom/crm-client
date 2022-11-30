import * as events from "events";


export interface List {
    number: number;
    name: string;
    icon: string;
    routerLink?: string
}

export interface Users {
    username: string;
    password: string;
}

export interface Logs {
    username: string;
    event: string;
    date: Date;
}

export interface Partners {
    id: number;
    username: string;
    date: Date;
    partnersEvent: events;
    email: string;
}


export interface Charts {
    x: any;
    y: any;
    title: any;
}

export interface Chart {
    x: any;
    y: any;
    title: any;
}