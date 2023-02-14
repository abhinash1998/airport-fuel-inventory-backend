import { SignInUserRequest } from '../interfaces/user.interface';
import USER from '../models/user.model';
import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';
dotenv.config();
export class UserBLL {
	/**
	 * This method is used to login user
	 *
	 * @param {SignInUserRequest} signinUserRequest
	 * @return {*}  {Promise<{ status: boolean; message: string }>}
	 * @memberof UserBLL
	 */
	async signinUser(
		signinUserRequest: SignInUserRequest
	): Promise<{ status: boolean; message: string; token?: string }> {
		try {
			let { email, password } = signinUserRequest;
			const existingUser = await USER.findOne({
				where: { email }
			});

			if (!!existingUser) {
				const payload = {
					userId: existingUser.user_id
				};
				if (existingUser.password === password) {
					const token = jwt.sign(payload, process.env.SECRET_KEY, {
						expiresIn: '1h'
					});
					return {
						status: true,
						message: 'Successfully logged in!!',
						token: token
					};
				} else
					return {
						status: false,
						message: 'Invalid password. Authentication failed.'
					};
			} else {
				return {
					status: false,
					message: 'No such user found. Please check your email.'
				};
			}
		} catch (error) {
			throw new Error(
				`method : signinUser class: UserBLL Error: ${error}`
			);
		}
	}
}
