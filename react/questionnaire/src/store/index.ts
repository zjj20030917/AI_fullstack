// 创建总仓库
import { configureStore } from "@reduxjs/toolkit";
import questionnaireReducer from "./modules/questionnaire";

export const store  = configureStore({
  reducer: {
    questionnaire: questionnaireReducer,
  }
})


// 获取整个仓库的状态类型
export type RootState = ReturnType<typeof store.getState>

export interface Ques {
    topic_name?: string,
    
}