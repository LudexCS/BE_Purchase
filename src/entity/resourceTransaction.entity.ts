import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity("resource_transaction")
export class ResourceTransaction {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: "resource_id", type: "int", default: 0 })
    resourceId: number;

    @Column({ name: "buyer_id", type: "int", default: 0 })
    buyerId: number;

    @Column({ name: "seller_id", type: "int", default: 0 })
    sellerId: number;

    @CreateDateColumn({ name: "registered_at", type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    registeredAt: Date;
}