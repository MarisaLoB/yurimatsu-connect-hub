# Your production integration area

The app currently runs entirely with mock records and session-only React state. Nothing is paid, submitted to a server, or stored persistently. No customer credentials or real customer information should be entered during this demo.

Reserved extension folders:
- `backend/`: your future data access, authentication, customer storage, and server integration contracts.
- `payments/`: your future payment provider contracts and configuration. Payment secrets must remain server-side; never expose them through VITE variables or browser imports.
- `privacy/`: your reviewed privacy notice, cookie/consent requirements, retention policy, and customer data access/deletion requirements. No legal notice has been invented or published on your behalf.

These folders are intentionally not imported by the application. Replace the mock data and state transitions only when your integrations are ready. See `src/lib/community-data.ts` for mock records and `src/components/community/provider.tsx` for reservation, introduction, and saved-content state.

## GitHub
This is a standard Git-compatible source project. In Lovable open the Plus menu beside the chat input → GitHub → Connect project. Authorize GitHub and create the repository. Lovable and GitHub then sync changes in both directions. No GitHub connection has been made by this demo.
