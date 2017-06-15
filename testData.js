var result=function(){
            var cases=[{
                    arr1:[1,true,null],
                    arr2:[null,false,100],
                    expect:true
                },{
                    arr1:[function(){},100],
                    arr2:[100,{}],
                    expect:false
                },{
                    arr1:[null,999],
                    arr2:[{},444],
                    expect:false
                },{
                    arr1:[window,1,true,new Date(),"hahaha",(function(){}),undefined],
                    arr2:[undefined,(function(){}),"okokok",new Date(),false,2,window],
                    expect:true
                },{
                    arr1:[new Date()],
                    arr2:[{}],
                    expect:false
                },{
                    arr1:[window],
                    arr2:[{}],
                    expect:false
                },{
                    arr1:[undefined,1],
                    arr2:[null,2],
                    expect:false
                },{
                    arr1:[new Object,new Object,new Object],
                    arr2:[{},{},null],
                    expect:false
                },{
                    arr1:null,
                    arr2:null,
                    expect:false
                },{
                    arr1:[],
                    arr2:undefined,
                    expect:false
                },{
                    arr1:"abc",
                    arr2:"cba",
                    expect:false
                }];
            
            for(var i=0;i<cases.length;i++){
                if(arraysSimilar(cases[i].arr1,cases[i].arr2)!==cases[i].expect) {
                    console.log(cases[i].arr1);
                     console.log(cases[i].arr2);
                    document.write("Not pass！case"+(i+1)+"Not right！arr1="+JSON.stringify(cases[i].arr1)+", arr2="+JSON.stringify(cases[i].arr2)+" the result is not"+cases[i].expect);
                    return false;
                }                
            }
            return true;
            
        }();
    document.write("The result is : "+(result?"pass":"not pass"));