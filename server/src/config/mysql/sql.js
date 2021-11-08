module.exports = {
  confirm: {
    query: "select * from t_account where user_address = ?",
  },
  getSpecifiedArtList: {
    query: "select * from t_art where user_name = ?",
  },
  getArtList: {
    query: "SELECT * from t_art",
  },
  getArt: {
    query: "select * from t_art where art_id = ?",
  },
  getAccountList: {
    query: "SELECT * FROM t_account",
  },
  getAccount: {
    query: "SELECT * FROM t_account WHERE user_id = ?",
  },
  registerAccount: {
    query: "insert into t_account set ?",
  },
  registerArt: {
    query: "INSERT INTO t_art set ?",
  },
  getOwnedNft: {
    query: `select * from t_art
                where t_art.user_name in (select t_account.user_name from t_account where user_address = ?)`,
  },
  updateNFT: {
    query: `update t_art SET user_name = ?, profile_image_path =? where art_id = 4`,
  },
  testImgUp: {
    query: `insert into t_test set ?`,
  },
  getSurvey: {
    query: "select * from t_survey",
  },
  getCompletePeople: {
    query: "select * from t_complete",
  },
  getTestVc: {
    query: "select * from t_test_vc",
  },
  // getSurvey1: {
  //   query:
  //     "SELECT t1.survey_id, t1.survey_count, t1.survey_start_date ,t1.survey_end_date ,t1.survey_title ,t1.survey_description ,(t1.survey_request_count/t1.survey_complete_count)*100 as total_complte ,t1.survey_company_account , t3.vc_name ,t3.vc_age FROM t_survey t1, t_test_vc t3 WHERE t1.survey_id = t3.survey_id",
  // },
  getSurvey1: {
    query:
      "SELECT t1.survey_id, t1.survey_count, t1.survey_start_date ,t1.survey_end_date ,t1.survey_title ,t1.survey_description ,(t1.survey_request_count/t1.survey_complete_count)*100 as total_complte ,t1.survey_company_account FROM t_survey t1  where t1.survey_company_account = ?",
  },
  // and t1.survey_company_account = ?
};
