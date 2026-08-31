# Web3 Wallet Flow

Wallet connection should be treated as an explicit application state.

## Connection states
- Disconnected
- Connecting
- Connected
- Connection error

The interface should not display a connected account until the provider confirms it. Account changes and network changes should refresh the displayed state rather than leaving stale wallet information on screen.
