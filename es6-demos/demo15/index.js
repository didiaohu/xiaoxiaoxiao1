{
  let readonly=function(target,name,descriptor){
    descriptor.writable=false;
    return descriptor
  };

  class Test{
    @readonly
    time(){
      return '2017-03-11'
    }
  }

  let test=new Test();

  // test.time=function(){
  //   console.log('reset time');
  // };

  console.log(test.time());
}


{
  let typename=function(target,name,descriptor){
    target.myname='hello';
  }

  @typename
  class Test{

  }

  console.log('类修饰符',Test.myname);
  // 第三方库修饰器的js库：core-decorators; npm install core-decorators
}
