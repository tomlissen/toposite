import {QuizerQuestionnaireDTO} from "../quizer/quizer.reducer";
import {nl_provinces} from "./1_nl_provinces";
import {nl_capitals} from "./2_nl_capitals";
import {nl_provinces_and_capitals} from "./3_nl_provinces_and_capitals";
import {nl_zeeen_en_meren} from "./4_nl_zeeen_en_meren";
import {nl_rivieren_en_kanalen} from "./5_nl_rivieren_en_kanalen"
import {nl_utrecht} from "./6_nl_utrecht";

export const questionnaires: QuizerQuestionnaireDTO[] = [
  nl_provinces,
  nl_capitals,
  nl_provinces_and_capitals,
  nl_zeeen_en_meren,
  nl_rivieren_en_kanalen,
  nl_utrecht
];
