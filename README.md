# actionsutils
utility functions and tasks using GitHub Actions mainly to debug code

If you want to perform more than a single task on one debug step, provide a comma separated values with the steps.

## Suported Tasks
- context
- oidctoken

### context

This simply prints out the `github` context which corresponds to the webhook payload. This is the default behavior if no other task is provided

```yml
      - uses: wechuli/actionsutils@v1.0.0
        with:
          tasks: 'context'
```
### oidctoken

Prints out the decoded OIDC token. You must grant the workflow/job `id-token` permission for this to work

```yml
jobs:
  testjob:
    permissions:
      contents: write
      id-token: write
    runs-on: ubuntu-latest
    steps:   
      - uses: wechuli/actionsutils@v1.0.0
        with:
          tasks: 'oidctoken'
```

