export const organizationsRoute = {
  path: "/organizations",
  method: "GET",
};

export function handleOrganizations() {
  return {
    ok: true,
    route: "organizations",
    message: "Starter route for N+1 Team Member Queries",
  };
}
