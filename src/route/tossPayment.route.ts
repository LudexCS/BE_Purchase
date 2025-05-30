import {Router} from "express";
import {BeforePaymentDto, ConfirmPaymentDto} from "../dto/tossPayment.dto";
import {beforePaymentControl, confirmPaymentControl} from "../controller/tossPayment.controller";

const router: Router = Router();

router.post('/before', async (req, res) => {
    try {
        const beforePaymentDto: BeforePaymentDto = req.body;
        await beforePaymentControl(beforePaymentDto);
        res.status(201).json({ message: "Registered Before Payment Successfully" });
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(500).json({ message: "Server Error" });
        }
    }
});

router.post('/confirm', async (req, res) => {
    try {
        const confirmPaymentDto: ConfirmPaymentDto = req.body;
        const { response, result } = await confirmPaymentControl(confirmPaymentDto);
        res.status(response.status).json(result);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(500).json({ message: "Server Error" });
        }
    }
})

export default router;