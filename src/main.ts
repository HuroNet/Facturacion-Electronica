import express, { Express } from "express";

class Server {
  app: Express;
  port: number;
  host!: string;

  constructor() {
    this.app = express();
    this.initializeRoutes();
    
    this.port = 3000;
  }


  private initializeRoutes() {
    this.app.get("/", (req, res) => {
      res.send("Hola desde la Facturacion");
    });
  }


  listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on Host   port ${this.port}`);
    
    });
  }
}

const server = new Server();
server.listen();
