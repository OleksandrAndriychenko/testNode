// src/models/student.js

import { Schema, model } from "mongoose";

const studentSchema = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true, enum: ["male", "female", "other"] },
    avgMark: { type: Number, required: true },
    onDuty: { type: Boolean, default: false },
    // Нова властивість
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true
  }
);

export const Student = model("Student", studentSchema);

