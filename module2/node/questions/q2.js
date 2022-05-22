//given array arr = [audio.video.image,software,documents,applications,others] 
// make a folder for each element in the given array and inside each folder make 4 files of that type

let fs = require("fs");
let path = require("path");
let arr = ['audio','video','image','software','documents','applications','others'] ;
let namearr = ['abc','efg','ghi','jkl'];
let extname = ['.mp3','.mp4','.png','.apk','.pdf','.rar','exe'];

let organisepath = path.join(__dirname,"organised");
if(!fs.existsSync(organisepath))
fs.mkdirSync(organisepath);

for (let i=0; i<arr.length;i++){
    let folderkapath = path.join(organisepath,arr[i])
    if(!fs.existsSync(folderkapath))
    fs.mkdirSync(folderkapath);
     
       for(let j = 0 ; j<namearr.length;j++){
           let filename = namearr[j]+extname[i]
           let filepath= path.join(folderkapath,filename);
           fs.writeFileSync(filepath,"");          
       }

}