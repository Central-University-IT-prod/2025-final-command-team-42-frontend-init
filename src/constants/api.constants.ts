export const SERVER_URL = process.env.SERVER_URL

export const enum STORAGE_KEYS {
	ACCESS_TOKEN = "access-token",
	REFRESH_TOKEN = "refresh-token"
}

export const EndpointsEnum = {
	AUTH: {
		GET_NEW_TOKENS: "/auth/access-token",
		REGISTER: "/auth/register",
		LOGIN: "/auth/login"
	}
} as const
