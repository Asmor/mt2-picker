export const Clan = {
  Awoken: "Awoken",
  Banished: "Banished",
  Hellhorned: "Hellhorned",
  LazarusLeague: "LazarusLeague",
  LunaCoven: "LunaCoven",
  MeltingRemnant: "MeltingRemnant",
  Pyreborne: "Pyreborne",
  Stygian: "Stygian",
  Umbra: "Umbra",
  Underlegion: "Underlegion",
} as const;

export type Clan = keyof typeof Clan;

export interface ClanDef {
  name: string;
  clan: Clan;
  icon: string;
  champ: string;
  altChamp: string;
  mt: 1 | 2;
}

export const clanDefs: Record<Clan, ClanDef> = {
  Banished: {
    name: "Banished",
    clan: Clan.Banished,
    mt: 1,
    icon: "assets/clan-banished.png",
    champ: "assets/champ-bn.png",
    altChamp: "assets/champ-bn-alt.png",
  },
  Pyreborne: {
    name: "Pyreborne",
    clan: Clan.Pyreborne,
    mt: 1,
    icon: "assets/clan-pyreborne.png",
    champ: "assets/champ-pb.png",
    altChamp: "assets/champ-pb-alt.png",
  },
  LunaCoven: {
    name: "LunaCoven",
    clan: Clan.LunaCoven,
    mt: 1,
    icon: "assets/clan-luna-coven.png",
    champ: "assets/champ-lc.png",
    altChamp: "assets/champ-lc-alt.png",
  },
  Underlegion: {
    name: "Underlegion",
    clan: Clan.Underlegion,
    mt: 1,
    icon: "assets/clan-underlegion.png",
    champ: "assets/champ-ul.png",
    altChamp: "assets/champ-ul-alt.png",
  },
  LazarusLeague: {
    name: "Lazarus League",
    clan: Clan.LazarusLeague,
    mt: 1,
    icon: "assets/clan-lazarus-league.png",
    champ: "assets/champ-ll.png",
    altChamp: "assets/champ-ll-alt.png",
  },
  Hellhorned: {
    name: "Hellhorned",
    clan: Clan.Hellhorned,
    mt: 1,
    icon: "assets/clan-hellhorned.png",
    champ: "assets/champ-hh.png",
    altChamp: "assets/champ-hh-alt.png",
  },
  Awoken: {
    name: "Awoken",
    clan: Clan.Awoken,
    mt: 1,
    icon: "assets/clan-awoken.png",
    champ: "assets/champ-aw.png",
    altChamp: "assets/champ-aw-alt.png",
  },
  Stygian: {
    name: "Stygian",
    clan: Clan.Stygian,
    mt: 1,
    icon: "assets/clan-stygian.png",
    champ: "assets/champ-st.png",
    altChamp: "assets/champ-st-alt.png",
  },
  Umbra: {
    name: "Umbra",
    clan: Clan.Umbra,
    mt: 1,
    icon: "assets/clan-umbra.png",
    champ: "assets/champ-um.png",
    altChamp: "assets/champ-um-alt.png",
  },
  MeltingRemnant: {
    name: "Melting Remnant",
    clan: Clan.MeltingRemnant,
    mt: 1,
    icon: "assets/clan-melting-remnant.png",
    champ: "assets/champ-mr.png",
    altChamp: "assets/champ-mr-alt.png",
  },
};

export const mt1Clans = [
  clanDefs.Hellhorned,
  clanDefs.Awoken,
  clanDefs.Stygian,
  clanDefs.Umbra,
  clanDefs.MeltingRemnant,
];

export const mt2Clans = [
  clanDefs.Banished,
  clanDefs.Pyreborne,
  clanDefs.LunaCoven,
  clanDefs.Underlegion,
  clanDefs.LazarusLeague,
];

export const clans = [...mt2Clans, ...mt1Clans];
