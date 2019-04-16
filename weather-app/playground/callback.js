/*var getuser = (id,callback) => {
  var user = {
    id:id,
    name:'swati'
  };
    setTimeout(() => {
        callback(user);
    },3000)

};

getuser(12,(userobject) => {
  console.log(userobject);
});
*/


var getuser = (id,callback) => {
  var user = {
    id : id,
    name : 'swati'
  };
  setTimeout(()=> {
    callback(user);
  },3000)

};

getuser(31,(user)=>
{
  console.log(user);
});
