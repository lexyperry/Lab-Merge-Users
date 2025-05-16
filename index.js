function combineUsers(...args){
 let combineObject = {
  users: [], merge_date: ''
 };
   for (let arr of args) {
    combineObject.users.push(...arr);
  }combineObject.merge_date = new Date().toString('M/d/yyyy');
  return combineObject;
}
module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};