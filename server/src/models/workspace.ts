import mongoose from "mongoose";

type MeetingType = {
  meetType:
    | "Feature Discussion"
    | "Bug Tracking"
    | "Daily Update"
    | "Weekly Update";
  date: Date;
  title: string;
  mDesc: string;
  link: string;
};

const meetingSchema = new mongoose.Schema({
  meetType: {
    type: String,
    enum: [
      "Feature Discussion",
      "Bug Tracking",
      "Daily Update",
      "Weekly Update",
    ],
    required: true,
  },
  date: {
    required: true,
    type: Date,
  },
  title: { required: true, type: String },
  mDesc: { required: true, type: String },
  link: { type: String },
});

type TodosType = {
  title: string;
  tDesc: string;
  deadline: Date;
  notes: string;
};

const todoSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  tDesc: {
    required: true,
    type: String,
  },
  deadline: {
    type: Date,
    required: true,
  },
  notes: {
    type: String,
  },
});

type WorkspaceType = {
  name: string;
  desc: string;
  createdBy: string;
  coWorkers: string[];
  meetings: MeetingType;
  todos: TodosType;
};

const workspaceSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  wDesc: {
    required: true,
    type: String,
  },
  createdBy: {
    required: true,
    type: mongoose.SchemaTypes.ObjectId,
  },
  coWorkers: {
    type: [String],
    default: [],
  },
  meetings: {
    type: meetingSchema,
  },
  todos: {
    type: todoSchema,
  },
});

const Workspace = mongoose.model<WorkspaceType>("Workspace", workspaceSchema);

export default Workspace;
