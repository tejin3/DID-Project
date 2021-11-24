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
    query:
      "SELECT t1.survey_id, t1.survey_start_date ,t1.survey_end_date ,t1.survey_title ,t1.survey_description ,(t1.survey_request_count/t1.survey_complete_count)*100 as total_complte ,t1.user_account, (Datediff(date_format(t1.survey_end_date,'%Y-%m-%d'), date_format(now(),'%Y-%m-%d'))) as dDay,((t1.survey_request_count/t1.survey_complete_count)*100) >= 100  AS selection FROM t_survey t1  where t1.user_account = ?",
  },
  getCompletePeople: {
    query: "select * from t_complete",
  },
  insertCompletePeople: {
    query: "insert into t_complete set ?",
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
  updateReward: {
    query:
      "update t_user set user_point = user_point + ?, user_coupon = user_coupon + ? where user_account = ? ",
  },
  getGoods: {
    query: "select * from t_goods",
  },

  exchangeGoods: {
    query:
      "update t_user_goods T1 right join t_user T2 on(T2.user_account = T1.user_account) set T1.user_goods_amount = user_goods_amount + 1 , T2.user_coupon = T2.user_coupon - ? where T1.user_account = ? and T1.goods_id = ?",
  },

  subtractCoupon: {
    query:
      "update t_user set user_coupon = user_coupon - ? where user_account = ? ",
  },

  getUser: {
    query: "select * from t_user",
  },

  getUserByAccount: {
    query: `select * from t_user where user_account = ?`,
  },

  getUserGoods: {
    query:
      "select T1.user_account, T1.user_goods_amount, T2.goods_name, T2.goods_issuer, T2.goods_valid, T2.goods_image_path from t_user_goods T1, t_goods T2 where T1.goods_id = T2.goods_id   ",
  },
};
