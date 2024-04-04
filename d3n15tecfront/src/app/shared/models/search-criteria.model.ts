export class SearchCriteria {
  constructor(
    public key: string,
    public operation: string,
    public value: any,
    public data?: any
  ) {}
}
