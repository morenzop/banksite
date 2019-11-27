export class Account {
    id: number;
    type: AccountType
    rewards: number;
    nickname: string;
    balance: number;
    
}

export enum AccountType{
    Savings, Checking, Credit
}