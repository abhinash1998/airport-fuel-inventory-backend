import { DataTypes, DATE, Model } from 'sequelize';
import { sequelizeConnection } from '../../config/database';
import { eTable } from '../enum/table.enum';
import AIRCRAFT from './aircraft.model';
import AIRPORT from './airport.model';

export interface TransactionAttributes {
	transaction_id: number;
	transaction_date_time: Date;
	transaction_type: string;
	airport_id: number;
	aircraft_id: number;
	quantity: number;
	transaction_id_parent: number;
}

class TRANSACTION
	extends Model<TransactionAttributes>
	implements TransactionAttributes
{
	public transaction_id: number;
	public transaction_date_time: Date;
	public transaction_type: string;
	public airport_id: number;
	public aircraft_id: number;
	public quantity: number;
	public transaction_id_parent: number;
}

TRANSACTION.init(
	{
		transaction_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		transaction_date_time: {
			type: DataTypes.DATE,
			defaultValue: Date.now()
		},
		transaction_type: {
			type: DataTypes.STRING,
			allowNull: false
		},
		airport_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: AIRPORT,
				key: 'airport_id'
			}
		},
		aircraft_id: {
			type: DataTypes.INTEGER,
			references: {
				model: AIRCRAFT,
				key: 'aircraft_id'
			}
		},
		quantity: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		transaction_id_parent: {
			type: DataTypes.INTEGER
		}
	},
	{
		sequelize: sequelizeConnection,
		timestamps: false,
		tableName: eTable.TRANSACTION
	}
);

export default TRANSACTION;
