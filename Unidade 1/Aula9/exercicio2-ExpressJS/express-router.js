import express from 'express'; 

const app = express();
const PORT = 3000;

app.get('/health', (req, res) => {
    res.status(200).json({
        message: "System is healthy"
    })
});

app.get('/admin', (req, res) => {
    res.status(403).send("Acess Defined!")
})

app.listen(PORT, () => {
    console.log("Router Server with ExpressJS - URL: http://localhost:3000")
});