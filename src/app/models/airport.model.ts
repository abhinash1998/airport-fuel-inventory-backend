import { DataTypes, Model } from 'sequelize';
import { sequelizeConnection } from '../../config/database';
import { eTable } from '../enum/table.enum';

interface AirportAttributes {
	airport_id: number;
	airport_name: string;
	fuel_capacity: number;
	fuel_available: number;
}

class AIRPORT extends Model<AirportAttributes> implements AirportAttributes {
	public airport_id: number;
	public airport_name: string;
	public fuel_capacity: number;
	public fuel_available: number;
}

AIRPORT.init(
	{
		airport_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		airport_name: {
			type: DataTypes.STRING(200),
			allowNull: false
		},
		fuel_capacity: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		fuel_available: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	},
	{
		sequelize: sequelizeConnection,
		timestamps: false,
		tableName: eTable.AIRPORT
	}
);

export default AIRPORT;
