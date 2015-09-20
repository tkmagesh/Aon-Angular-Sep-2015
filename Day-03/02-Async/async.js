/* Sync */
function addSync(x,y){
    console.log("[SP] processing ", x , " and ", y);
    var result = x + y;
    console.log("[SP] returning result");
    return result;
}

function addSyncClient(x,y){
    console.log("[SC] trigger add");
    var result = addSync(x,y);
    console.log("[SC] result = ", result);
}

/* Async - using callback*/

function addAsync(x,y, onResult){
    console.log("[SP] processing ", x , " and ", y);
    setTimeout(function(){
        var result = x + y;
        console.log("[SP] returning result");
        onResult(result);
    },3000);
}

function addAsyncClient(x,y){
    console.log("[SC] trigger add");
    addAsync(x,y, function(result){
        console.log("[SC] result = ", result);
    });
}

/* Async - using promise*/

function addAsync(x,y){
    console.log("[SP] processing ", x , " and ", y);
    var promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            var result = x + y;
            console.log("[SP] returning result");
            resolve(result);
        },3000);
    });
    return promise;
}






