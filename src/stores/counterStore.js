//https://docs.astro.build/en/recipes/sharing-state-islands/
import { atom } from "nanostores";

export const counter = atom(0);
