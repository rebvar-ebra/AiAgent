export enum FeatureFlag {
  TRANSCRIPTION = "transcription",
  IMAGE_GENERATION = "image-generating",
  SCRIPT_GENERATION = "script-generation",

  TITLE_GENERATION = "title-generation",

  VIDEO_ANALYSIS = "video-analysis",
}

export const featureFlagEvent: Record<FeatureFlag, { event: string }> = {
  [FeatureFlag.TRANSCRIPTION]: { event: "transcription" },
  [FeatureFlag.IMAGE_GENERATION]: { event: "image generating" },
  [FeatureFlag.SCRIPT_GENERATION]: { event: "" },
  [FeatureFlag.TITLE_GENERATION]: { event: "title generation" },
  [FeatureFlag.VIDEO_ANALYSIS]: { event: "video analysis" },
};
