import Link from "next/link";
import { import40 } from "./services/ru/import40";
import { export10 } from "./services/ru/export10";
import { transit } from "./services/ru/transit";
import { tamSklad } from "./services/ru/tamSklad";
import { vneTamTerr } from "./services/ru/vneTamTerr";
import { naTamTerr } from "./services/ru/naTamTerr";
import { vnutrPotreb } from "./services/ru/vnutrPotreb";
import { vremVvoz } from "./services/ru/vremVvoz";
import { vremVivoz } from "./services/ru/vremVivoz";
import { reimport } from "./services/ru/reimport";
import { reexport } from "./services/ru/reexport";
import { unichtozhenie } from "./services/ru/unichtozhenie";
import { otkaz } from "./services/ru/otkaz";
import { svobTamZona } from "./services/ru/svobTamZona";
import { svobSklad } from "./services/ru/svobSklad";
import { besposhl } from "./services/ru/besposhl";
import { special } from "./services/ru/special";

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
