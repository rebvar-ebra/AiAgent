"use server";

import { redirect } from "next/navigation";

export async function analyesYoutubeVideo(formData: FormData) {
  const url = formData.get("url"?.toString());
  if (!url) return;
  const videoId = "abc"; ///To do
  if (!videoId) return;
  redirect(`/video/${videoId}/analysis`);
}
