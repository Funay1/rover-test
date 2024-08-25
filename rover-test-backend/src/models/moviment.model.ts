import {
    Column, Model, Table
  } from 'sequelize-typescript';
  import {
    CreationOptional, DataTypes, NonAttribute,
  } from 'sequelize';


  @Table({ tableName: 'moviment_model', comment: 'Model for rover moviment' })
  export class MovimentModel extends Model {
    allowedUpdateKeys: NonAttribute<Set<string>> = new Set([
      'isEnabled',
    ]);
  
    @Column({
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    })
    id!: CreationOptional<number>;
  
    @Column({
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'X coordinate',
    })
    x!: string;
  
    @Column({
        type: DataTypes.STRING,
        allowNull: false,
        comment: 'Y coordinate',
      })
      y!: string;
  
      @Column({
        type: DataTypes.STRING,
        allowNull: false,
        comment: 'Rover direction',
      })
      direction!: string;
    
      @Column({
        allowNull: false,
        type: DataTypes.INTEGER,
      })
      roverId!: number;
  }
  