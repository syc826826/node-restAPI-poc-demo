import { Table, Column, Model, Sequelize} from 'sequelize-typescript';
import { Db } from '../db'

@Table({
    tableName:'users'
})
export class User extends Model<User>{

      @Column
      firstName: string

      @Column
      lastName: string

}

Db.addModels([User])