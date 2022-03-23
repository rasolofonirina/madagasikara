const express = require('express')
const router = express.Router()

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

// Get all fokontany
router.get('/', async (req, res) => {
    const fokontany = await prisma.fokontany.findMany({})

    res.status(200).send({
        status: 200,
        success: true,
        result: fokontany
    })
})

// Get fokontany with specified id
router.get('/:id', async (req, res) => {
    const { id } = req.params

    const fokontany = await prisma.fokontany.findUnique({
        where: {
            id: parseInt(id)
        }
    })

    if (fokontany) {
        res.status(200).send({
            status: 200,
            success: true,
            result: fokontany
        })
    } else {
        res.status(400).send({
            status: 400,
            success: false,
            result: 'Fokontany not found.'
        })
    }
})

// Get fokontany by name
router.get('/name/:name', async (req, res) => {
    const { name } = req.params

    const fokontany = await prisma.fokontany.findMany({
        where: {
            anarana: name
        }
    })

    if (fokontany.length === 0) {
        res.status(400).send({
            status: 400,
            success: false,
            result: 'Fokontany not found.'
        })
    } else {
        res.status(200).send({
            status: 200,
            success: true,
            result: fokontany
        })
    }
})

// Add fokontany
router.post('/add', async (req, res) => {
    const {
        anarana,
        kaomina
    } = req.body

    const fokontany = await prisma.fokontany.create({
        data: {
            anarana,
            kaomina
        }
    })

    if(typeof fokontany.id !== 'undefined') {
        res.status(200).send({
            status: 200,
            success: true,
            result: 'The fokontany has been added.'
        })
    } else {
        res.status(400).send({
            status: 400,
            success: false,
            result: 'There was an error.'
        })
    }
})

// Edit fokontany
router.put('/edit/:id', async (req, res) => {
    const { id } = req.params
    
    const {
        anarana,
        kaomina
    } = req.body

    const fokontany = await prisma.fokontany.update({
        where: {
            id: parseInt(id)
        },
        data: {
            anarana,
            kaomina
        }
    })

    if (fokontany) {
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

// Delete fokontany
router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params

    const fokontanyExist = await prisma.fokontany.findOne({
        where: {
            id: parseInt(id)
        }
    })

    if (fokontanyExist) {
        const fokontany = await prisma.fokontany.delete({
            where: {
                id: parseInt(id)
            }
        })

        res.status(200).send({
            status: 200,
            success: true,
            result: 'The fokontany has been successfully deleted.'
        })
    } else {
        res.status(400).send({
            status: 400,
            success: false,
            result: 'Fokontany not found.'
        })
    }
})

module.exports = router