import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Notification {

    @PrimaryGeneratedColumn()
    id: number;
    //l'identifiant de la notification
  
    message: string;
    // le message concernant la notification

    date: Date;
    //la date à laquelle le message est venu

}
