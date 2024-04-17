export const ROOT_URL = "/";
export const OPTIMISTIC_TODOS_URL = "/optimistic-todos";
export const DYNAMIC_CATCH_ALL_ROUTES_URL = (slug: string) => {
  if (!slug) return "/dynamic-catch-all-routes";
  return `/dynamic-catch-all-routes/${slug}`;
};
