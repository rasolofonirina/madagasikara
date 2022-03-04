const express = require('express')
const router = express.Router()

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

// Get all distrika
router.get('/', async (req, res) => {
    const distrika = await prisma.distrika.findMany({});

    res.status(200).send({
        status: 200,
        success: true,
        result: distrika
    })
})

// Get distrika with specified id
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const distrika = await prisma.distrika.findUnique({
        where: {
            id: parseInt(id)
        }
    })

    if (distrika) {
        res.status(200).send({
            status: 200,
            success: true,
            result: distrika
        })
    } else {
        res.status(400).send({
            status: 400,
            success: false,
            result: 'Distrika not found.'
        })
    }
})

// Get distrika by name
router.get('/name/:name', async (req, res) => {
    const { name } = req.params;
    const distrika = await prisma.distrika.findMany({
        where: {
            anarana: name
        }
    })

    if (distrika.length === 0) {
        res.status(400).send({
            status: 400,
            success: false,
            result: 'Distrika not found.'
        })
    } else {
        res.status(200).send({
            status: 200,
            success: true,
            result: distrika
        })
    }
})

// Add distrika
router.post('/add', async (req, res) => {
    const {
        id_faritra,
        anarana
    } = req.body

    const distrika = await prisma.distrika.create({
        data: {
            id_faritra,
            anarana
        }
    })

    if(typeof distrika.id !== 'undefined') {
        res.status(200).send({
            status: 200,
            success: true,
            result: 'The distrika has been added.'
        })
    } else {
        res.status(400).send({
            status: 400,
            success: false,
            result: 'There was an error.'
        })
    }
})

// Edit distrika
router.put('/edit/:id', async (req, res) => {
    const { id } = req.params
    const {
        id_faritra,
        anarana
    } = req.body

    const distrika = await prisma.distrika.update({
        where: {
            id: parseInt(id)
        },
        data: {
            id_faritra,
            anarana
        }
    })

    if (distrika) {
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

// Delete distrika
router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;

    const distrikaExist = await prisma.distrika.findOne({
        where: {
            id: parseInt(id)
        }
    })

    if (distrikaExist) {
        const distrika = await prisma.distrika.delete({
            where: {
                id: parseInt(id)
            }
        })

        res.status(200).send({
            status: 200,
            success: true,
            result: 'The distrika has been successfully deleted.'
        })
    } else {
        res.status(400).send({
            status: 400,
            success: false,
            result: 'Distrika not found.'
        })
    }
})

module.exports = router