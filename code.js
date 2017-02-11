//
// this is just a stub for a function you need to implement
//References:
//http://stackoverflow.com/questions/18679576/counting-words-in-string
//http://stackoverflow.com/questions/2035910/how-to-get-the-number-of-lines-in-a-textarea
//http://stackoverflow.com/questions/1981349/regex-to-replace-multiple-spaces-with-a-single-space
//http://stackoverflow.com/questions/16369642/javascript-how-to-use-a-regular-expression-to-remove-blank-lines-from-a-string
//http://stackoverflow.com/questions/30986239/function-that-involves-averaging-word-length-from-a-string
//http://stackoverflow.com/questions/958908/how-do-you-reverse-a-string-in-place-in-javascript
//http://stackoverflow.com/questions/958908/how-do-you-reverse-a-string-in-place-in-javascript
//http://www.w3resource.com/javascript-exercises/javascript-array-exercise-8.php
function getStats(txt) {
    var stuff = {
        nChars: 0,
        nWords: (numberOfWords(txt)),
        nLines: (numberOfLines(txt)),
        nNonEmptyLines: (numberOfNonEmptyLines(txt)),
        averageWordLength: (averageWordLengths(txt)),
        maxLineLength: 33,
        palindromes: (palind(txt)),
        longestWords: (longestWordsTop10(txt)),
        mostFrequentWords: (frequencyTop10(txt))
};
//This is for taking number of characters. 
var numChars = txt.length; 
stuff.nChars = numChars;

//This is for the word count. 
function numberOfWords(str){
    if (!str){
        return 0; }
    var desired = str.replace(/[^\w\s]/gi, ' ')

    desired= desired.trim().split(/\s+/).length; 
    return desired;
    


    
}
function numberOfLines(str){
    return str.split("\n").length; 
}
function numberOfNonEmptyLines(str){
    string = str.replace(/(^[ \t]*\n)/gm, "")
    return string.split("\n").length;

}
/*
function maxLineLength (str) {
    return 0;
}*/
function averageWordLengths(str) {
    var desired = str.replace(/[^\w\s]/gi, ' ');
    countWord = desired.trim().split(/\s+/).length;
    var arry = desired.split(/\s+/)
    var avgWord = 0; 
    for (var i = 0; i < countWord; i++){
        avgWord += arry[i].length
    }
    var lengthAvg = avgWord / countWord;
    return lengthAvg;
}

function palind (str) {
    var finalarry = [];  
    var desired = str.replace(/[^\w\s]/gi, ' ');
    countWord = desired.trim().split(/\s+/).length;
    desired = desired.trim().split(/\s+/);
    for (var i = 0 ; i< countWord; i ++){
        var temporary = desired[i];
        var revtemporary = temporary.split('').reverse().join('');
        if (revtemporary == temporary && temporary.length > 2){
            temporary =temporary.toLowerCase();
            finalarry.push(temporary);
        }


    }
    return finalarry;


//http://stackoverflow.com/questions/6521245/finding-longest-string-in-array
//http://stackoverflow.com/questions/6237692/javascript-confused-about-how-nested-for-loops-work
//http://stackoverflow.com/questions/500606/deleting-array-elements-in-javascript-delete-vs-splice
}

function longestWordsTop10 (str){
    var finalarry = [];
    var desired = str.replace(/[^\w\s]/gi, ' ');
    countWord = desired.trim().split(/\s+/).length;
    desired = desired.trim().split(/\s+/);
//http://stackoverflow.com/questions/9229645/remove-duplicates-from-javascript-array
    var items = desired;
    var uniq = items
      .map((items) => {
        return {count: 1, items: items}
      })
      .reduce((a, b) => {
        a[b.items] = (a[b.items] || 0) + b.count
        return a
      }, {})

    var sorted = Object.keys(uniq).sort((a, b) => uniq[a] < uniq[b])


    var arr2 = sorted 
    arr = arr2.sort()
    var lgth = 0;
    var longest;

    if (arr.length >=10){
        for (var i = 0; i < 10; i ++){
            var lgth = 0;
            var longest;

            for(var j=0; j < arr.length; j++){
                if(arr[j].length > lgth){
                    var lgth = arr[j].length;
                    longest = arr[j];

                }

            }

            finalarry.push(longest)

            var counter = arr.indexOf(longest);
                if (counter > -1) {
                    arr.splice(counter,1);
                }

             }

            return finalarry;}
    if (arr.length < 10) {
        check = arr.length; 
        for (var i = 0; i < check; i ++){
            var lgth = 0;
            var longest;

            for(var j=0; j < arr.length; j++){
                if(arr[j].length > lgth){
                    var lgth = arr[j].length;
                    longest = arr[j];

                }

            }

            finalarry.push(longest)

            var counter = arr.indexOf(longest);
                if (counter > -1) {
                    arr.splice(counter,1);
                }

             }

            return finalarry;}        

}
function frequencyTop10(str){
    var desired = str.replace(/[^\w\s]/gi, ' ');
    var array = desired.trim().split(/\s+/);
    countWord = desired.trim().split(/\s+/).length;
    var finalarray = [];



    array = array.sort()
    if (array.length >=10){

        for (var k = 0; k<10; k++){


            var mf = 1;
            var m = 0;
            var item;
            for (var i=0; i<array.length; i++)
            {
                    for (var j=i; j<array.length; j++)
                    {
                            if (array[i] == array[j])
                             m++;
                            if (mf<m)
                            {
                              mf=m; 
                              item = array[i];
                            }
                    }
                    m=0;
            }
            finalarray.push(item+"("+mf +") ") ; 
            var counter = array.indexOf(item);
                if (counter > -1) {
                    array.splice(counter,1);}
    }

            return finalarray
}
    if (array.length <10){
    
        for (var k = 0; k<10; k++){


            var mf = 1;
            var m = 0;
            var item;
            for (var i=0; i<array.length; i++)
            {
                    for (var j=i; j<array.length; j++)
                    {
                            if (array[i] == array[j])
                             m++;
                            if (mf<m)
                            {
                              mf=m; 
                              item = array[i];
                            }
                    }
                    m=0;
            }
            finalarray.push(item+"("+mf +") ") ; 
            var counter = array.indexOf(item);
                if (counter > -1) {
                    array.splice(counter,1);


                }
    }

            return finalarray;

}
}


//http://stackoverflow.com/questions/1053843/get-the-element-with-the-highest-occurrence-in-an-array
//http://stackoverflow.com/questions/30906807/word-frequency-in-javascript
/*function frequencyTop10(str) {
    var array = str.trim().split(/\s+/);
     if(array.length == 0)
        return null;
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;

    if (array.length>= 10){
        for (var j = 0; j< 10; j++){
            el = 0 ;
            maxEl = 0;
            modeMap[el] = 0; 
            for(var i = 0; i < array.length; i++)
            {
                var el = array[i];
                if(modeMap[el] == null)
                    modeMap[el] = 1;
                else
                    modeMap[el]++;  
                if(modeMap[el] > maxCount)
                {
                    maxEl = el;
                    maxCount = modeMap[el];
                    var maxEla = [maxEl];
                    var maxCounta = [maxCount];
                    var finalarray = []
                    finalarray.push(maxEla +"(" + maxCounta + ")");

        }
    }
}
}

    return finalarray;
}
   

*/

return stuff;
}

