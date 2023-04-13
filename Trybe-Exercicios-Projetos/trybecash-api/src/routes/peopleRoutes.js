const express = require('express');
const peopleDb = require('../db/peopleDB');

const router = express.Router();

const REQUEST_OK = 200;
const BAD_REQUEST = 400;
const POST_CREATED = 201;



router.post('/', async (req, res) => {
const response = req.body;

try {
  const [result] = await peopleDb.insert(response);
  res.status(POST_CREATED).json({ message: `Pessoa cadastrada com sucesso com o id ${result.insertId}`})
} catch (__error) {
  res.status(BAD_REQUEST).json({ message: 'Ocorreu um erro ao cadastrar uma pessoa' });
}
});

router.get('/', async (req, res) => {
  const response = req.body;

  try {
    const [result] = await peopleDb.listAll();
    console.log(result);
    res.status(REQUEST_OK).json(result);
  } catch (err) {
    res.status(BAD_REQUEST).json({ message: err.sqlMessage })
  }
});

router.get( '/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const [[ result ]] = await peopleDb.findById(id);

    if(result) {
      res.status(REQUEST_OK).json(result)
    }
    res.status(NOT_FOUND).json({ message: 'Pessoa não encontrada' });
    
  } catch (error) {
    res.status(500).json({ message: error.sqlMessage })
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const person = req.body;
    const [result] = await peopleDb.update( person, id);
    if (result.affectedRows > 0 ){
      res.status(200).json({ message: `Pessoa de id ${id} atualizada com sucesso` });
    }
    res.status(404).json({ message: 'Pessoa não encontrada' });
  } catch (error) {
    res.status(500).json({ message: error.sqlMessage });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await peopleDb.remove(id);
    if (result.affectedRows > 0) {
      res.status(200).json({ message: `Pessoa de id ${id} excluída com sucesso` });
    } else {
      res.status(404).json({ message: 'Pessoa não encontrada' });
    }
  } catch (err) {
    res.status(500).json({ message: err.sqlMessage });
  }
});

module.exports = router;