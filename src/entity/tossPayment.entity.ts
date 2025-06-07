import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn
} from 'typeorm';

export enum TossPaymentMethod {
    VIRTUAL_ACCOUNT = '가상계좌',
    EASY_PAY = '간편결제',
    GAME_GIFT = '게임문화상품권',
    TRANSFER = '계좌이체',
    BOOK_GIFT = '도서문화상품권',
    CULTURE_GIFT = '문화상품권',
    CARD = '카드',
    MOBILE = '휴대폰'
}

export function parseTossPaymentMethod(label: string): TossPaymentMethod {
    const entry = Object.entries(TossPaymentMethod).find(
        ([_, value]) => value === label
    );
    if (!entry) {
        throw new Error(`Invalid toss payment method label: ${label}`);
    }
    return TossPaymentMethod[entry[0] as keyof typeof TossPaymentMethod];
}


export enum TossPaymentStatus {
    ABORTED = 'ABORTED',
    CANCELED = 'CANCELED',
    DONE = 'DONE',
    EXPIRED = 'EXPIRED',
    IN_PROGRESS = 'IN_PROGRESS',
    PARTIAL_CANCELED = 'PARTIAL_CANCELED',
    READY = 'READY',
    WAITING_FOR_DEPOSIT = 'WAITING_FOR_DEPOSIT'
}

export function parseTossPaymentStatus(label: string): TossPaymentStatus {
    const entry = Object.entries(TossPaymentStatus).find(
        ([_, value]) => value === label
    );
    if (!entry) {
        throw new Error(`Invalid toss payment status label: ${label}`);
    }
    return TossPaymentStatus[entry[0] as keyof typeof TossPaymentStatus];
}

@Entity('toss_payment')
export class TossPayment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'user_id' })
    userId: number;

    @Column({ name: 'purchased_game_id', nullable: true })
    purchasedGameId: number;

    @Column({name: 'toss_order_id', length: 255})
    tossOrderId: string;

    @Column({name: 'toss_payment_key', length: 255, unique: true})
    tossPaymentKey: string;

    @Column({
        type: 'enum',
        enum: TossPaymentMethod,
        name: 'toss_payment_method'
    })
    tossPaymentMethod: TossPaymentMethod;

    @Column({
        type: 'enum',
        enum: TossPaymentStatus,
        name: 'toss_payment_status'
    })
    tossPaymentStatus: TossPaymentStatus;

    @Column({type: 'bigint'})
    amount: number;

    @Column({length: 10, default: 'KRW'})
    currency: string;

    @Column({type: 'datetime', precision: 6, name: 'approved_at', nullable: true})
    approvedAt?: Date;

    @Column({type: 'datetime', precision: 6, name: 'requested_at'})
    requestedAt: Date;
}