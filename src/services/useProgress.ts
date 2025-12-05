import { atom, useAtom } from "jotai";
import { Clan, clans } from "../util/data";
import { type TotalProgress } from "../util/types";
import { useCallback, useEffect, useMemo } from "react";
import storage from "../util/storage/storage";
import _ from "lodash";

const progressKey = "mt2:progress";

const blankProgress = Object.fromEntries(
  clans.map((clanDef) => [clanDef.clan, {}])
) as TotalProgress;

const progressAtom = atom<TotalProgress>(blankProgress);
const inittedAtom = atom(false);

const useProgress = () => {
  const [progress, setProgress] = useAtom(progressAtom);
  const [initted, setInitted] = useAtom(inittedAtom);

  useEffect(() => {
    if (initted) return;
    setInitted(true);
    (async () => {
      const savedProgress = await storage.get<TotalProgress>(progressKey);
      if (savedProgress) setProgress(savedProgress);
    })();
  }, [initted, setInitted]);

  const getClanProgress = useCallback(
    (clan: Clan) => progress[clan],
    [progress]
  );

  const toggleClanProgress = useCallback(
    (primaryClan: Clan, secondaryClan: Clan) => {
      setProgress((prev) => {
        const origClanProgress = prev[primaryClan];
        const newProgress = {
          ...prev,
          [primaryClan]: {
            ...origClanProgress,
            [secondaryClan]: !origClanProgress[secondaryClan],
          },
        };
        storage.set(progressKey, newProgress);
        return newProgress;
      });
    },
    [setProgress]
  );

  const missing = useMemo(() => {
    const combos: [Clan, Clan][] = [];
    clans.forEach((primClanDef) => {
      const primClan = primClanDef.clan;
      const secondary = progress[primClan];
      clans.forEach((secClanDef) => {
        const secClan = secClanDef.clan;
        if (secClan === primClan) return;
        if (!secondary[secClan]) combos.push([primClan, secClan]);
      });
    });
    return combos;
  }, [progress]);

  return {
    getClanProgress,
    toggleClanProgress,
    missing,
  };
};

export default useProgress;
