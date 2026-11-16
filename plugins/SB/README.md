# Show Blocked

Shows messages from users you blocked or ignored as normal messages, as if they were not blocked. No collapsed "N blocked messages" group, no "Show message" tap, no dimming.

## What it does
- Server channels and threads: messages from blocked and ignored users show normally.
- Group chats: same, controlled by **Also in group chats** (on by default).
- 1:1 DMs: never touched. Blocked and ignored users still cannot DM you, and those conversations keep Discord's normal behaviour.

## Settings
- **Show blocked users' messages** (on)
- **Show ignored users' messages** (on)
- **Also in group chats** (on)

## Notes
- Only affects how messages are displayed. It does not unblock anyone, change your relationships or notifications, or send anything.
- Messages already loaded keep their old look; switch channel or restart Discord to reload them.
- How it works: it makes `RelationshipStore.isBlockedForMessage` and `isIgnoredForMessage` answer "no" for messages outside 1:1 DMs, and restores them when the plugin stops.
