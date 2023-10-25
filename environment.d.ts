//this is a declaration file.
//here we will extend the global process and interface.

//declare in the global space
declare global {
  //js objects in the global namespace.
  namespace NodeJS {
    interface ProcessEnv {
      MY_SECRET: string;
      MONGO_URL: string;
    }
  }
}

export {}; //converts this file into a module
