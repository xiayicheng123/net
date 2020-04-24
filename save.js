function save(savename,saveword)
{
  var blob=new Blob(saveword, {type: "text/plain;charset=utf-8"});
  saveAs(blob, savename);
}
