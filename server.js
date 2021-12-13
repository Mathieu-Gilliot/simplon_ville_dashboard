
const express = require('express');
const app = express();

app.listen(8080,()=>{
    console.log('listening')
})

app.use(express.static('./dist/SimplonVilleDashboard'));

app.get('/*', function (req, res) {
    res.sendFile('./dist/SimplonVilleDashboardindex.html'
    );
});

;