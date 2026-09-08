# Optikom — Railway test deployment

This `railway-github` worktree contains the redesigned Optikom site, adapted to the Node.js runtime. It includes all product content and generated images. The original Sites checkout remains in `../site`.

Railway target:

- Project: `perfect-celebration` (`656d9a83-8dbb-408b-a279-53681c01996b`)
- Environment: `production` (`d445fb6d-3185-410f-bd09-7324fa0834f2`)
- Dedicated test service: `optikom-vision-test` (`e6bbc466-d542-4b69-a324-f9f69104ccc4`)
- Explicit service variable: `PORT=3000`

The existing `Optikom` service and its domains are separate from this test service. Pages in the test build carry `noindex, nofollow` metadata. Contact requests use the existing email flow.

## Local validation

```sh
pnpm install --frozen-lockfile
pnpm exec tsc --noEmit
pnpm build
PORT=3081 NODE_ENV=production pnpm start
```

The Docker build installs pinned dependencies, builds the site, and starts `vinext start` as a non-root user. The Node server binds to `0.0.0.0` and reads Railway's `PORT` variable. Railway verifies `/` before the deployment becomes healthy.

## Deploy this test service

```sh
git push https://github.com/mxfrol-bit/Optikom.git HEAD:refs/heads/codex/optikom-vision-test
```

The test service automatically builds from GitHub branch `codex/optikom-vision-test`. Use this branch only; the original `Optikom` service tracks `main`. Direct CLI uploads previously timed out, so publish via GitHub. Verify deployment status against the explicit service ID above. `.railwayignore` and `.dockerignore` exclude local environment files, generated build directories, Git data, and Sites hosting metadata from the uploaded runtime.
