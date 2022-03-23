const express = require('express')
const router = express.Router()

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

// Get all faritany
router.get('/', async (req, res) => {
    const faritany = await prisma.faritany.findMany({})

    res.status(200).send({
        status: 200,
        success: true,
        result: faritany
    })
})

// Get faritany with specified id
router.get('/:id', async (req, res) => {
    const { id } = req.params

    const faritany = await prisma.faritany.findUnique({
        where: {
            id: parseInt(id)
        }
    })

    if (faritany) {
        res.status(200).send({
            status: 200,
            success: true,
            result: faritany
        })
    } else {
        res.status(400).send({
            status: 400,
            success: false,
            result: 'Faritany not found.'
        })
    }
})

// Get faritany by name
router.get('/name/:name', async (req, res) => {
    const { name } = req.params

    const faritany = await prisma.faritany.findMany({
        where: {
            anarana: name
        }
    })

    if (faritany.length === 0) {
        res.status(400).send({
            status: 400,
            success: false,
            result: 'Faritany not found.'
        })
    } else {
        res.status(200).send({
            status: 200,
            success: true,
            result: faritany
        })
    }
})

// Add faritany
router.post('/add', async (req, res) => {
    const {
        anarana
    } = req.body

    const faritany = await prisma.faritany.create({
        data: {
            anarana
        }
    })

    if(typeof faritany.id !== 'undefined') {
        res.status(200).send({
            status: 200,
            success: true,
            result: 'The faritany has been added.'
        })
    } else {
        res.status(400).send({
            status: 400,
            success: false,
            result: 'There was an error.'
        })
    }
})

// Edit faritany
router.put('/edit/:id', async (req, res) => {
    const { id } = req.params
    
    const {
        anarana
    } = req.body

    const faritany = await prisma.faritany.update({
        where: {
            id: parseInt(id)
        },
        data: {
            anarana
        }
    })

    if (faritany) {
        res.status(200).send({
            status: 200,
            success: true,
            result: 'Changes have been saved.'
        })
    } else {
        res.status(400).send({
            status: 400,
            success: false,
            result: 'There was an error.'
        })
    }
})

// Delete faritany
router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params

    const faritanyExist = await prisma.faritany.findOne({
        where: {
            id: parseInt(id)
        }
    })

    if (faritanyExist) {
        const faritany = await prisma.faritany.delete({
            where: {
                id: parseInt(id)
            }
        })

        res.status(200).send({
            status: 200,
            success: true,
            result: 'The faritany has been successfully deleted.'
        })
    } else {
        res.status(400).send({
            status: 400,
            success: false,
            result: 'Faritany not found.'
        })
    }
})

module.exports = router