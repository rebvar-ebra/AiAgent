"use server";

import { currentUser } from "@clerk/nextjs/server";
import { SchematicClient } from "@schematichq/schematic-typescript-node";

const apiKey = process.env.SCHEMATIC_API_KEY; // Fixed typo

if (!apiKey) throw new Error("Schematic API key is not set");

const client = new SchematicClient({ apiKey });

export async function getTemporaryAccessToken(): Promise<string | null> {
  const user = await currentUser();
  if (!user) return null;

  try {
    const res = await client.accesstokens.issueTemporaryAccessToken({
      resourceType: "company",
      lookup: { id: user.id },
    });

    return res.data?.token || null; // Extract and return only the token
  } catch (error) {
    console.error("Error issuing temporary access token:", error);
    return null;
  }
}
