export interface Settings {
	blocked: boolean
	ignored: boolean
	groupChats: boolean
}

export const DefaultSettings: Settings = {
	blocked: true,
	ignored: true,
	groupChats: true,
}
