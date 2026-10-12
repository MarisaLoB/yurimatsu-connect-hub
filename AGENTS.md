<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application architecture
- Keep the shared community shell and demo state provider around the root Outlet so reservations, introductions, and saved insights survive in-app navigation.
- Keep mock records and deterministic matching in a browser-safe data module; no production services are connected during the demo.
- Give each named community view its own TanStack leaf route and metadata to support direct links and GitHub-based maintenance.
- Keep future backend, payments, and privacy integration areas isolated under src/integrations/custom; never place private credentials in browser code.
