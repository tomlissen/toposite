import {QuizerQuestionnaireDTO} from "../quizer/quizer.reducer";
import {nl_provinces} from "./1_nl_provinces";
import {nl_capitals} from "./2_nl_capitals";
import {nl_provinces_and_capitals} from "./3_nl_provinces_and_capitals";

export const questionnaires: QuizerQuestionnaireDTO[] = [
  nl_provinces,
  nl_capitals,
  nl_provinces_and_capitals
];