import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity("purchased_game")
export class PurchasedGame {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: "user_id", type: "int", default: 0 })
    userId: number;

    @Column({ name: "game_id", type: "int", default: 0 })
    gameId: number;

    @Column({ name: "price_paid", type: "decimal", precision: 10, scale: 2 })
    pricePaid: string;

    @Column({ name: "is_nft_issued", type: "tinyint", width: 1, default: false })
    isNftIssued: boolean;

    @Column({ name: "purchase_id", type: "bigint", default: 0 })
    purchaseId: bigint;

    @CreateDateColumn({ name: "purchased_at", type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    purchasedAt: Date;
}