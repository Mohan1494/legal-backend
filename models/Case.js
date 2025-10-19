import mongoose from "mongoose";

const caseSchema = new mongoose.Schema({
  caseTitle: { type: String, required: true },
  caseNumber: { type: String, required: true, unique: true },
  clientName: { type: String, required: true },
  caseType: { type: String, default: "" }, // e.g. Civil, Criminal, Corporate
  status: { type: String, default: "Open" }, // Open, Closed, Pending, etc.
  assignedLawyer: { type: String, default: "" },
  documents: [{ type: String }], // store file URLs or names
  description: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Case", caseSchema);
