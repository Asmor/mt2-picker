import type { Clan } from "./data";

export type TotalProgress = Record<Clan, ClanProgress>;
export type ClanProgress = Partial<Record<Clan, boolean>>;
