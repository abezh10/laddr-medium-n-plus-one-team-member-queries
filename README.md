# N+1 Team Member Queries

- Category: Debug
- Topic: Performance Bugs
- Difficulty: Medium

## Overview
This sample repository is set up for a medium debug exercise in the performance bugs track. The starter code is intentionally lightweight: it gives Sandpack something meaningful to render or inspect, but it still leaves the real evaluation work in place so a candidate has to trace the current behavior and fix the underlying defect.

## Exercise Summary
The organizations endpoint performs one member query per organization in production. Remove the N+1 pattern and fetch organization and member data efficiently.

## Starter State
The current scaffold keeps the requested folder layout intact and includes small task-adjacent starter implementations. Frontend files render simple placeholder UI, while routes, services, hooks, utilities, and data files expose minimal sample data or placeholder behavior without solving the exercise for the learner.

## Repo Files
- `package.json`
- `server/db/queries/organizations.ts`
- `server/routes/organizations.ts`
- `server/services/organizationsService.ts`

## Likely Change Areas
- `server/db/queries`
- `server/routes`
- `server/services`

## Sandbox Notes
These files are intentionally small and preview-friendly. They should render a lightweight surface where that makes sense, while still leaving the real build, debug, refactor, security, or migration work undone.
