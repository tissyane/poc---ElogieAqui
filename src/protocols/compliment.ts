export type Compliment = {
    id?: number,
    author: string,
    company: string,
    description: string,
    orderDate: string | Date,
    attachments?: URL,
  }