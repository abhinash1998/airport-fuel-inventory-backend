import { DataTypes, Model } from 'sequelize';
import { sequelizeConnection } from '../../config/database';
import { eTable } from '../enum/table.enum';

export interface AircraftAttributes {
	aircraft_id: number;
	aircraft_no: string;
	airline: string;
	source: string;
	destination: string;
}

class AIRCRAFT extends Model<AircraftAttributes> implements AircraftAttributes {
	public aircraft_id: number;
	public aircraft_no: string;
	public airline: string;
	public source: string;
	public destination: string;
}

AIRCRAFT.init(
	{
		aircraft_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		aircraft_no: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		airline: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		source: {
			type: DataTypes.STRING(100)
		},
		destination: {
			type: DataTypes.STRING(100)
		}
	},
	{
		sequelize: sequelizeConnection,
		timestamps: false,
		tableName: eTable.AIRCRAFT
	}
);

export default AIRCRAFT;
