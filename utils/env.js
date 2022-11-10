import dotenv from "dotenv";

dotenv.config();

const env = {
    API_NAME: process.env.API_NAME,
    API_PORT: process.env.API_PORT,
    API_HOST: process.env.API_HOST,
};

export default env;
