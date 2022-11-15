String.prototype.toChatText=function(key){
  return this.replace('-','').toLowerCase().split(key)
}
Array.prototype.findIndex = function(search){
  if(search == "") return false;
  for (var i=0; i<this.length; i++)
    if (this[i] == search || this[i]== String(search).toLocaleUpperCase() || this[i]==String(search).toLocaleLowerCase()) return i+1;

  return false;
}
Array.prototype.formate=function(){
  var temp=''
  if(this.length===0) return 'no datas avalable';
  for (var i=0; i<this.length; i++){
    for (var j=0; j<this[i].length; j++){
      temp+=this[i][j]+' ';
      }
      temp+='\n'
    }
    return temp;
    
}
// function prototest(){
//   Logger.log(Array(Sheets.Spreadsheets.Values.get('1EFS1r1XgVYGXilVbSF9SnILX5dHPoNVE2i2oNZJDDlQ',`help!A2:Z`).values)[0].formate())
// }

Array.prototype.findIndexs = function(search){
  if(search.length===0) return false;
  // Logger.log('scarch:'+this[1][0])
  for (var i=0; i<this.length; i++)
    if (this[i][0] == search[0] ||this[i][0] == String(search[0]).toLocaleUpperCase() || this[i][0] == String(search[0]).toLocaleUpperCase) 
      if (this[i][1]== search[1] ||this[i][1] ==String(search[1]).toLocaleUpperCase() || this[i][1] == String(search[1]).toLocaleUpperCase) return i;
  return -1;
}
Array.prototype.replace=function(key){
  for (var i=0; i<this.length; i++)
      if(this[i]==key||this[i]== parseInt(key))
        this[i]='AB'
  return this
}
Array.prototype.prity = function(scarch){
  if(this.length<=1) return 'No data found'
  var temp=''
  if(scarch==null ||scarch==undefined ||scarch.length==0){
    temp+='All data \n' 
    for (var i=1; i<this.length; i++)
      for(var j=0;j<this[0].length;j++)
        temp+=this[0][j]+' : ' +this[i][j]+'\n'
  return temp
  }
  else{
    for (var i=1; i<this.length; i++)
      for(var j=0;j<this[0].length;j++)
        for(var k=0;k<scarch.length;k++)
          if(this[0][j]==scarch[k])
            temp+=this[0][j]+' : ' +this[i][j]+'\n'
    if(temp=='')
      return 'Head not found'
    return temp
  }
  
}
