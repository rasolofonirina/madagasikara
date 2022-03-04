const express = require('express')
const router = express.Router()

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

// Get all faritra
router.get('/', async (req, res) => {
    const faritra = await prisma.faritra.findMany({});

    res.status(200).send({
        status: 200,
        success: true,
        result: faritra
    })
})

// Get faritra with specified id
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const faritra = await prisma.faritra.findUnique({
        where: {
            id: parseInt(id)
        }
    })

    if (faritra) {
        res.status(200).send({
            status: 200,
            success: true,
            result: faritra
        })
    } else {
        res.status(400).send({
            status: 400,
            success: false,
            result: 'Faritra not found.'
        })
    }
})

// Get faritra by name
router.get('/name/:name', async (req, res) => {
    const { name } = req.params;
    const faritra = await prisma.faritra.findMany({
        where: {
            anarana: name
        }
    })

    if (faritra.length === 0) {
        res.status(400).send({
            status: 400,
            success: false,
            result: 'Faritra not found.'
        })
    } else {
        res.status(200).send({
            status: 200,
            success: true,
            result: faritra
        })
    }
})

// Add faritra
router.post('/add', async (req, res) => {
    const {
        id_faritany,
        anarana
    } = req.body

    const faritra = await prisma.faritra.create({
        data: {
            id_faritany,
            anarana
        }
    })

    if(typeof faritra.id !== 'undefined') {
        res.status(200).send({
            status: 200,
            success: true,
            result: 'The faritra has been added.'
        })
    } else {
        res.status(400).send({
            status: 400,
            success: false,
            result: 'There was an error.'
        })
    }
})

// Edit faritra
router.put('/edit/:id', async (req, res) => {
    const { id } = req.params
    const {
        id_faritany,
        anarana
    } = req.body

    const faritra = await prisma.faritra.update({
        where: {
            id: parseInt(id)
        },
        data: {
            id_faritany,
            anarana
        }
    })

    if (faritra) {
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

// Delete faritra
router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;

    const faritraExist = await prisma.faritra.findOne({
        where: {
            id: parseInt(id)
        }
    })

    if (faritraExist) {
        const faritra = await prisma.faritra.delete({
            where: {
                id: parseInt(id)
            }
        })

        res.status(200).send({
            status: 200,
            success: true,
            result: 'The faritra has been successfully deleted.'
        })
    } else {
        res.status(400).send({
            status: 400,
            success: false,
            result: 'Faritra not found.'
        })
    }
})

module.exports = router