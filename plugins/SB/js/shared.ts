export interface Settings {
	blocked: boolean
	ignored: boolean
	groupChats: boolean
	directMessages: boolean
}

export const DefaultSettings: Settings = {
	blocked: true,
	ignored: true,
	groupChats: true,
	directMessages: true,
}
