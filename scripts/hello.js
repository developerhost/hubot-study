'use strict';
module.exports = (robot) => {
    // ここではrobotという引数を持つ無名関数尾モジュールとしている
    robot.hear(/hello>/i, (msg) => {
        // /hello>/i,これは正規表現で、大文字小文字を問わず、hello>という文字にマッチし、もしマッチしたら次に渡す無名関数を実行せよという形式
        const user_id = msg.message.user.id;
        msg.send(`Hello, <@${user_id}>`);
        // <@${user_id}>'この文字列は、botがslack上でユーザーにメンションするためのエスケープシーケンス
    });
    // これがHubotのAPIの利用方法
    // ここでは、msgオブジェクトからユーザーのIDを受け取り、「Hello,@あなたのユーザーID」と発言する実装になっている
    robot.hear(/おみくじ/i, (msg) => {
        const user_id = msg.message.user.id;
        const lots = ['大吉','吉','中吉','末吉','凶'];
        const lot = lots[Math.floor(Math.random() * lots.length)];
        msg.send(`${lot},<@${user_id}>`);
    });
};