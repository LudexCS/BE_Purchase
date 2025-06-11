import {Router} from "express";
import {getUserIdByEmail} from "../grpc/auth.client";
import {checkPurchaseHistoryControl, checkTransactionHistoryControl} from "../controller/checkHistory.controller";

/**
 * @swagger
 * tags:
 *   name: PurchaseHistory
 *   description: 게임 및 리소스 구매 이력 확인
 */
const router: Router = Router();

/**
 * @swagger
 * /api/protected/check/purchased/{gameId}:
 *   get:
 *     summary: 구매한 게임 여부 확인
 *     description: 사용자가 특정 게임을 구매했는지 여부를 확인합니다.
 *     tags: [PurchaseHistory]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: gameId
 *         required: true
 *         schema:
 *           type: integer
 *         description: 확인할 게임의 ID
 *     responses:
 *       200:
 *         description: 구매 여부 확인 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: boolean
 *       400:
 *         description: 잘못된 요청
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       500:
 *         description: 서버 오류
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
router.get('/purchased/:gameId', async (req, res) => {
    try {
        const gameId = Number(req.params.gameId);
        const email = req.user;
        if (!email) throw new Error('Invalid user');
        const userId = await getUserIdByEmail(email);
        const result: boolean = await checkPurchaseHistoryControl(userId, gameId);
        res.status(200).json(result);
    } catch (error) {
        if (error instanceof Error) {
            console.error("Check Purchased game Error: " + error.message);
            res.status(400).json({ message: error.message });
        } else {
            console.error("Check Purchased game Error: Unknown Error");
            res.status(500).json({ message: "Server Error" });
        }
    }
});

/**
 * @swagger
 * /api/protected/check/transaction/{resourceId}:
 *   get:
 *     summary: 리소스 거래 여부 확인
 *     description: 사용자가 특정 리소스를 구매한 적이 있는지 확인합니다.
 *     tags: [PurchaseHistory]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: resourceId
 *         required: true
 *         schema:
 *           type: integer
 *         description: 확인할 리소스 ID
 *     responses:
 *       200:
 *         description: 거래 여부 확인 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: boolean
 *       400:
 *         description: 잘못된 요청
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       500:
 *         description: 서버 오류
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
router.get('/transaction/:resourceId', async (req, res) => {
    try {
        const resourceId = Number(req.params.resourceId);
        const email = req.user;
        if (!email) throw new Error('Invalid user');
        const userId = await getUserIdByEmail(email);
        const result: boolean = await checkTransactionHistoryControl(userId, resourceId);
        res.status(200).json(result);
    } catch (error) {
        if (error instanceof Error) {
            console.error("Check Transaction Error: " + error.message);
            res.status(400).json({ message: error.message });
        } else {
            console.error("Check Transaction Error: Unknown Error");
            res.status(500).json({ message: "Server Error" });
        }
    }
});

export default router;