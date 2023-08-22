import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'user' })
export class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    firstName: string;
  
    @Column()
    lastName: string;
  
    //booléan est un type primitif en TypeScript, il représente une valeur booléenne, qui peut être true ou false
    @Column({ default: true })
    isActive: boolean;// isActive est une valeur attribuée par défaut à l'entité user
    //c'est une propriété qui est utilisé pour montrer si l'entité est active ou inactive
    //cette propriété pour indiquer si un utilisateur est actif ou désactivé.



}
