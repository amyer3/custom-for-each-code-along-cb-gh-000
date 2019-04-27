function forEach(iterable, callback){
  if (iterable.isArray){
    for (i in iterable){
      callback(iterable[i])
    }
  }
}