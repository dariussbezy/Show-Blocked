import Page from '@valenced/components/Page'
import TableRowAssetIcon from '@valenced/components/TableRowAssetIcon'
import { Design } from '@valenced/discord/design'
import { ScrollView } from 'react-native'
import manifest from '../manifest.json'
import { DefaultSettings } from './shared'
import type { PluginSettingsComponent } from '@valenced/plugins/types'
import type { ComponentProps } from 'react'
import type { Settings } from './shared'

const icon = (name: string) => <TableRowAssetIcon name={name} />

const GUIDE: [string, string][] = [
	[
		'What it does',
		'Messages from blocked or ignored users show up like any other message, with no collapsed group and no Show message tap.',
	],
	[
		'Where',
		'Server channels and threads, plus group chats and 1:1 DMs if enabled.',
	],
	[
		'Not showing yet?',
		'Messages already loaded keep their old look. Switch channel or restart Discord to reload them.',
	],
]

export default function SettingsComponent({
	api: { jsonStorage: storage },
}: ComponentProps<PluginSettingsComponent<{ jsonStorage: Settings }>>) {
	const { blocked, ignored, groupChats, directMessages, pings } = {
		...DefaultSettings,
		...storage.use(),
	}

	return (
		<ScrollView keyboardShouldPersistTaps="handled">
			<Page>
				<Design.Stack spacing={24}>
					<Design.TableRowGroup>
						<Design.TableSwitchRow
							icon={icon('DenyIcon')}
							label="Show blocked users' messages"
							value={blocked}
							onValueChange={blocked => storage.set({ blocked })}
						/>
						<Design.TableSwitchRow
							icon={icon('EyeSlashIcon')}
							label="Show ignored users' messages"
							value={ignored}
							onValueChange={ignored => storage.set({ ignored })}
						/>
						<Design.TableSwitchRow
							icon={icon('GroupIcon')}
							label="Also in group chats"
							subLabel="Group chats are shared with other people, so this is optional."
							value={groupChats}
							onValueChange={groupChats => storage.set({ groupChats })}
						/>
						<Design.TableSwitchRow
							icon={icon('UserIcon')}
							label="Also in direct messages"
							subLabel="Only changes how old messages look. Blocked and ignored users still cannot DM you."
							value={directMessages}
							onValueChange={directMessages => storage.set({ directMessages })}
						/>
						<Design.TableSwitchRow
							icon={icon('BellIcon')}
							label="Allow pings from blocked users"
							subLabel="Messages that mention you stay visible and can ping you. Off keeps Discord's behaviour for them."
							value={pings}
							onValueChange={pings => storage.set({ pings })}
						/>
					</Design.TableRowGroup>
					<Design.TableRowGroup title="Quick guide">
						{GUIDE.map(([label, subLabel]) => (
							<Design.TableRow
								key={label}
								icon={icon('CircleInformationIcon')}
								label={label}
								subLabel={subLabel}
							/>
						))}
					</Design.TableRowGroup>
					<Design.Text
						variant="text-xs/normal"
						color="text-muted"
						style={{ textAlign: 'center' }}
					>
						{`${manifest.name} ${manifest.version}`}
					</Design.Text>
				</Design.Stack>
			</Page>
		</ScrollView>
	)
}
