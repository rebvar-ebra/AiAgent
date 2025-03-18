"use client";

import React from "react";
import { FeatureFlag } from "../features/falgs";
import {
  useSchematicEntitlement,
  useSchematicIsPending,
} from "@schematichq/schematic-react";

function Usage({ featureFlag, title }: { featureFlag: FeatureFlag; title }) {
  const isPending = useSchematicIsPending();
  const[featureAllocation,featureUsage,value:isFeatureEnabled] = useSchematicEntitlement(featureFlag)
  const hasUsedAllToken= featureUsage&&featureAllocation&&featureUsage>=featureAllocation;

  if(!isPending){
	return <div className="text-gray-400 text-center p-4">Loading...</div>
  }
  return <div>Usage</div>;
}

export default Usage;
