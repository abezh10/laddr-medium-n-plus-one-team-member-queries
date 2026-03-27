# N+1 Team Member Queries

- Category: Debug / Performance Bugs
- Difficulty: Medium

## Contains
- `server/routes/organizations.ts`
- `server/services/organizationsService.ts`
- `server/db/queries/organizations.ts`
- `package.json`

## Prompt
The organizations endpoint performs one member query per organization in production. Remove the N+1 pattern and fetch organization and member data efficiently.

## Likely Change Dirs
- `server/routes`
- `server/services`
- `server/db/queries`
