import { createSlice } from "@reduxjs/toolkit";

// 创建子模块
const questionnaire = createSlice({
    name: 'questionnaire',
    initialState: {
        questions: [],
    },
    reducers: {
        setQuestions(state, action) {
            state.questions = action.payload;
        }
    }
})

// 导出子模块的reducer
export default questionnaire.reducer;

// 导出子模块的action
export const { setQuestions } = questionnaire.actions;
