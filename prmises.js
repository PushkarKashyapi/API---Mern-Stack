/*
const fs = require('fs');
const superagent = require('superagent'); 

const readFilePro = file => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf-8', (err, data) => {
            if (err) reject('Could not read file 😢');
            resolve(data.trim());
        });
    });
};

const writeFilePro = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, err => {
            if (err) reject('Could not write file 😢');
            resolve('success');
        });
    });
};
/*
readFilePro('./txt/test.txt')
    .then(data => {
        console.log(`Breed: ${data}`);
        return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
    })
    .then(res => {
        console.log(res.body.message);
        return writeFilePro('dogs.txt', res.body.message);
    })
    .then(() => {
        console.log('Random dog image saved to file!');
    })
    .catch(err => {
        console.log(err);
    });

/*
    const fs = require('fs');
const superagent = require('superagent'); 

const readFilePro = file => {
    return new Promise((resolve , reject ) =>{
        fs.readFile(file , (err , data) =>{
            resolve(data);
        })
    })
}

const writefilePro = (file , data) =>{
    return new Promise((resolve ,reject) =>{
        fs.writeFile(file , data , err =>{
            resolve('success')
        })
    })
}

readFilePro('./txt/test.txt').then(data =>{
    console.log(breed : ${data})
    return superagent.get(https://images.dog.ceo/breeds/${data}/n02099712_3503.jpg)
.then(res =>{
    console.log(res.body.message)
    return writefilePro('dogs.txt' , res.body.message)
}).catch(err=>{
    console.log('error occured')
})
}) */

/*

const doggy = async() =>{
    try{ 
    const data = await readFilePro('./txt/test.txt');
    console.log(`breed : ${data}`); 

    const res = await superagent.get(`https://images.dog.ceo/breeds/${data}/n02099712_3503.jpg`);
    console.log(res.body.message);

    const write =  await writeFilePro('./txt/dogs.txt' , res.body.message);
    console.log(write , "written succesfully ");
    }
    catch(err){
        console.log(err)
} 
}
doggy();

console.log("fucker")




*/

const fs = require('fs');
const superagent = require('superagent');

const readFilePro = file => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf-8', (err, data) => {
            if (err) reject('Could not read file 😢');
            resolve(data.trim());
        });
    });
};

const writeFilePro = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, err => {
            if (err) reject('Could not write file 😢');
            resolve('success');
        });
    });
};

const doggy = async () => {
    try {
        const data = await readFilePro('./txt/test.txt');
        console.log(`breed: ${data}`);

        const res1 =  superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
        

        const res2 =  superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
        

        const res3 =  superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
        

        const all  = await Promise.all([res1 , res2 , res3]);
        console.log(all)

        const imgs = all.map(el => el.body.message)
        console.log(imgs)

        const write = await writeFilePro('./txt/dogs.txt', imgs.join('\n'));
        console.log(write, "written successfully");
    } catch (err) {
        console.log(err);
        
        throw err 
    }
    return '2:doggy';
}

(async () =>{
    try{
        const x = await doggy();
        console.log(x)
    } catch(err){
        console.log(err ,'boom')
    }
})
();

