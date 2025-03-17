"use server";

import { redirect } from "next/navigation";
import { getVideoIdFromUrl } from "@/lib/getVideoidFromUrl";
export async function analyzeYoutubeVideo(formData: FormData) {
  const url = formData.get("url") as string; // ✅ Explicitly cast to string
  if (!url) return;
  const videoId = getVideoIdFromUrl(url); ///To do
  console.log("videoid------>",videoId);
  if (!videoId) return;
  redirect(`/video/${videoId}/analysis`);
}
