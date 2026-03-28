export const starterorganizationsServiceItems = [
  { id: "starter-1", label: "Sample organizations service record", status: "draft" },
  { id: "starter-2", label: "Another organizations service record", status: "ready" },
];

export async function loadorganizationsServicePreview() {
  return Promise.resolve(starterorganizationsServiceItems);
}

export async function saveorganizationsServicePreview() {
  return Promise.resolve({
    ok: false,
    message: "The organizations service workflow is intentionally unfinished in N+1 Team Member Queries.",
  });
}
