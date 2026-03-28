export const organizationsQuery = `SELECT id, label, status FROM organizations LIMIT 25;`;

export function buildOrganizationsQuery(search = "") {
  return {
    text: organizationsQuery,
    values: [search],
  };
}
