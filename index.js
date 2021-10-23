const express = require('express');
const app = express();
const port = 3000;


app. get('/',(req, res) =>{
    res.send('Hello from node and express');
});

const users = [
    {id:0, name: 'safa', email: 'safa@gamil.com', phone: '0171456745' },
    {id:1, name: 'koli', email: 'koli@gamil.com', phone: '0171456745' },
    {id:2, name: 'poli', email: 'poli@gamil.com', phone: '0171456745' },
    {id:3, name: 'moli', email: 'moli@gamil.com', phone: '0171456745' },
    {id:4, name: 'noli', email: 'noli@gamil.com', phone: '0171456745' }
]

app.get('/users', (req, res) =>{
   const search = req.query.search;
// use query parameter
   if(search){
          const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
          res.send(searchResult);
   }

   else{
    res.send(users)
   }
    
})
 
// dynamic api
app.get('/users/:id', (req, res) =>{
    const id= req.params.id;
    const user = users[id]
    res.send(user);

})

app.listen(port,() =>{
     console.log('listening to port', port);
});

