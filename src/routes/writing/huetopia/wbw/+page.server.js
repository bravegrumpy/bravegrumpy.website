import { redirect } from "@sveltejs/kit";

export function load() {
  redirect(308, "/archive/archive-01/work-by-week/wbw.html");
}
