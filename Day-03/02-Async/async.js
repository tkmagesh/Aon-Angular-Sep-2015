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

/* Async*/

function addAsync(x,y){
    console.log("[SP] processing ", x , " and ", y);
    setTimeout(function(){
        var result = x + y;
        console.log("[SP] returning result");
        return result;
    },3000);
}

function addAsyncClient(x,y){
    console.log("[SC] trigger add");
    var result = addAsync(x,y);
    console.log("[SC] result = ", result);
}
