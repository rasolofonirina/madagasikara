const express = require('express')
const router = express.Router()

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

// Get all kaomina
router.get('/', async (req, res) => {
    const kaomina = await prisma.kaomina.findMany({});

    res.status(200).send({
        status: 200,
        success: true,
        result: kaomina
    })
})

// Get kaomina with specified id
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const kaomina = await prisma.kaomina.findUnique({
        where: {
            id: parseInt(id)
        }
    })

    if (kaomina) {
        res.status(200).send({
            status: 200,
            success: true,
            result: kaomina
        })
    } else {
        res.status(400).send({
            status: 400,
            success: false,
            result: 'Kaomina not found.'
        })
    }
})

// Get kaomina by name
router.get('/name/:name', async (req, res) => {
    const { name } = req.params;
    const kaomina = await prisma.kaomina.findMany({
        where: {
            anarana: name
        }
    })

    if (kaomina.length === 0) {
        res.status(400).send({
            status: 400,
            success: false,
            result: 'Kaomina not found.'
        })
    } else {
        res.status(200).send({
            status: 200,
            success: true,
            result: kaomina
        })
    }
})

// Add kaomina
router.post('/add', async (req, res) => {
    const {
        id_distrika,
        anarana
    } = req.body

    const kaomina = await prisma.kaomina.create({
        data: {
            id_distrika,
            anarana
        }
    })

    if(typeof kaomina.id !== 'undefined') {
        res.status(200).send({
            status: 200,
            success: true,
            result: 'The kaomina has been added.'
        })
    } else {
        res.status(400).send({
            status: 400,
            success: false,
            result: 'There was an error.'
        })
    }
})

// Edit kaomina
router.put('/edit/:id', async (req, res) => {
    const { id } = req.params
    const {
        id_distrika,
        anarana
    } = req.body

    const kaomina = await prisma.kaomina.update({
        where: {
            id: parseInt(id)
        },
        data: {
            id_distrika,
            anarana
        }
    })

    if (kaomina) {
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

// Delete kaomina
router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;

    const kaominaExist = await prisma.kaomina.findOne({
        where: {
            id: parseInt(id)
        }
    })

    if (kaominaExist) {
        const kaomina = await prisma.kaomina.delete({
            where: {
                id: parseInt(id)
            }
        })

        res.status(200).send({
            status: 200,
            success: true,
            result: 'The kaomina has been successfully deleted.'
        })
    } else {
        res.status(400).send({
            status: 400,
            success: false,
            result: 'Kaomina not found.'
        })
    }
})

module.exports = router