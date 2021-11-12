module.exports = {
    getSurveys: {
        query: "select * from t_survey",
    },
    getSurveyById: {
        query: `select * from t_survey where survey_id = ?`,
    },
    getSurveyByIds: {
        query: `select * from t_survey where survey_id in (?)`,
    },
    getSurveyByCompany: {
        query: "SELECT t1.survey_id, t1.survey_start_date ,t1.survey_end_date ,t1.survey_title ,t1.survey_description ,(t1.survey_request_count/t1.survey_complete_count)*100 as total_complte ,t1.user_account, (Datediff(date_format(t1.survey_end_date,'%Y-%m-%d'), date_format(now(),'%Y-%m-%d'))) as dDay FROM t_survey t1  where t1.user_account = ?",
    },
    getCompletePeople: {
        query: "select * from t_complete",
    },
    getQuestions: {
        query: "select * from t_question where survey_id = ?",
    },
    insertAnswer: {
        query: "insert into t_answer set ?",
    },
    discountDay: {
        query: `
    select Datediff(T2.survey_end_date, now()) as "dday"
    from t_survey T2`,
    },
    insertReward: {
        query: "insert into t_user set ?",
    },
};
