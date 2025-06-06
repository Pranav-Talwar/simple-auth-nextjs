// types/global.d.ts
import mongoose from 'mongoose';

declare global {
  var mongooseConn: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  } | undefined;
}

export {}; // to make this a module
