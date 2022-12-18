import { pool } from "../db.js";

export const getPets = async (req, res) => {
try {

    const [rows] = await pool.query('SELECT * FROM pets');
    res.send(rows); 
} catch (error) {
    return res.status(500).json({
        message: "Error al obtener los pets",
        error
    });
}
}

export const getPet = async (req, res) => {
try {
    const [rows] = await pool.query('SELECT * FROM pets WHERE id = ?', [req.params.id]);
   
    if(rows.length === 0) {
        res.status(404).send({
            message: "No se encontró el pet"
        });
     
 }
 res.send(rows[0]);
} catch (error) {
    return res.status(500).json({
        message: "Error al obtener el pet",
        error
    });
}
}

export const createPet = async (req, res) => {
    const { name, age,image_pet,description } = req.body;
try {
    const [rows] = await pool.query('INSERT INTO pets(name, age,image_pet,description) VALUES (?,?,?,?)', [name, age,image_pet,description]);
    
    res.send({
        id: rows.insertId,
        name,
        age,
        image,
        description
    });
} catch (error) {
    return res.status(500).json({
        message: "Error al crear el pet",
        error
    });
}
}

export const updatePet = async (req, res) => {
    const {id} = req.params;
    const {name, age,image_pet,description} = req.body;
try {
   const [result] = await pool.query('UPDATE pets SET name = IFNULL(?, name), age= IFNULL(?, age), image_pet=IFNULL(?,image_pet), description=IFNULL(?,description) WHERE id = ?', [name, age,image_pet,description, id]);
    if(result.affectedRows === 0) return res.status(404).send({
        message: "No se encontró el pet"
    });

   const [rows] = await pool.query('SELECT * FROM pets WHERE id = ?', [id])

    res.json(rows[0]);
} catch (error) {
    return res.status(500).json({
        message: "Error al actualizar el pet",
        error
    });
}
}


export const deletePet = async (req, res) =>{
   
    const [rows] = await pool.query('DELETE FROM pets WHERE id = ?', [req.params.id]);
    console.log(rows);

    if(rows.affectedRows <= 0) return res.status(404).send({
        message: "No se encontró el pet"
    });

    res.sendStatus(204);

}