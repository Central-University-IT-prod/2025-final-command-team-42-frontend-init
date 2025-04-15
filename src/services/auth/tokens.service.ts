import { STORAGE_KEYS } from "@/constants/api.constants"

class TokensService {
	// Получение access токена
	getAccessToken(): string | null {
		return localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN)
	}

	// Получение refresh токена
	getRefreshToken(): string | null {
		return localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN)
	}

	// Сохранение новой пары токенов
	setTokens(accessTokens: string, refreshToken: string): void {
		localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, accessTokens)
		localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, refreshToken)
	}

	// Очистка всех токенов
	clearTokens(): void {
		localStorage.clear()
	}
}

export default new TokensService()
