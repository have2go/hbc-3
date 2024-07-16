import Link from "next/link";
import { import40 } from "./services/import40";
import { export10 } from "./services/export10";
import { transit } from "./services/transit";
import { tamSklad } from "./services/tamSklad";
import { vneTamTerr } from "./services/vneTamTerr";
import { naTamTerr } from "./services/naTamTerr";
import { vnutrPotreb } from "./services/vnutrPotreb";
import { vremVvoz } from "./services/vremVvoz";
import { vremVivoz } from "./services/vremVivoz";
import { reimport } from "./services/reimport";
import { reexport } from "./services/reexport";
import { unichtozhenie } from "./services/unichtozhenie";
import { otkaz } from "./services/otkaz";
import { svobTamZona } from "./services/svobTamZona";
import { svobSklad } from "./services/svobSklad";
import { besposhl } from "./services/besposhl";
import { special } from "./services/special";

export const services = [
  import40,
  export10,
  transit,
  tamSklad,
  vneTamTerr,
  naTamTerr,
  vnutrPotreb,
  vremVvoz,
  vremVivoz,
  reimport,
  reexport,
  unichtozhenie,
  otkaz,
  svobTamZona,
  svobSklad,
  besposhl,
  special,
];
