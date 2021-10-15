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
};
