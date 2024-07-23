import Customer from "../Models/Customer.js";

const listCustomers= async (req, res)=>{
    try{
        const customers= await Customer.find();
        res.json(customers);

    }
    catch (err) {
        res.status(500).json({ message: err.message });
      }

};
export default listCustomers;
