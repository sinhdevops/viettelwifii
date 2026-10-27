import NETVT01Copy from "./copy/NETVT01";
import MESHVT01Copy from "./copy/MESHVT01";
import NETVT1Copy from "./copy/NETVT1";
import NETVT2Copy from "./copy/NETVT2";
import MESHVT1Copy from "./copy/MESHVT1";
import GIGA1Copy from "./copy/GIGA1";
import GIGA2Copy from "./copy/GIGA2";
import GIGA3Copy from "./copy/GIGA3";
import GIGA4Copy from "./copy/GIGA4";
import MESHVT2Copy from "./copy/MESHVT2";
import MESHVT3Copy from "./copy/MESHVT3";
import NETVT1_CAM1Copy from "./copy/NETVT1_CAM1";
import NETVT2_CAM1Copy from "./copy/NETVT2_CAM1";
import MESHVT1_CAM1Copy from "./copy/MESHVT1_CAM1";
import MESHVT2_CAM1Copy from "./copy/MESHVT2_CAM1";
import NETVT1_GIAITRICopy from "./copy/NETVT1_GIAITRI";
import NETVT2_GIAITRICopy from "./copy/NETVT2_GIAITRI";
import MESHVT1_GIAITRICopy from "./copy/MESHVT1_GIAITRI";

import type { InternetRoute } from "./source-pages";

/** Server Component per source article; generated once into readable, editable TSX. */
export const INTERNET_COPY: Record<InternetRoute, () => React.JSX.Element> = {
  "/internet/NETVT01": NETVT01Copy,
  "/internet/MESHVT01": MESHVT01Copy,
  "/internet/NETVT1": NETVT1Copy,
  "/internet/NETVT2": NETVT2Copy,
  "/internet/MESHVT1": MESHVT1Copy,
  "/internet/GIGA1": GIGA1Copy,
  "/internet/GIGA2": GIGA2Copy,
  "/internet/GIGA3": GIGA3Copy,
  "/internet/GIGA4": GIGA4Copy,
  "/internet/MESHVT2": MESHVT2Copy,
  "/internet/MESHVT3": MESHVT3Copy,
  "/internet/NETVT1_CAM1": NETVT1_CAM1Copy,
  "/internet/NETVT2_CAM1": NETVT2_CAM1Copy,
  "/internet/MESHVT1_CAM1": MESHVT1_CAM1Copy,
  "/internet/MESHVT2_CAM1": MESHVT2_CAM1Copy,
  "/internet/NETVT1_GIAITRI": NETVT1_GIAITRICopy,
  "/internet/NETVT2_GIAITRI": NETVT2_GIAITRICopy,
  "/internet/MESHVT1_GIAITRI": MESHVT1_GIAITRICopy,
};
