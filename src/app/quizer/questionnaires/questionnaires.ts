import {QuizerQuestionnaireDTO} from "../quizer/quizer.reducer";
import {nl_provinces} from "./1_nl_provinces";
import {nl_capitals} from "./2_nl_capitals";
import {nl_provinces_and_capitals} from "./3_nl_provinces_and_capitals";
import {nl_zeeen_en_meren} from "./4_nl_zeeen_en_meren";
import {nl_rivieren_en_kanalen} from "./5_nl_rivieren_en_kanalen"
import {nl_wateren} from "./6_nl_wateren"
import {nl_friesland} from "./7_nl_friesland"
import {nl_groningen} from "./8_nl_groningen";
import {nl_drenthe} from "./9_nl_drenthe";
import {nl_noordholland} from "./10_nl_noordholland";
import {nl_flevoland} from "./11_nl_flevoland";
import {nl_overijssel} from "./12_nl_overijssel";
import {nl_zuidholland} from "./13_nl_zuidholland";
import {nl_utrecht} from "./14_nl_utrecht";
import {nl_gelderland} from "./15_nl_gelderland";
import {nl_zeeland} from "./16_nl_zeeland";
import {nl_noordbrabant} from "./17_nl_noordbrabant";
import {nl_limburg} from "./18_nl_limburg";
import {eu_landen} from "./19_eu_landen"
import {eu_hoofdsteden} from "./20_eu_hoofdsteden";
import {eu_zee_en_meren} from "./21_eu_zee_en_meren";
import {eu_rivieren} from "./22_eu_rivieren";
import {eu_gebergten_en_wateren} from "./23_eu_gebergten_en_wateren";
import {eu_noord_europa_gemend} from "./24_eu_noord_europa_gemend";
import {eu_oost_europa_gemengd} from "./25_eu_oost_europa_gemengd";
import {eu_zuid_europa_gemengd_1} from "./26_eu_zuid_europa_gemengd_1";
import {eu_west_europa_gemengd_3} from "./27_eu_west_europa_gemend_3";
import {eu_landen_hoofdsteden} from "./28_eu_landen_hoofdsteden";
import {world_werelddelen_gebieden} from "./29_world_werelddelen_gebieden";
import {world_noord_amerika} from "./30_world_noord_amerika"
import {world_noord_amerika_water_gebied} from "./31_world_noord_amerika_water_gebied"
import {world_midden_amerika} from "./32_world_midden_amerika"
import {world_midden_amerika_hoofdsteden} from "./33_world_midden_amerika_hoofdsteden"
import {world_midden_amerika_wateren_gebieden} from "./34_world_midden_amerika_wateren_gebieden";
import {world_azie_landen} from "./35_world_azie_landen"
import {world_azie_hoofdsteden} from "./36_world_azie_hoofdsteden"
import {world_azie_wateren_gebieden} from "./37_world_azie_wateren_gebieden"

export const questionnaires: QuizerQuestionnaireDTO[] = [
  nl_provinces,
  nl_capitals,
  nl_provinces_and_capitals,
  nl_zeeen_en_meren,
  nl_rivieren_en_kanalen,
  nl_wateren,
  nl_friesland,
  nl_groningen,
  // nl_noordholland,
  nl_flevoland,
  nl_overijssel,
  nl_drenthe,
  nl_utrecht,
  nl_zuidholland,
  nl_zeeland,
  nl_noordbrabant,
  nl_limburg,
  nl_gelderland,
  eu_landen,
  eu_hoofdsteden,
  eu_zee_en_meren,
  eu_rivieren,
  eu_gebergten_en_wateren,
  eu_noord_europa_gemend,
  eu_oost_europa_gemengd,
  eu_zuid_europa_gemengd_1,
  eu_west_europa_gemengd_3,
  eu_landen_hoofdsteden,
  world_werelddelen_gebieden,
  world_noord_amerika,
  world_noord_amerika_water_gebied,
  world_midden_amerika,
  world_midden_amerika_hoofdsteden,
  world_midden_amerika_wateren_gebieden,
  world_azie_landen,
  world_azie_hoofdsteden,
  world_azie_wateren_gebieden
];
