# Show Blocked

A [Valenced](https://github.com/valenced-mod) plugin that shows messages from users you blocked or ignored as normal messages: no collapsed "N blocked messages" group, no "Show message" tap, no dimming.

## Behaviour
- **Servers and threads:** messages from blocked and ignored users show normally.
- **Group chats:** same, with the **Also in group chats** switch (on by default).
- **Pings:** the **Allow pings from blocked users** switch (on by default) keeps messages that mention you visible.
- **1:1 DMs:** same, with the **Also in direct messages** switch (on by default). Blocked and ignored users still cannot DM you; this only changes how old messages look.

It only changes how messages are displayed. It does not unblock anyone, change notifications or send anything.

Messages that are already loaded keep their old look; switch channel or restart Discord to reload them.

## Install (test build)

Add this URL in **Settings → Plugins → Settings Icon → Repository URL**:

```text
https://raw.githubusercontent.com/dariussbezy/Plugins-Testing-Repo/main/index.json
```

Then install **Show Blocked** from Browse. This repository holds the source and the test build; it is not yet part of [dariussbezy's Plugins](https://github.com/dariussbezy/dariussbezy-Plugins).
