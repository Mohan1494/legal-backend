import mongoose from "mongoose";

const caseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  clientName: { type: String, default: "" },
  description: { type: String, default: "" },
  documents: [
    {
      name: String,
      link: String,
    }],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Case", caseSchema);
