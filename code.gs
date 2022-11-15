var token = "<Telegram bot id>";// telegram bot id
var IndexSheet="<Sheet id>";// google Sheet id
var UrlPublish = "<Deployment Url>"; // google script deploy url
var telegramUrl = "https://api.telegram.org/bot" + token;

function setWebhook() {
var url = telegramUrl + "/setWebhook?url=" + UrlPublish;
var response = UrlFetchApp.fetch(url);
Logger.log(response)
}

function sendText(chatid,text,replymarkup){
var data = {
    method: "post",
    payload: {
      method: "sendMessage",
      chat_id: String(chatid),
      text: text,
      parse_mode: "HTML",
      reply_markup: JSON.stringify(replymarkup)
    }
  };
  UrlFetchApp.fetch('https://api.telegram.org/bot' + token + '/', data);
}

  
