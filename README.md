# WCAT-
Copy data/Read Data /Write data
node script.js filename //----------------read file

node script.js -s filename  //--------- (-s)for remove empty line

node script.js -n filename  //--------- (-n)for for numbering 

node script.js -s -n filename  //--------- (-s)for remove empty line and numbered the line

node script.js -b filename  //--------- (-b) for non empty line numbering

node script.js  Firstfile -w secondfile //--------- (-w)copy data from one file to another delete the old data

node script.js Firstfile -a secondfile  //--------- (-a)copy data from one file to another don't delete the data from old data

node script.js Firstfile -s -w secondfile  //---------for print one data to data without empty line

