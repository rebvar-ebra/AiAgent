"use client";

import React from "react";
import { FeatureFlag } from "../features/flags"; 
import {
  useSchematicEntitlement,
  useSchematicIsPending,
} from "@schematichq/schematic-react";
import { Progress } from "@/components/ui/progress";

function Usage({
  featureFlag,
  title,
}: {
  featureFlag: FeatureFlag;
  title: string;
}) {
  const isPending = useSchematicIsPending();
  const { featureAllocation, featureUsage, isFeatureEnabled } =
    useSchematicEntitlement(featureFlag); // Fixed destructuring

  const hasUsedAllTokens =
    featureUsage !== undefined &&
    featureAllocation !== undefined &&
    featureUsage >= featureAllocation;

  if (isPending) {
    return <div className="text-gray-400 text-center p-4">Loading...</div>;
  }
  if (hasUsedAllTokens) {
    return (
      <div className="text-gray-600 text-center py-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <div className="px-4 py-2 bg-red-50 rounded-lg">
            <span className="font-medium text-red-700">{featureUsage}</span>
            <span className="text-red-400 mx-2">/</span>
            <span className="font-medium text-red-700">
              {featureAllocation}
            </span>
          </div>
        </div>
        <div className="relative">
          <Progress
            value={100}
            className="h-3 rounded-full bg-gray-100 [&>*]:bg-red-600"
          />
          <p className="text-sm text-red-600 mt-2">
            You’ve used all available tokens. Please upgrade your plan to
            continue using this feature.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">
        {isFeatureEnabled
          ? hasUsedAllTokens
            ? "You've used all your available tokens."
            : `Usage: ${featureUsage}/${featureAllocation} tokens`
          : "This feature is not enabled for your account."}
      </p>
    </div>
  );
}

export default Usage;
