import { SignInUserRequest } from '../interfaces/user.interface';
import USER from '../models/user.model';

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
	): Promise<{ status: boolean; message: string }> {
		try {
			let { email, password } = signinUserRequest;
			const existingUser = await USER.findOne({
				where: { email }
			});

			if (!!existingUser) {
				if (existingUser.password === password)
					return {
						status: true,
						message: 'Successfully logged in!!'
					};
				else
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
