function doPost(e) {
  var stringJson = e.postData.getDataAsString();
  var updates = JSON.parse(stringJson);
  var text=updates.message.text
  var data = [{}];
  data=text.toChatText(' ');
  if(data[0].startsWith('/')){
    if(data[0]=='/start'){           //start
      sendText(updates.message.chat.id, `Hi I'm <name of you bot>😎Nice to meet you  ${updates.message.chat.first_name}!😍`);
      sendText(updates.message.chat.id, `It would be good if you provide me with your details👇\n/config rollno/gmailid `);
    }
    if(data[0]=='/question'){          //config
      // var regExp = new RegExp('/[a-zA-Z]+\.\d{2,3}+[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+\/\d{2,3}+[a-zA-Z]+\d{2,5}/i')
      sendText(updates.message.chat.id,`I'll be more happy to answer your questions!\nWhat information you are looking for🤔?\n/help`);
    }
    if(data[0]=='/config'){          //config
      // var regExp = new RegExp('/[a-zA-Z]+\.\d{2,3}+[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+\/\d{2,3}+[a-zA-Z]+\d{2,5}/i')
      sendText(updates.message.chat.id,setUpUser(data[1],updates.message.chat.id));
    }
    if(data[0]=='/help'){           //help
      var user_Data =getUserData(updates.message.chat.id)[0]
      if(user_Data){
        var helpContent=Array(Sheets.Spreadsheets.Values.get(user_Data[3],`help!A2:Z`).values)[0].formate()
          sendText(updates.message.chat.id,`/start - start \n/config rollno/gmailid \n Do you get a smarter? \n ${helpContent}`)
      }
      else
        sendText(updates.message.chat.id, `/start - start \n/question - for menu \n/config rollno/gmailid - update your user \n/help - know the details \n `);          
    }
  }
  else{
    // sendText(updates.message.chat.id,text+data)
    // authorized user space
    var user_Data =getUserData(updates.message.chat.id)[0]
    if(user_Data)
      // sendText(updates.message.chat.id,String(user_Data))
      sendText(updates.message.chat.id,onChat(user_Data[0],user_Data[3],user_Data[4],data))
    else{
      sendText(updates.message.chat.id,'you are not authorized user pls config and chat'+String(user_Data))
    }
  }
}
