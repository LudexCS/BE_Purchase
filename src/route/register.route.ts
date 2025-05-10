import {Router} from "express";
import {registerPurchasedGameControl, registerResourceTransactionControl} from "../controller/register.controller";

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     RegisterPurchasedGameDto:
 *       type: object
 *       properties:
 *         gameId:
 *           type: number
 *         pricePaid:
 *           type: string
 *         isNftIssued:
 *           type: boolean
 *         purchaseId:
 *           type: integer
 *     RegisterResourceTransactionDto:
 *       type: object
 *       properties:
 *         resourceId:
 *           type: number
 */
const router: Router = Router();

/**
 * @swagger
 * /api/protected/register/game/purchase:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Register a purchased game
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterPurchasedGameDto'
 *     responses:
 *       201:
 *         description: Registered Purchased Game Successfully
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Server Error
 */

router.post('/game/purchase', async (req, res) => {
    try {
        await registerPurchasedGameControl(req);
        res.status(201).json({ message: "Registered Purchased Game Successfully" });
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(500).json({ message: "Server Error" });
        }
    }
});

/**
 * @swagger
 * /api/protected/register/resource/contract:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Register a resource transaction
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterResourceTransactionDto'
 *     responses:
 *       201:
 *         description: Registered Resource Transaction Successfully
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Server Error
 */

router.post('/resource/contract', async (req, res) => {
    try {
        await registerResourceTransactionControl(req);
        res.status(201).json({ message: "Registered Resource Transaction Successfully" });
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(500).json({ message: "Server Error" });
        }
    }
});

export default router;