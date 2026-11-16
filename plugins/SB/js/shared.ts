export interface Settings {
	blocked: boolean
	ignored: boolean
	groupChats: boolean
	directMessages: boolean
	pings: boolean
}

export const DefaultSettings: Settings = {
	blocked: true,
	ignored: true,
	groupChats: true,
	directMessages: true,
	pings: true,
}
