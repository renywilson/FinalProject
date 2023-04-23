
const Expense = require('../models/expenses');
const User = require('../models/users');
const sequelize = require('../util/database');

const addexpense =async (req, res) => {
    const t=await sequelize.transaction();
    try{
    const { expenseamount, description, category } = req.body;

   
    const expense=await Expense.create({ expenseamount, description, category, userId:req.user.id},{transaction:t})
       
        let TExpence=Number(expenseamount)+Number(req.user.totalExpences)
        console.log(TExpence)
       await User.update({totalExpences:TExpence},
            {
             where: { id:req.user.id},
            transaction:t
        })
        await t.commit();
        return res.status(201).json({expense:expense, success: true } );
        
    }
   

catch (err){
    console.log(err);
    await t.rollback();
    return res.status(500).json({success : false, error: err})
    
}
}


const getexpenses = async(req, res)=> {
    try{
await Expense.findAll({ where : { userId: req.user.id}}).then(expenses => {
        return res.status(200).json({expenses, success: true})
    })
}
catch(err) {
        console.log(err)
        return res.status(500).json({ error: err, success: false})
    }
}

const deleteexpense = async (req, res) => {
    try{
    const expenseid = req.params.expenseid;
    if(expenseid == undefined || expenseid.length === 0){
        return res.status(400).json({success: false, })
    }
   await Expense.destroy({where: { id: expenseid, userId:req.user.id}}).then((noofrows) => {
        if(noofrows === 0){
            return res.status(404).json({success: false, message: 'Expense doenst belong to the user'})
        }
        return res.status(200).json({ success: true, message: "Deleted Successfuly"})
    })}
    catch(err ) {
        console.log(err);
        return res.status(500).json({ success: true, message: "Failed"})
    }
}

module.exports = {
    deleteexpense,
    getexpenses,
    addexpense
}
