# Web3 Network Safety

Transactions and wallet actions should verify the active network before presenting an action as ready.

## UI rules
Show the connected chain and account in the interface. Disable actions that require a supported network when the current chain is unsupported.

## Transaction feedback
Represent pending, confirmed, and failed transactions separately. A rejected wallet request should return the UI to an actionable state without reporting it as a successful transaction.
