import express from 'express'
import fs from 'fs'

const router = express.Router() 



router.get('/', async (request, response) => {
    const dataFile = await fs.promises.readFile('./kodemia.json', 'utf8')
    const json = JSON.parse(dataFile)
    let mentors = json.mentors
    console.log(mentors);
    
    const queries = request.query
    console.log('queries: ',queries)
    const {module, gender, count} = request.query
    console.log('module: ', module)
    let mentorsFiltered = json.mentors

    if(module) {
        mentorsFiltered = mentorsFiltered.filter(mentor => mentor.module === parseInt(module))
        
    }

    if(gender){
        mentorsFiltered = mentorsFiltered.filter(mentor => mentor.gender === gender)
    }

    if(count){
        mentorsFiltered = mentorsFiltered.splice(0, count)
    }

    response.json({
        success: true,
        data: {
            mentors: mentorsFiltered || json.mentors
        }
    })
})


router.post('/', async (request, response) => {

    const newMentor = request.body
    console.log(newMentor)

    const dataFile = await fs.promises.readFile('./kodemia.json', 'utf8')
    const json = JSON.parse(dataFile)

    json.mentors.push(newMentor)

    await fs.promises.writeFile('./kodemia.json', JSON.stringify(json, null, 2), 'utf8')

    response.json({
        success: true,
        message: 'Mentor creado!'
    })
})


router.get('/:idMentor',async (request, response) => {
    console.log(request.params) 

    const id = parseInt(request.params.idMentor)
    const dataFile = await fs.promises.readFile('./kodemia.json', 'utf8')
    const json = JSON.parse(dataFile)

    const mentorFound = json.mentor.find(mentor => mentor.id === id)
    if(!mentorFound) {
        response.status(404)
        response.json({
            success: false, 
            message: 'Mentor no encontrado'
        })
        return
    }
    response.json({
    success: true,
    data: {
        mentor:MentorFound 
    }
    })
})


router.delete('/:idMentor', async (request, response) => {


    const dataFile = await fs.promises.readFile('./kodemia.json', 'utf8')
    const json = JSON.parse(dataFile)
    // Destructuring assigment
    const { idMentor } = request.params
    const newMentors = json.mentors.filter(mentor => mentor.id !== parseInt(idMentor))
    json.mentors = newMentors // reemplazar con los nuevos Mentores

    await fs.promises.writeFile('./kodemia.json', JSON.stringify(json, null, 2), 'utf8')
    response.json({
        success: true,
        message: 'Mentor eliminado!'
    })
})



router.patch('/:idMentor', async (request, response) =>{

    const dataFile = await fs.promises.readFile('./kodemia.json', 'utf8')
    const json = JSON.parse(dataFile)
    const { idMentor } = request.params
    const mentorData = request.body
    let mentorUpdate = json.mentors.filter(mentor => mentor.id !== parseInt(idMentor))
    mentorUpdate.push(mentorData)
    json.mentors = mentorUpdate
    
    await fs.promises.writeFile('./kodemia.json', JSON.stringify(json, null, 2), 'utf8')
    console.log(idMentor);
    

    

    response.json({
        success: true,
        message: 'Actualizacion de Mentor Exitosa! '
    })
})


export default router