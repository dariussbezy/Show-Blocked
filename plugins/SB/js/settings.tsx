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
		'Server channels, threads and, if enabled, group chats. 1:1 DMs are never touched.',
	],
	[
		'Not showing yet?',
		'Messages already loaded keep their old look. Switch channel or restart Discord to reload them.',
	],
]

export default function SettingsComponent({
	api: { jsonStorage: storage },
}: ComponentProps<PluginSettingsComponent<{ jsonStorage: Settings }>>) {
	const { blocked, ignored, groupChats } = {
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
					</Design.TableRowGroup>
					<Design.TableRowGroup>
						<Design.TableRow
							icon={icon('UserIcon')}
							label="Direct messages stay protected"
							subLabel="Blocked and ignored users still cannot DM you, and 1:1 DM conversations with them keep Discord's normal behaviour."
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
