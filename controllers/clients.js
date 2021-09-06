import Client from "../models/client.js"


export async function getAllClients(request, response) {
    try{
        const result = await Client.find()
        response.json(result)
    }catch{
        response.status(500).json({ message: error.message})
    }
}


export async function createClient(request, response){
    try{
        const newClient = await Client.create(request.body);
        response.json(newClient);
    }catch (error){
        response.status(400).json({message: error.message})
    }
}



