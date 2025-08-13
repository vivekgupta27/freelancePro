import Client from "../models/clientSchema.js";
import validateClientInput from "../utlis/clientValidation.js";

export const createClient = async (req, res) => {
  const { errors, isValid } = validateClientInput(req.body);
  if (!isValid) return res.status(400).json(errors);

  try {
    const newClient = await Client.create({
      ...req.body,
      freelancerId: req.user.id,
    });
    res.status(201).json(newClient);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to create client" });
  }
};

export const getClients = async (req, res) => {
  try {
    const clients = await Client.find({ freelancerId: req.user.id }).sort({ createdAt: -1 });
    res.json(clients);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch clients" });
  }
};

export const getSingleClient = async (req, res) => {
  try {
    const client = await Client.findOne({
      _id: req.params.id,
      freelancerId: req.user.id,
    });
    if (!client) return res.status(404).json({ message: "Client not found" });
    res.json(client);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch client" });
  }
};

export const updateClient = async (req, res) => {
  console.log(req.body);
  console.log(req.params.id);
  const { errors, isValid } = validateClientInput(req.body);
  if (!isValid) return res.status(400).json(errors);

  try {
    const updatedClient = await Client.findOneAndUpdate(
      { _id: req.params.id, freelancerId: req.user.id },
      req.body,
      { new: true }
    );
    if (!updatedClient) return res.status(404).json({ message: "Client not found" });
    res.json(updatedClient);
  } catch (err) {
    res.status(500).json({ message: "Failed to update client" });
  }
};

export const deleteClient = async (req, res) => {
  // console.log(req.params.id);
  try {
    const deleted = await Client.findOneAndDelete({
      _id: req.params.id,
      freelancerId: req.user.id,
    });
    if (!deleted) return res.status(404).json({ message: "Client not found" });
    res.json({ message: "Client deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete client" });
  }
};
