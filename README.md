# Website Development for SocialGage

## Branch and branch rules

There are 2 *main* branches
```
  master --> production branch (prod)
  develop --> development branch (dev)
```

- Code pushing to __master__ or __develop__ is NOT permitted, everything needs to be done via pull request (PR for short).
- Individuals need to create their own *feature* branches and push to their branches, then create PR from their branches to merge to __develop__. From develop, they can create a *release* brach to push code to prod - **master**

## Workflow:
```
  Working locally --> Push to a feature, example: feature/ABC --> create PR from feature/ABC to develop --> create release branch, example name: release/ABC --> create PR from release/ABC to master --> merge
```
