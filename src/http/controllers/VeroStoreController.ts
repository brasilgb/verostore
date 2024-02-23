import axios from "axios";
import type { Request, Response, NextFunction } from "express";

interface VeroStoreProps {
  pdvToken: string;
  merchantDocumentNumber: number;
  deviceToken: string;
}
const getVeroStore = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { pdvToken, merchantDocumentNumber, deviceToken }: VeroStoreProps =
    req.body;
  try {
    const response = await axios.post(`${process.env.APP_VERO_STORE}`,
      {
        pdvToken: pdvToken,
        merchantDocumentNumber: merchantDocumentNumber,
        deviceToken: deviceToken,
      }
    );
    const verostore = response.data;
    res.send(verostore);
  } catch (error) {
    next(error);
  }
};

export const veroController = {
  getVeroStore,
};
