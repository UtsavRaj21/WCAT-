#!/usr/bin/env node
 
const fs=require("fs");


let arguments=process.argv.slice(2);
function wcat(arguments){

    // EMPTY lINE
    let options=arguments.filter(function(data,index){
        return data.startsWith("-");
    });

    let files=arguments.filter(function(data,index){
        return !data.startsWith("-");
    });


    // NO FILE
    if(files.length==0){
        console.log("enter file name");
        return;
    }
    // FILE NOT EXITS
    for(let i=0;i<files.length;i++){
        if(!fs.existsSync(files[i])){
            console.log(files[i]+" file does not exits.");
            return;
        }
    }
    
    // for numbers
    let numbering=1;

    //FIlE PRINT 
    for(let i=0;i<files.length;i++){
        let data =fs.readFileSync(files[i],"utf-8");

        // if (for remove empty line(-s)) other wise else code
        if(options.includes("-s")){
            let lines=data.split("\r\n");
            if(options.includes("-w")){
                if(files.length!=2 ){
                    console.log("unable to run");
                    return;
                }
                fs.writeFileSync(files[1],"");
            }
            for(let j=0;j<lines.length;j++){
                if(lines[j]!= ""){
                    if(options.includes("-w")){               //  for print one data to data without empty line
                        let d=fs.readFileSync(files[1],"utf-8");
                        fs.writeFileSync(files[1],d+lines[j]+"\n");
                    }
                    
                    if(options.includes("-n")){    // for numbering 
                        console.log(numbering+". "+lines[j]);
                        numbering++;
                    }
                    else{
                        console.log(lines[j]);
                    }  
                }
            }
        }

        // for numbering (n)
        //else if (condition for priority for n)
        else if((options.includes("-n")  && !options.includes("-b")) ||((options.includes("-n")  && options.includes("-b")) && (options.indexOf("-n") < options.indexOf("-b")))){
            let lines=data.split("\r\n");
            for(let j=0;j<lines.length;j++)
            {
                console.log(numbering+". "+lines[j]);
                numbering++;
            }
        }

        // non empty line numbering(b)
        else if(options.includes("-b")){
            let lines=data.split("\r\n");
            for(let j=0;j<lines.length;j++)
            {
                if(lines[j]!=""){
                    console.log(numbering+". "+lines[j]);
                    numbering++;
                }else{
                    console.log(lines[j]);
                }
                
            }
        }
        
        // copy data from one file to another delete the old data(-w)
        else if(options.includes("-w")){
            // for file length=0,=1,<2
            if(files.length!=2 || arguments.indexOf("-w") !=1){
                console.log("unable to run");
                return;
            }
            let data =fs.readFileSync(files[0],"utf-8");
            fs.writeFileSync(files[1],data);

        }

        // copy data from one file to another don't delete the data from old data(-a)
            else if(options.includes("-a")){
                if(files.length!=2 || arguments.indexOf("-a") !=1){
                    console.log("unable to run");
                    return;
            }
            let one =fs.readFileSync(files[0],"utf-8");
            let two =fs.readFileSync(files[1],"utf-8");
            fs.writeFileSync(files[1],one+two);
            return;  
        }
        else{
            console.log(data);
        }
    }
    

}
wcat(arguments);