import axios from "axios"

import { getContentType } from "@/api/api.helper"
import { instance } from "@/api/api.interceptor"
import { EndpointsEnum } from "@/constants/api.constants"
import { IEmailPassword, ITokens } from "@/types/user.types"
import TokensService from "./tokens.service"

class AuthService {
	// Авторизация
	async signIn(data: IEmailPassword) {
		const response = await instance<IEmailPassword>({
			url: EndpointsEnum.AUTH.LOGIN,
			method: "POST",
			data
		})

		return response.data
	}

	// Регистрация
	async signUp(data: IEmailPassword) {
		const response = await instance<IEmailPassword>({
			url: EndpointsEnum.AUTH.REGISTER,
			method: "POST",
			data
		})

		return response.data
	}

	// Получение новой пары токенов
	async getNewTokens() {
		const refreshToken = TokensService.getRefreshToken()

		const response = await axios.post<string, { data: ITokens }>(
			EndpointsEnum.AUTH.GET_NEW_TOKENS,
			{
				refreshToken
			},
			{
				headers: getContentType()
			}
		)

		if (response.data.accessToken)
			TokensService.setTokens(
				response.data.accessToken,
				response.data.refreshToken
			)
	}
}

export default new AuthService()
